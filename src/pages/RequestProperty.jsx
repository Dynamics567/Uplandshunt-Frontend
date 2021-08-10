import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Select, DashboardSectionTitle, Button } from "../atoms";
import { listType, propertyType } from "../data/SelectOptions";
import { axiosInstance, axiosWithAuth } from "../Auth/Axios";
import PropertyCard from "../templates/PropertyCard";

const RequestProperty = () => {
  const messageRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [listTypeResult, setListTypeResult] = useState("");
  const [propertyTypeResult, setPropertyTypeResult] = useState("");
  const [results, setResults] = useState([]);
  const [initialState, setInitialState] = useState(true);
  const [propertyId, setPropertyId] = useState("");

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
        // console.log(searchResults);
        setResults(searchResults);
        setInitialState(false);
        setLoading(false);
      });
  };

  const getPropertyId = (id) => {
    setPropertyId(id);
    setShowMessageBox(true);
    if (messageRef.current) {
      messageRef.current.scrollIntoView();
    }
  };

  const submitPropertyRequest = (data) => {
    let id = { property_id: propertyId };
    const userData = { ...id, ...data };
    console.log(userData);
    axiosWithAuth()
      .post("request", userData)
      .then((response) => {
        if (response) {
          toast.success(response.data.message);
        }
      });
  };

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
              <div className="grid grid-cols-4 gap-2 mt-6 cursor-pointer">
                {results.map(({ city, id, name, images, price }) => {
                  return (
                    <PropertyCard
                      location={city}
                      price={price}
                      place={name}
                      photo={images[0].image_url}
                      getPropertyId={() => getPropertyId(id)}
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
        <form ref={messageRef} onSubmit={handleSubmit(submitPropertyRequest)}>
          <textarea
            name=""
            cols="20"
            rows="5"
            placeholder="Message"
            className="w-full font-normal text-base border border-gray-400 focus:outline-none px-2 rounded-md py-1 mt-1"
            style={{ backgroundColor: "#EFF0F6" }}
            {...register("message")}
            error={errors.message?.message}
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
