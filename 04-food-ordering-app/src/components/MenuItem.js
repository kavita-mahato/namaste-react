import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ menuInfo }) => {
  const RESTAURANT_MENU_IMG =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  const { name, price, description, imageId, ratings } = menuInfo || {};
  const dispatch = useDispatch();

  return (
    <li
      className="
        flex justify-between gap-6
        p-6 mb-6
        bg-white
        rounded-xl
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      {/* Left Content */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-900 mb-1">
          {name}
        </h4>

        <p className="text-gray-700 font-medium mb-1">
          ₹{price ? (price / 100).toFixed(2) : "—"}
        </p>

        {ratings?.aggregatedRating?.rating && (
          <span className="inline-block text-sm text-green-700 font-semibold mb-2">
            ⭐ {ratings.aggregatedRating.rating}
            <span className="text-gray-500 font-normal">
              {" "}
              ({ratings.aggregatedRating.ratingCountV2})
            </span>
          </span>
        )}

        <p className="text-sm text-gray-600 leading-relaxed pr-6">
          {description}
        </p>
      </div>

      {/* Right Image */}
      {imageId && (
        <div className="relative w-36 shrink-0">
          <img
            src={RESTAURANT_MENU_IMG + imageId}
            alt={name}
            className="w-full h-32 object-cover rounded-xl"
          />

          <button
            onClick={() => dispatch(addItem(menuInfo))}
            className="
              absolute -bottom-3 left-1/2 -translate-x-1/2
              bg-white text-green-600
              px-6 py-1
              rounded-lg
              font-bold text-sm
              shadow-md
              hover:bg-green-600 hover:text-white
              transition
            "
          >
            ADD+
          </button>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
