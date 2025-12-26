import { useParams } from "react-router-dom";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";
import ItemCategory from "./ItemCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(0);

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
    areaName,
  } = resInfo?.card?.card?.info || {};

  if (!resInfo) return <MenuShimmer />;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      {/* Restaurant Name */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {name}
      </h1>

      {/* Restaurant Info Card */}
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          p-6
          mb-8
          transition
          hover:shadow-lg
        "
      >
        <p className="text-gray-700 font-medium mb-2">
          {cuisines?.join(", ")} • {costForTwoMessage}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
          <span className="font-semibold text-green-600">
            ⭐ {avgRating}
          </span>
          <span>📍 {areaName}</span>
          <span>
            ⏱ {sla?.minDeliveryTime}–{sla?.maxDeliveryTime} mins
          </span>
        </div>
      </div>

      {/* Menu Heading */}
      <div className="flex items-center gap-4 my-10">
        <div className="flex-1 h-px bg-gray-300"></div>
        <h2 className="text-xl font-semibold tracking-wide text-gray-700">
          MENU
        </h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Menu Categories */}
      <div className="space-y-4">
        {resMenu?.map((category, index) => (
          <ItemCategory
            key={category.categoryId || index}
            data={category}
            showItems={index === openIndex}
            toggleCategory={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
