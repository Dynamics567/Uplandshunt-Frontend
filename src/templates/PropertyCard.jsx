import locationIcon from "../assets/location.svg";
import love from "../assets/userDashboard/love.png";
import LoadSpinnerTwo from "./LoadSpinnerTwo";
import bin from "../assets/bin.png";

const PropertyCard = ({
  id,
  photo,
  location,
  price,
  place,
  getPropertyId,
  showSaveIcon = false,
  showDeleteIcon,
  saveProperty,
  deleteProperty,
  loading,
}) => {
  return (
    <div
      className="mr-8 mb-8 border border-white shadow-md rounded-md"
      onClick={getPropertyId}
      key={id}
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
        <div className="w-full flex items-center justify-between">
          <p className="font-bold text-base">{price}</p>
          {showSaveIcon && (
            <div className="cursor-pointer w-8" onClick={saveProperty}>
              {loading ? (
                <LoadSpinnerTwo />
              ) : (
                <img src={love} alt="love" className="w-8" />
              )}
            </div>
          )}
          {showDeleteIcon && (
            <div className="cursor-pointer w-8" onClick={deleteProperty}>
              {loading ? (
                <LoadSpinnerTwo />
              ) : (
                <img src={bin} alt="love" className="w-4" />
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PropertyCard;
