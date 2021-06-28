import React from "react";
import { SectionTitle } from "../atoms";
import { SectionWrapper } from "../Layout/SectionWrapper";
import SubCard from "../templates/SubCard";
import bronze from "../assets/bronze.svg";
import silver from "../assets/silver.svg";

const Subscription = () => {
  return (
    <SectionWrapper>
      <div className="mt-20">
        <SectionTitle title="Subscription" />
        <div className="w-full flex mb-20">
          <SubCard
            category="Bronze"
            image={bronze}
            amount="$10.00"
            note="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            note1="It is a long established"
            note2="It is a long established"
            note3="It is a long established"
          />
          {/* <SubCard
            category="Bronze"
            image={bronze}
            amount="$10.00"
            note="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            note1="It is a long established"
            note2="It is a long established"
            note3="It is a long established"
          />
          <SubCard
            category="Bronze"
            image={bronze}
            amount="$10.00"
            note="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            note1="It is a long established"
            note2="It is a long established"
            note3="It is a long established"
          /> */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Subscription };
