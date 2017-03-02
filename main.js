import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
var React = require('react');
var ReactDOM = require('react-dom');
const dateFormat = 'YYYY/MM/DD';
var dateNow = new Date(),
    endDate = new Date();

var dateToday = dateNow.getFullYear()+"/",
    month = dateNow.getMonth(),
    date = dateNow.getDate();

endDate.setFullYear("2017");
endDate.setMonth("8");
endDate.setDate("1");
endDate.setHours("0");
endDate.setMinutes("0");
endDate.setSeconds("0");
endDate.setMilliseconds("0");

function disabledDate(current){
    return current && (current.valueOf() >= endDate || current.valueOf() <= (dateNow-3600000*24));
}

if(month < 9){
    dateToday += "0";
}
dateToday += Number(month+1) + "/";
if(date < 10){
    dateToday += "0";
}
dateToday += date;

ReactDOM.render(
  <div>
    <DatePicker defaultValue={moment(dateToday, dateFormat)}
    disabledDate={disabledDate} format={dateFormat} />
  </div>
, document.getElementById("datepicker"));
