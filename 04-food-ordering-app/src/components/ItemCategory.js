import MenuItem from "./MenuItem";
import { IoChevronDown } from "react-icons/io5";

const ItemCategory = ({ data, showItems, toggleCategory }) => {
  const { title, itemCards } = data;

  return (
    <div className="max-w-4xl mx-auto mb-6">

      {/* Category Header */}
      <div
        className="
          flex justify-between items-center
          bg-gray-100
          px-6 py-4
          rounded-xl
          cursor-pointer
          shadow-sm
          hover:shadow-md
          transition
        "
        onClick={toggleCategory}
      >
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
          <span className="text-gray-500 font-normal">
            {" "}({itemCards?.length})
          </span>
        </h3>

        <IoChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Items */}
      {showItems && (
        <ul className="mt-4 space-y-2">
          {itemCards.map((item, index) => (
            <MenuItem
              key={item?.card?.info?.id || index}
              menuInfo={item?.card?.info}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemCategory;
