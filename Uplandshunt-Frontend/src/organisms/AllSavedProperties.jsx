import prop1 from "../assets/prop1.png";
import prop2 from "../assets/prop2.png";
import prop3 from "../assets/prop3.png";
import prop4 from "../assets/prop4.svg";
import PropertyCard from "../templates/PropertyCard";

const AllSavedProperties = () => {
  return (
    <div className="m-auto w-11/12">
      <div className="flex mt-10">
        <PropertyCard
          photo={prop1}
          location="Ibeju-Lekki, Lekki"
          place="Silver Spring | Residence Phase II"
          price="₦3,499,000"
        />
        <PropertyCard
          photo={prop2}
          location="Ibeju-Lekki, Lekki"
          place="Silver Spring | Residence Phase II"
          price="₦3,499,000"
        />
        <PropertyCard
          photo={prop3}
          location="Ibeju-Lekki, Lekki"
          place="Silver Spring | Residence Phase II"
          price="₦3,499,000"
        />
        <PropertyCard
          photo={prop4}
          location="Ibeju-Lekki, Lekki"
          place="Silver Spring | Residence Phase II"
          price="₦3,499,000"
        />
      </div>
      <div className="flex">
        <PropertyCard
          photo={prop1}
          location="Ibeju-Lekki, Lekki"
          place="Silver Spring | Residence Phase II"
          price="₦3,499,000"
        />
        <PropertyCard
          photo={prop2}
          location="Ibeju-Lekki, Lekki"
          place="Silver Spring | Residence Phase II"
          price="₦3,499,000"
        />
        <PropertyCard
          photo={prop3}
          location="Ibeju-Lekki, Lekki"
          place="Silver Spring | Residence Phase II"
          price="₦3,499,000"
        />
        <PropertyCard
          photo={prop4}
          location="Ibeju-Lekki, Lekki"
          place="Silver Spring | Residence Phase II"
          price="₦3,499,000"
        />
      </div>
    </div>
  );
};

export { AllSavedProperties };
