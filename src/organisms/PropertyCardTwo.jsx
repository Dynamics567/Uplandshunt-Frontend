import locationIcon from "../assets/location.svg";

const PropertyCardTwo = ({ id, price, name, image_url, location, city }) => {
  return (
    <div className="my-6 p-4 flex rounded-md shadow-md" key={id}>
      <img
        src={image_url}
        alt="property"
        className="rounded-md shadow-md mr-6"
      />
      <div className="flex flex-col w-full">
        <p className="font-bold text-base py-2">{name}</p>
        <div className="flex items-center">
          <img src={locationIcon} alt="location" className="mr-2" />
          <p className="font-semibold text-sm">{city}</p>
        </div>
        <p className="font-bold text-base py-2">{price}</p>
      </div>
    </div>
  );
};

export { PropertyCardTwo };
