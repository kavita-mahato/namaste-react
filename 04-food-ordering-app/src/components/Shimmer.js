const Shimmer = () => {
  return (
    <div className="px-4 py-8">
      {/* Category Buttons Skeleton */}
      <div className="flex gap-4 overflow-x-auto mb-8 justify-center">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-32 h-10 rounded-full bg-gray-300 animate-pulse shrink-0"
          ></div>
        ))}
      </div>

      {/* Restaurant Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse"
          >
            {/* Image */}
            <div className="h-40 bg-gray-300"></div>

            {/* Info */}
            <div className="p-4 space-y-2">
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
