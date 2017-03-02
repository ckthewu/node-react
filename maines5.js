'use strict';

var _antd = require('antd');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePicker = _antd.DatePicker.RangePicker;

var React = require('react');
var ReactDOM = require('react-dom');
var dateFormat = 'YYYY/MM/DD';
var dateNow = new Date(),
    endDate = new Date();

var dateToday = dateNow.getFullYear() + "/",
    month = dateNow.getMonth(),
    date = dateNow.getDate();

endDate.setFullYear("2017");
endDate.setMonth("8");
endDate.setDate("1");
endDate.setHours("0");
endDate.setMinutes("0");
endDate.setSeconds("0");
endDate.setMilliseconds("0");

function disabledDate(current) {
    return current && (current.valueOf() >= endDate || current.valueOf() <= dateNow - 3600000 * 24);
}

if (month < 9) {
    dateToday += "0";
}
dateToday += Number(month + 1) + "/";
if (date < 10) {
    dateToday += "0";
}
dateToday += date;

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(_antd.DatePicker, { defaultValue: (0, _moment2.default)(dateToday, dateFormat),
        disabledDate: disabledDate, format: dateFormat })
), document.getElementById("datepicker"));

