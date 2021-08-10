import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Select, DashboardSectionTitle, Button } from "../atoms";
import { listType, propertyType } from "../data/SelectOptions";
import { axiosInstance } from "../Auth/Axios";
import PropertyCard from "../templates/PropertyCard";
import DashboardLoader from "../templates/DashboardLoader";

const RequestProperty = () => {
  const [loading, setLoading] = useState(false);
  const [showMessageBox] = useState(false);
  const [listTypeResult, setListTypeResult] = useState("");
  const [propertyTypeResult, setPropertyTypeResult] = useState("");
  const [results, setResults] = useState([]);
  const [initialState, setInitialState] = useState(true);

  const validationSchema = Yup.object().shape({
    message: Yup.string().required("Message is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const getPropertiesAvailable = () => {
    setLoading(true);
    axiosInstance
      .get(`property?type=${listTypeResult}&category=${propertyTypeResult}`)
      .then((response) => {
        const searchResults = response.data.data;
        console.log(searchResults);
        setResults(searchResults);
        setInitialState(false);
        setLoading(false);
      });
  };

  // let resultsToDisplay;

  // if (results.length === 0) {
  //   <p>No properties match your search</p>;
  // } else {
  //   <div className="grid grid-cols-4 gap-2 mt-6">
  //     {results.map((property) => {
  //       return (
  //         <PropertyCard
  //           location={property.city}
  //           price={property.price}
  //           place={property.name}
  //           photo={property.images[0].image_url}
  //         />
  //       );
  //     })}
  //   </div>;
  // }

  return (
    <div className="m-auto w-11/12">
      <DashboardSectionTitle text="Request a Property" showButton={false} />
      <>
        <div
          className="w-full justify-between flex items-center"
          style={{ flex: "1" }}
        >
          <Select
            labelName="Listing Type"
            values={propertyType}
            selectedValue="Under Construction"
            name="property type"
            onValueChange={(val) => setListTypeResult(val)}
          />
          <Select
            labelName="Property Type"
            values={listType}
            selectedValue="New Development"
            onValueChange={(val) => setPropertyTypeResult(val)}
          />
          <div
            className="w-1/6 flex items-center"
            onClick={getPropertiesAvailable}
          >
            <Button buttonText="Search Property" loading={loading} />
          </div>
        </div>
        <div className="">
          {initialState ? (
            ""
          ) : results.length === 0 ? (
            <p>No properties match your search</p>
          ) : (
            <div className="ml-4">
              <div className="grid grid-cols-4 gap-2 mt-6">
                {results.map((property) => {
                  return (
                    <PropertyCard
                      location={property.city}
                      price={property.price}
                      place={property.name}
                      photo={property.images[0].image_url}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className=""></div>
      </>
      {showMessageBox ? (
        <form>
          <textarea
            name=""
            cols="20"
            rows="5"
            placeholder="Message"
            className="w-full font-normal text-base border border-gray-400 focus:outline-none px-2 rounded-md py-1 mt-1"
            style={{ backgroundColor: "#EFF0F6" }}
          ></textarea>

          <div className="flex w-full justify-center items-center text-center mb-10">
            <div className="w-1/2">
              <Button loading={loading} buttonText="Submit" />
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export { RequestProperty };
