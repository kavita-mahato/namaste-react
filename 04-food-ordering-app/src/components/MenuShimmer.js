const MenuShimmer = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-pulse">

      {/* Restaurant Name */}
      <div className="h-10 w-2/3 bg-gray-300 rounded mb-4"></div>

      {/* Restaurant Info Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 space-y-3">
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>

        <div className="flex gap-4">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* MENU Divider */}
      <div className="flex items-center gap-4 my-10">
        <div className="flex-1 h-px bg-gray-300"></div>
        <div className="h-6 w-20 bg-gray-300 rounded"></div>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Menu Categories Skeleton */}
      <div className="space-y-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-gray-100 rounded-xl shadow-md">
            {/* Category Header */}
            <div className="flex justify-between items-center p-4">
              <div className="h-6 w-48 bg-gray-300 rounded"></div>
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
            </div>

            {/* Menu Items */}
            <div className="px-4 pb-4 space-y-6">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start gap-6"
                >
                  {/* Item Info */}
                  <div className="flex-1 space-y-3">
                    <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
                    <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                  </div>

                  {/* Item Image */}
                  <div className="w-28 h-28 bg-gray-300 rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
