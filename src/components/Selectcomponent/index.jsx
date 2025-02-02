import React from "react";

export default function Selectcomponent({
  name = "",
  values = [],
  classNameStyle = "",
  classNameLabel="",
  classNameDiv="",
  firstOption="",
  width="w-full"
}) {
  return (
    <div className={`flex flex-col ${width} ${classNameDiv}`}>
      <label className={classNameLabel}>{name}</label>
      <select className={classNameStyle}>
        {firstOption}
        {values &&
          values.map((value) => {
            return <option value={`${value}`} key={value}>{value}</option>;
          })}
      </select>
    </div>
  );
}
