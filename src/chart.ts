type Resolution = 60 | 300 | 3600
type Datapoint = number | null
type Datapoints = Datapoint[]

interface Backend {
  /**
   * Issues a call to a remote service to fetch some data. The call is
   * asynchronous - you will be called back via the receiveTemperatureData
   * method to get the result. Service calls are guaranteed to succeed.
   *
   * You do not need to implement this method. A fully functional version of
   * this function will be available in production. However, the production
   * implementation is being developed in parallel by another team and is not
   * available to you at this time. Utilize as necessary in your development.
   *
   * @param startTime - The epoch time of the first datapoint to fetch,
   * inclusive
   * @param endTime - The epoch time of the last datapoint to fetch, exclusive
   * @param resolution - The period, or granularity, of the data to fetch, in
   * seconds.
   */
  requestTemperatureData(startTime: number,
                         endTime: number,
                         resolution: Resolution): void
}

interface UI {
  /**
   * Renders a chart on screen with the given datapoints, which are simply an
   * array of floating point values. Each time this method is called the chart
   * is cleared and re-rendered. This is the output of your algorithm.
   *
   * You do not need to implement this method. A fully functional version of
   * this function will be available in production. However, the production
   * implementation is being developed in parallel by another team and is not
   * available to you at this time. Utilize as necessary in your development.
   *
   * @param datapoints - An array of values to show on screen. A null in this
   * array means is not yet data available for the given point.
   */
  setChartData(datapoints: Datapoints): void
}

class Controller {
  /**
   * Initializes your object with the starting chart range. You should perform
   * any service calls needed to render the chart as quickly as possible. The
   * startTime and endTime are guaranteed to be aligned with the chart period;
   * i.e. if the chart covers a four week span, startTime and endTime will be
   * aligned on hourly boundaries; if the chart covers a 36 minute span,
   * startTime and endTime will be aligned on one-minute boundaries.
   *
   * @param startTime - The first datapoint to be rendered, inclusive, in
   * seconds since the epoch.
   * @param endTime - The last datapoint to be rendered, exclusive, in seconds
   * since the epoch.
   */
  constructor(ui: UI, backend: Backend, startTime: number, endTime: number) {
    // TODO: implement this method
  }

  /**
   * Changes the startTime of the chart to a new value. As in the constructor,
   * the startTime is guaranteed to be aligned on a boundary appropriate to
   * the chart period.
   *
   * This method will be called by external user actions and drives your
   * algorithm.
   *
   * @param startTime - The new first datapoint to be rendered, inclusive, in
   * seconds since the epoch.
   */
  setStartTime(startTime: number): void {
    // TODO: implement this method
  }

  /**
   * Changes the endTime of the chart to a new value. As in the constructor,
   * the endTime is guaranteed to be aligned on a boundary appropriate to the
   * chart period.
   *
   * This method will be called by external user actions and drives your
   * algorithm.
   *
   * @param endTime - The new last datapoint to be rendered, exclusive, in
   * seconds since the epoch.
   *
   */
  setEndTime(endTime: number): void {
    // TODO: implement this method
  }

  /**
   * Callback method to finish asynchronous service calls.
   *
   * This method will be called exactly once, asynchronously, after you call
   * {@link Backend.requestTemperatureData}
   *
   * @param startTime - The epoch time of the first datapoint returned,
   * inclusive
   * @param endTime - The epoch time of the last datapoint returned,
   * exclusive
   * @param resolution - The period, or granularity, of the data returned,
   * in seconds.
   * @param datapoints - An array of daapoints for the requested range
   */
  receiveTemperatureData(startTime: number,
                         endTime: number,
                         resolution: Resolution,
                         datapoints: Datapoints): void {
    // TODO: implement this method
  }
}

export function add(x: number, y: number): number {
  return x + y;
}
