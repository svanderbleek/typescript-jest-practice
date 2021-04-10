"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var Controller = /** @class */ (function () {
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
    function Controller(ui, backend, startTime, endTime) {
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
    Controller.prototype.setStartTime = function (startTime) {
        // TODO: implement this method
    };
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
    Controller.prototype.setEndTime = function (endTime) {
        // TODO: implement this method
    };
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
    Controller.prototype.receiveTemperatureData = function (startTime, endTime, resolution, datapoints) {
        // TODO: implement this method
    };
    return Controller;
}());
function add(x, y) {
    return x + y;
}
exports.add = add;
