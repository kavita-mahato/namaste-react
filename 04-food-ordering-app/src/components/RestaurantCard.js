import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData, onClick }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info || {};

  return (
    <div
      onClick={onClick}
      data-testid="resCard"
      className="
        w-80 bg-white rounded-2xl overflow-hidden
        shadow-sm border border-gray-200
        transition-all duration-300
        cursor-pointer
        hover:shadow-xl hover:scale-[1.03]
      "
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />

        {/* Rating Badge */}
        {avgRating && (
          <span
            className={`absolute bottom-3 left-3 px-3 py-1 rounded-lg text-sm font-semibold text-white
              ${avgRating >= 4 ? "bg-green-600" : "bg-yellow-500"}`}
          >
            ⭐ {avgRating}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {name}
        </h3>

        <p className="text-sm text-gray-600 truncate">
          {cuisines?.join(", ")}
        </p>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{costForTwo}</span>
          <span>{sla?.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};



export default RestaurantCard;
