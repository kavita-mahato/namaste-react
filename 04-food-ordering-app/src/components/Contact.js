import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">
          We'd love to hear from you! Fill out the form below or reach us via our contact details.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700">123 Main Street, City, Country</span>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700">+1 (234) 567-890</span>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-gray-700">contact@yourcompany.com</span>
            </div>

            <p className="text-gray-500 mt-4">
              We aim to respond to all inquiries within 24 hours. Thank you for reaching out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;