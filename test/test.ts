import { Controller, Resolution, Datapoints } from "../src/chart"

describe("Controller", () => {
  it("meets expected call pattern from examples", () => {
    let backend = {requestTemperatureData: jest.fn()};
    let start = 946731600;
    let end = 946735200;
    let res:Resolution = 60;
    let data = new Array(res).fill(1);

    let ui = {setChartData: jest.fn()};

    let controller = new Controller(ui, backend, start, end);
    expect(backend.requestTemperatureData).toHaveBeenLastCalledWith(start, end, res);
    expect(ui.setChartData).toHaveBeenLastCalledWith(new Array(60).fill(null));

    controller.receiveTemperatureData(start, end, res, data);
    expect(ui.setChartData).toHaveBeenLastCalledWith(data);

    let setStart = 946729800;
    controller.setStartTime(setStart);
    expect(backend.requestTemperatureData).toHaveBeenLastCalledWith(setStart, start, res);
    expect(ui.setChartData).toHaveBeenLastCalledWith(new Array(30).fill(null).concat(data));

    let setData = new Array(60).fill(2);
    controller.receiveTemperatureData(setStart, start, res, setData);
    expect(ui.setChartData).toHaveBeenLastCalledWith(setData.concat(data));

    let setEnd = 946738800;
    let newRes:Resolution = 300;
    let rolledData:Datapoints = [];
    let newData:Datapoints = [];
    controller.setEndTime(setEnd);
    expect(backend.requestTemperatureData).toHaveBeenLastCalledWith(setStart, setEnd, newRes);
    expect(ui.setChartData).toHaveBeenLastCalledWith(rolledData.concat(new Array(12).fill(null)))

    controller.receiveTemperatureData(setStart, setEnd, newRes, newData);
    expect(ui.setChartData).toHaveBeenLastCalledWith(newData);
  });

  it("resoution() depends on chart range", () => {
    let zero_hours = 0;
    let two_hours = 60 * 60 * 2;
    let controller = new Controller(
      {setChartData: () => {}},
      {requestTemperatureData: () => {}},
      zero_hours,
      two_hours);
    expect(controller.resolution()).toBe(60);

    let one_week = 60 * 60 * 24 * 7;
    controller.setStartTime(two_hours);
    controller.setEndTime(one_week);
    expect(controller.resolution()).toBe(300);

    controller.setStartTime(one_week);
    controller.setEndTime(Number.POSITIVE_INFINITY);
    expect(controller.resolution()).toBe(3600);
  })
});
