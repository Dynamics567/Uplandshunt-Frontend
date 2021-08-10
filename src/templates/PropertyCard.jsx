import locationIcon from "../assets/location.svg";

const PropertyCard = ({ photo, location, price, place, getPropertyId }) => {
  return (
    <div
      className="mr-8 mb-8 border border-white shadow-md rounded-md"
      onClick={getPropertyId}
    >
      <section className="w-full h-auto object-cover">
        <img
          src={photo}
          alt="location"
          className="object-cover w-full h-full"
        />
      </section>
      <section className="mt-4 p-2">
        <p className="font-bold text-sm">{place}</p>
        <div className="flex">
          <img src={locationIcon} alt="location" className="mr-2" />
          <p className="font-bold text-sm text-ash my-1">{location}</p>
        </div>
        <p className="font-bold text-base">{price}</p>
      </section>
    </div>
  );
};

export default PropertyCard;
