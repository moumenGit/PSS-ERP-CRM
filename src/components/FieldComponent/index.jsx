import React from "react";

export default function FieldComponent({
  labelName = "",
  inputType = "",
  classNameInput = "",
  classNameLabel = "",
  classNameDiv = "",
  placeHolderName = "",
  flexType = "flex flex-col",
  pattern = "",
  width="w-full"
}) {
  return (
    <div className={`${flexType} ${width} ${classNameDiv} `}>
      <label className={classNameLabel}>{labelName}</label>
      <input
        type={`${inputType}`}
        placeholder={`${placeHolderName}`}
        className={classNameInput}
      />
    </div>
  );
}
