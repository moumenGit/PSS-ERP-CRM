import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Selectcomponent from "../Selectcomponent";

export default function CalendarComponent({calendarName}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  return (
    <div className="flex sm:flex-row flex-col items-end justify-center sm:space-x-1 space-y-1">
      <Selectcomponent
        name={calendarName}
        values={["Custom", "Last Month", "Last Year"]}
        classNameLabel="text-[#437c94] font-medium"
        classNameStyle="border border-[#ced4da] p-1"
      />
      <div className="flex flex-row justify-center items-center space-x-1">
        <div>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="From"
            className="border border-[#ced4da] w-28 p-1 "
          />
        </div>
        <span className="font-bold"> - </span>
        <div>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="To"
            className="border border-[#ced4da] w-28 p-1 "
          />
        </div>
      </div>
    </div>
  );
}
