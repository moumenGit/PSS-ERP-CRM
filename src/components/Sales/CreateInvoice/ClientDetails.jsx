import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import FieldComponent from "@/components/FieldComponent";
import Selectcomponent from "@/components/Selectcomponent";
import React, { useState, useEffect } from "react";
import PopupForm from "./PopupForm";

export default function ClientDetails() {
  // for radio input
  const [selectedOption, setSelectedOption] = useState("");
  //   for checkbox
  const [isChecked, setIsChecked] = useState(false);
  //   for fetching the countries from api into the array
  const [countries, setCountries] = useState([]);

  //   the function is for submiting the result to db
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the selected option, send it to a server
    console.log(selectedOption);
  };

  //   fetching data from the api
  useEffect(() => {
    // Fetch country data from the API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Extract country names and sort them alphabetically
        const countryNames = data.map((country) => country.name.common);
        const sortedCountries = countryNames.sort();

        setCountries(sortedCountries);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  // to open and close advance option
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={`${isPopupOpen ? "" : ""}`}>
      <div className="flex flex-col bg-[#f6f9fc] rounded w-full p-1 border border-[#ced4da]">
        <div className="flex flex-row justify-between">
          <h1 className="font-serif text-xl font-semibold m-2">
            Client Details
          </h1>
          <button
            onClick={openPopup}
            className="m-1 text-blue-500 font-medium underline"
          >
            Advanced
          </button>
          <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
        </div>

        {/* --------------client type using radio----------------- */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 m-2">
          <div className="flex flex-col m-1">
            <p className="text-[#437c94] font-medium">Client Type</p>
            <div className="text-[#437c94] font-medium flex flex-row p-1 space-x-3 text-base">
              <div>
                <label>
                  <input
                    type="radio"
                    className="m-1"
                    value="Individual"
                    checked={selectedOption === "Individual"}
                    onChange={(e) => {
                      setSelectedOption(e.target.value);
                    }}
                  />
                  Individual
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    className="m-1"
                    value="Business"
                    checked={selectedOption === "Business"}
                    onChange={(e) => {
                      setSelectedOption(e.target.value);
                    }}
                  />
                  Business
                </label>
              </div>
            </div>
          </div>

          {/* ------------------Business name------------------------ */}
          <FieldComponent
            labelName="Business Name"
            inputType="text"
            classNameLabel="text-[#437c94] font-medium"
            classNameInput="border border-[#ced4da] p-1 m-1"
          />
          {/* --------------------first & last names------------------ */}
          <div className="flex sm:flex-row flex-col space-x-1">
            <FieldComponent
              labelName="First name"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
            <FieldComponent
              labelName="Last name"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
          </div>
          <FieldComponent
            labelName="Email"
            inputType="email"
            classNameLabel="text-[#437c94] font-medium"
            classNameInput="border border-[#ced4da] p-1 m-1"
          />
          {/* -------------------city, state & zip----------------------- */}
          <div className="flex xl:flex-row flex-col space-x-1">
            <FieldComponent
              labelName="City"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
            <FieldComponent
              labelName="State/Province"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
            <FieldComponent
              labelName="Postal/Zip Code"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
          </div>
          {/* --------------------telephone & mobile----------------------- */}
          <div className="flex sm:flex-row flex-col space-x-1">
            <FieldComponent
              labelName="Telephone"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
            <FieldComponent
              labelName="Mobile"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
          </div>
          {/* ----------------------countries api--------------------------- */}
          <Selectcomponent
            values={countries}
            name="Country"
            classNameLabel="text-[#437c94] font-medium"
            classNameStyle="border border-[#ced4da] p-1"
            firstOption={<option>(Select Country)</option>}
          />
          {/* -----------------checkbox------------------- */}
          <div>
            <label>
              <input
                type="checkbox"
                className="m-1"
                checked={isChecked}
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              />
              Check this box
            </label>
          </div>
          {/* ------------------cancel and save buttons---------------- */}
          <div className="flex flex-row space-x-4 justify-end">
            <ButtonComponent
              buttonName={"Cancel"}
              classNameButton="p-2 border border-[#ced4da] hover:bg-[#ced4da] duration-500"
            />
            <ButtonComponent
              buttonName={"Save Client"}
              classNameButton="p-2 bg-[#437c94] text-white hover:bg-[#ced4da] hover:text-black duration-500"
              buttonType="submit"
            />
          </div>
          {/* --------end of the form---------- */}
        </form>
      </div>
    </div>
  );
}
