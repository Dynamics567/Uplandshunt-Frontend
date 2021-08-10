import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Input, Select, DashboardSectionTitle, Button } from "../atoms";
import { listType, propertyType } from "../data/SelectOptions";
import { axiosInstance } from "../Auth/Axios";

const RequestProperty = () => {
  const [loading, setLoading] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [listTypeResult, setListTypeResult] = useState([]);
  const [propertyTypeResult, setPropertyTypeResult] = useState([]);

  const validationSchema = Yup.object().shape({
    message: Yup.string().required("Message is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const getPropertiesAvailable = () => {
    console.log("works");
    // axiosInstance
    //   .get(`property?type=${listTypeResult}&category=${propertyTypeResult}`)
    //   .then((response) => {
    //     console.log(response);
    //   });
  };

  return (
    <div className="m-auto w-11/12">
      <DashboardSectionTitle text="Request a Property" showButton={false} />
      <div className="">
        <form
          className="w-full justify-between flex items-center"
          style={{ flex: "1" }}
        >
          <Select
            labelName="Listing Type"
            values={propertyType}
            selectedValue="Under Construction"
            name="property type"
            onValueChange={(val) => console.log(val)}
          />
          <Select
            labelName="Property Type"
            values={listType}
            selectedValue="New Development"
            onValueChange={(val) => console.log(val)}
          />
          <div
            className="w-1/6 flex items-center"
            onClick={getPropertiesAvailable}
          >
            <Button
              buttonText="Search Property"
              // loading={loading}
            />
          </div>
        </form>
        {showMessageBox ? (
          <div className="">
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
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export { RequestProperty };
