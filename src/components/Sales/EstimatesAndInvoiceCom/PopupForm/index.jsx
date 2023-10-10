// components/PopupForm.js
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import FieldComponent from "@/components/FieldComponent";
import Selectcomponent from "@/components/Selectcomponent";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    accountNumber: "",
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  // for radio input
  const [selectedOption, setSelectedOption] = useState("");
  //   for checkbox
  const [isChecked, setIsChecked] = useState(false);
  //   for fetching the countries from api into the array
  const [countries, setCountries] = useState([]);

  //   the function is for submiting the result to db
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Do something with the selected option, send it to a server
  //   console.log(selectedOption);
  // };

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

  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Fetch currency data from the API
    fetch("https://api.exchangerate-api.com/v4/latest/USD") // You can change the base currency as needed
      .then((response) => response.json())
      .then((data) => {
        // Extract currency codes
        const currencyCodes = Object.keys(data.rates);

        setCurrencies(currencyCodes);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, []);

  

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-70 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-2 shadow-lg w-auto overflow-auto h-[93%]">
        <div className="flex flex-row justify-end static">
          <AiOutlineClose
            className="bg-zinc-100 text-3xl cursor-pointer p-1 border-2 rounded-md hover:bg-[#e4e3e0] duration-500"
            onClick={onClose}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 grid-cols-1 gap-3 m-2"
        >
          {/* ++++++++++++++++++++++++++++++++Client Details+++++++++++++++++++++++++++++++++ */}
          <div className="space-y-6">
            <h1 className="font-serif text-xl font-semibold m-2 bg-[#f6f9fc] text-[#437c94] rounded w-full p-3 border border-[#ced4da]">
              Client Details
            </h1>
            {/* ------------------------radio buttons------------------- */}
            <div className="flex flex-col m-2 mt-2">
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
              labelName="Full Name/ Business Name"
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
            {/* -----------------------------email---------------------------------- */}
            <FieldComponent
              labelName="Email"
              inputType="email"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1 m-1"
            />
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
            {/* --------------------street addresses------------------ */}
            <div className="flex sm:flex-row flex-col space-x-1">
              <FieldComponent
                labelName="Street Address 1"
                inputType="text"
                classNameLabel="text-[#437c94] font-medium"
                classNameInput="border border-[#ced4da] p-1"
              />
              <FieldComponent
                labelName="Street Address 2"
                inputType="text"
                classNameLabel="text-[#437c94] font-medium"
                classNameInput="border border-[#ced4da] p-1"
              />
            </div>
            {/* -------------------city, state----------------------- */}
            <div className="flex sm:flex-row flex-col space-x-1">
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
            </div>
            {/* -------------------------Postal-------------------------- */}
            <FieldComponent
              labelName="Postal/Zip Code"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
            {/* ----------------------countries api--------------------------- */}
            <Selectcomponent
              values={countries}
              name="Country"
              classNameLabel="text-[#437c94] font-medium"
              classNameStyle="border border-[#ced4da] p-1"
              firstOption={<option>(Select Country)</option>}
            />
            {/* ------------------vat number--------------------- */}
            <FieldComponent
              labelName="Vat Number"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1"
            />
            {/* -----------------checkbox------------------- */}
            <div>
              <label>
                <input
                  type="checkbox"
                  className="m-1"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                Add Secondary address
              </label>
            </div>
            {/* --------------------Add Secondary address----------------------- */}
            {isChecked && (
              <div className="bg-[#f6f9fc] rounded p-4 border border-[#ced4da]">
                {/* --------------------street addresses------------------ */}
                <div className="flex sm:flex-row flex-col space-x-1">
                  <FieldComponent
                    labelName="Street Address 1"
                    inputType="text"
                    classNameLabel="text-[#437c94] font-medium"
                    classNameInput="border border-[#ced4da] p-1"
                  />
                  <FieldComponent
                    labelName="Street Address 2"
                    inputType="text"
                    classNameLabel="text-[#437c94] font-medium"
                    classNameInput="border border-[#ced4da] p-1"
                  />
                </div>
                {/* -------------------city, state----------------------- */}
                <div className="flex sm:flex-row flex-col space-x-1">
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
                </div>
                {/* -------------------------Postal-------------------------- */}
                <FieldComponent
                  labelName="Postal/Zip Code"
                  inputType="text"
                  classNameLabel="text-[#437c94] font-medium"
                  classNameInput="border border-[#ced4da] p-1"
                />
              </div>
            )}
          </div>
          {/* +++++++++++++++++++++++++Account Details++++++++++++++++++++++++++++++ */}
          <div className="space-y-6">
            <h1 className="font-serif text-xl text-[#437c94] font-semibold m-2 bg-[#f6f9fc] rounded w-full p-3 border border-[#ced4da]">
              Account Details
            </h1>
            {/* -------------------------code number------------------------- */}
            <FieldComponent
              labelName="Code Number"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1 m-1"
            />
            {/* ----------------------Currency api--------------------------- */}
            <Selectcomponent
              values={currencies}
              name="Currency"
              classNameLabel="text-[#437c94] font-medium"
              classNameStyle="border border-[#ced4da] p-1"
              firstOption={<option>(Select Currency)</option>}
            />
            {/* -----------------------------email---------------------------------- */}
            <FieldComponent
              labelName="Email"
              inputType="email"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1 m-1"
            />
            {/* -----------------------------category---------------------------------- */}
            <FieldComponent
              labelName="Category"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1 m-1"
            />
            {/* -----------------------------Notes---------------------------------- */}
            <FieldComponent
              labelName="Notes"
              inputType="text"
              classNameLabel="text-[#437c94] font-medium"
              classNameInput="border border-[#ced4da] p-1 m-1"
            />
            {/* -------------------------------display language--------------------------- */}
            <Selectcomponent
              values={["Display Languagee", "Arabic", "English"]}
              name="Display Language"
              classNameStyle="border border-[#ced4da] p-1"
              classNameLabel="text-[#437c94] font-medium"
            />
          </div>
          {/* ------------------cancel and save buttons---------------- */}
          <div className="flex flex-row space-x-4 justify-end w-full md:col-span-2">
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
};

export default PopupForm;
