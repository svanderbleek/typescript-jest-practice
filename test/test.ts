import { Controller, Resolution, Datapoints } from "../src/chart"

describe("Controller", () => {
  it("meets expected call pattern from examples", () => {
    const backend = {requestTemperatureData: jest.fn()};
    const start = 946731600;
    const end = 946735200;
    const res:Resolution = 60;
    const data = new Array(res).fill(1);

    const ui = {setChartData: jest.fn()};

    const controller = new Controller(ui, backend, start, end);
    expect(backend.requestTemperatureData).toHaveBeenLastCalledWith(start, end, res);
    expect(ui.setChartData).toHaveBeenLastCalledWith(new Array(60).fill(null));

    controller.receiveTemperatureData(start, end, res, data);
    expect(ui.setChartData).toHaveBeenLastCalledWith(data);

    const setStart = 946729800;
    controller.setStartTime(setStart);
    expect(backend.requestTemperatureData).toHaveBeenLastCalledWith(setStart, start, res);
    expect(ui.setChartData).toHaveBeenLastCalledWith(new Array(30).fill(null).concat(data));

    const setData = new Array(60).fill(2);
    controller.receiveTemperatureData(setStart, start, res, setData);
    expect(ui.setChartData).toHaveBeenLastCalledWith(setData.concat(data));

    const setEnd = 946738800;
    const newRes:Resolution = 300;
    const rolledData:Datapoints = [];
    const newData:Datapoints = [];
    controller.setEndTime(setEnd);
    expect(backend.requestTemperatureData).toHaveBeenLastCalledWith(setStart, setEnd, newRes);
    expect(ui.setChartData).toHaveBeenLastCalledWith(rolledData.concat(new Array(12).fill(null)))

    controller.receiveTemperatureData(setStart, setEnd, newRes, newData);
    expect(ui.setChartData).toHaveBeenLastCalledWith(newData);
  });

  it("resoution() depends on chart range", () => {
    const zero_hours = 0;
    const two_hours = 60 * 60 * 2;
    const controller = new Controller(
      {setChartData: () => {}},
      {requestTemperatureData: () => {}},
      zero_hours,
      two_hours);
    expect(controller.resolution()).toBe(60);

    const one_week = 60 * 60 * 24 * 7;
    controller.setStartTime(two_hours);
    controller.setEndTime(one_week);
    expect(controller.resolution()).toBe(300);

    controller.setStartTime(one_week);
    controller.setEndTime(Number.POSITIVE_INFINITY);
    expect(controller.resolution()).toBe(3600);
  })
});
