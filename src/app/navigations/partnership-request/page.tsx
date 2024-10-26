"use client";
import React, { useContext } from "react";
import RequestTemplate from "./requestTemplate";
import Select from "react-select";
import { OptionContext } from "../../../context/selectContext";
import { colorStyles } from "./../../../helper";
import { Proc_categories } from "./../../../data/Proc_categories";




const equip_categories = [
  { value: "earth-movers", label: "Earth movers" },
  { value: "safety-accessories", label: "Safety accessories" },
  { value: "clothing-accessories", label: "Clothing accessories" },
  { value: "crane", label: "Crane" },
  { value: "aerial-work-platforms", label: "Aerial Work Platforms" },
  { value: "compactors", label: "Compactors" },
  { value: "concrete-and-masonry", label: "Concrete and Masonry" },
  { value: "air-solutions", label: "Air Solutions" },
  {
    value: "electric-and-hydraulic-power-tools",
    label: "Electric and Hydraulic Power Tools",
  },
  {
    value: "agriculture-and-landscaping",
    label: "Agriculture and Landscaping",
  },
  {
    value: "forklift-and-material-handling",
    label: "Forklift and Material Handling",
  },
  { value: "construction-robotics", label: "Construction Robotics" },
  { value: "measurement-devices", label: "Measurement Devices" },
  { value: "fluid-solutions", label: "Fluid Solutions" },
  {
    value: "lightning-power-and-security",
    label: "Lightning, Power and Security",
  },
  {
    value: "surface-preparation-and-cleaning",
    label: "Surface Preparation and Cleaning",
  },
  { value: "vehicles-and-trailers", label: "Vehicles and Trailers" },
  {
    value: "welding-cutting-and-pipe-fabrication",
    label: "Welding, Cutting and Pipe Fabrication",
  },
];
const sup_categories = [
  { value: "facility-management", label: "Facility Management" },
  { value: "property-management", label: "Property Management" },
  { value: "financial-services", label: "Financial Services" },
  { value: "legal-services", label: "Legal Services" },
  { value: "construction-staffing", label: "Construction Staffing" },
];
const tech_categories = [
  { value: "digital-tools", label: "Digital Tools" },
  { value: "advanced-technology", label: "Advanced Technology" },
  { value: "robotics", label: "Robotics" },
  { value: "data-and-intelligence", label: "Data and Intelligence" },
];

const PartnershipRequest = () => {
  const options = [
    { label: "Procurement", value: "procurement" },
    { label: "Equipment", value: "Equipment" },
    { label: "Support Services", value: "Support Services" },
    { label: "Technological Solutions", value: "Technological Solutions" },
  ];

  const context = useContext(OptionContext);

  if (!context) {
    throw new Error("DisplayPage must be used within an OptionProvider");
  }
  const { selectedOption, changeOption } = context;

  const handleChange = (event: any) => {
    changeOption(event.value);
  };

  return (
    <>
      <section className="flex justify-between w-3/4">
        <div className="flex items-center gap-2 text-lg">
          <p className="text-sec">Partners</p>
          <p className="text-2xl -mr-2">/</p>
          <div className="hover:cursor-pointer">
            <Select
              options={options}
              defaultValue={options[0]}
              styles={colorStyles}
              onChange={(values) => handleChange(values)}
              classNamePrefix={"react-select"}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-6 font-semibold">
          <p>List</p>
          <p>Images</p>
        </div>
      </section>
      {selectedOption === "Procurement" ? (
        <RequestTemplate
          name="Procurement"
          location=" in Lagos, Nigeria"
          results={304}
          categories={Proc_categories}
        />
      ) : selectedOption === "Equipment" ? (
        <RequestTemplate
          name="Equipment"
          location=" in Lagos, Nigeria"
          results={43}
          categories={equip_categories}
        />
      ) : selectedOption === "Support Services" ? (
        <RequestTemplate
          name="Support Services"
          location=" in Lagos, Nigeria"
          results={38}
          categories={sup_categories}
        />
      ) : selectedOption === "Technological Solutions" ? (
        <RequestTemplate
          name="Technological Solutions"
          location=" in Lagos, Nigeria"
          results={325}
          categories={tech_categories}
        />
      ) : null}
    </>
  );
};

export default PartnershipRequest;
