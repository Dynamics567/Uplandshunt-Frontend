import ellipseRight from "../assets/ellipseRight.svg";
import ellipseLeft from "../assets/ellipseLeft.svg";
import worker from "../assets/worker.svg";
import money from "../assets/money.svg";
import property from "../assets/property.svg";
import buy from "../assets/buy.svg";
import { ReasonCard } from "./ReasonCard";
import { SubTitle } from "../atoms";

const WhyUpland = () => {
  return (
    <div>
      <SubTitle text="Why UplandShunt" className="text-center" />
      <img src={ellipseRight} alt="ellipseRight" className="w-48 -mt-36" />
      <section className="w-11/12 flex justify-between -mt-44 mb-2 ml-12">
        <ReasonCard
          title="Top class builders with huge projects"
          subtitle="Experienced and qualified builders working on all kinds of property projects."
          photo={worker}
        />
        <ReasonCard
          title="Direct Sell or Buy without Agents"
          subtitle="Verifiying your property documents for either approval or rejection before buying or selling."
          photo={buy}
        />
      </section>
      <section className="absolute z-20 mt-12 w-11/12 flex justify-between mb-2 ml-12">
        <ReasonCard
          title="All kinds of properties available"
          subtitle="Buying a property in nigeria gives access to the property’s title documents and transfer documents in his/her name."
          photo={property}
        />
        <ReasonCard
          title="Low charges compared to market"
          subtitle="Buying and selling properties at a cheaper and affordable rate without loss of income."
          photo={money}
        />
      </section>
      <div className="relative mt-20">
        <img src={ellipseLeft} alt="ellipseLeft" className="ellipse-img w-48" />
      </div>
      {/* <section className="mt-12 mb-2 ml-12 relative">
        <div className="w-11/12 flex justify-between absolute z-20 overflow-hidden">
          <ReasonCard
            title="All kinds of properties available"
            subtitle="Buying a property in nigeria gives access to the property’s title documents and transfer documents in his/her name."
            photo={property}
            className=""
          />
          <ReasonCard
            title="Low charges compared to market"
            subtitle="Buying and selling properties at a cheaper and affordable rate without loss of income."
            photo={money}
            // className="ml-24"
          />
        </div>
        <div className="relative">
          <img src={ellipseLeft} alt="ellipseLeft" className="ellipse-img" />
        </div>
      </section> */}
    </div>
  );
};

export default WhyUpland;
