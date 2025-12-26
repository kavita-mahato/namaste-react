import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-orange-50 to-orange-200 px-4">
      <div className="bg-white p-12 rounded-2xl shadow-lg max-w-lg w-full text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404 / Error</h1>
        <p className="text-gray-700 mb-6 text-lg">
          {error?.status
            ? `Error ${error.status}: ${error.statusText || "Something went wrong"}`
            : "Sorry, something went wrong!"}
        </p>
        <Link
          to="/"
          className="
            inline-block
            px-6 py-3
            bg-orange-500 text-white font-semibold
            rounded-lg
            hover:bg-orange-600
            transition
          "
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
