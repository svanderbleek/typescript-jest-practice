import { Controller } from "../src/chart"

describe("Controller", () => {
  it("Empty Cache", () => {
    let ui = {setChartData: jest.fn()};
    let backend = {requestTemperatureData: jest.fn()};
    let controller = new Controller(ui, backend, 946731600, 946735200);

    expect(ui.setChartData).toHaveBeenCalled();
    expect(backend.requestTemperatureData).toHaveBeenCalled();
  });
});
