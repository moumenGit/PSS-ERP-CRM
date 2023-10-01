import React from "react";

export default function Selectcomponent({
  name = "",
  values = [],
  classNameStyle = "",
  classNameLabel="",
  classNameDiv="",
  firstOption="",
}) {
  return (
    <div className={`flex flex-col w-full ${classNameDiv}`}>
      <label className={classNameLabel}>{name}</label>
      <select className={classNameStyle} name="">
        {firstOption}
        {values &&
          values.map((value) => {
            return <option value={`${value}`} key={value}>{value}</option>;
          })}
      </select>
    </div>
  );
}
