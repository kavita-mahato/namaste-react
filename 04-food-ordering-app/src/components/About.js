import User from './User';
import UserContext from '../utils/UserContext';

const About = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 to-amber-50 py-12 px-4">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    About <span className="text-orange-500">FOODIE</span>
                </h1>
                <p className="text-gray-600 text-lg">
                    Serving delicious food with love ❤️ – your ultimate foodie
                    destination.
                </p>

                {/* Logged In User Info */}
                <div className="mt-6 bg-white shadow-md rounded-lg inline-block px-6 py-4">
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <div>
                                <p className="text-gray-500 text-sm">
                                    Logged In User:
                                </p>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {loggedInUser}
                                </h2>
                            </div>
                        )}
                    </UserContext.Consumer>
                </div>
            </div>

            {/* About Us Text Section */}
            <div className="max-w-5xl mx-auto mb-16 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">
                    Our Mission
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    At FOODIE, our mission is to bring happiness to your table
                    through delicious, fresh, and high-quality meals. We believe
                    in creating memorable dining experiences for every customer.
                </p>
            </div>

            {/* Team / User Section */}
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Meet Our Team
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <User name="Kavita Mahato" location="Bokaro" />
                    <User name="Akshay Saini" location="Delhi" />
                    <User name="Rohan Sharma" location="Mumbai" />
                    {/* Add more team members as needed */}
                </div>
            </div>

            {/* Optional Footer Section */}
            <div className="mt-30 text-center text-gray-500 text-l">
                © 2025 FOODIE. All rights reserved.
            </div>
        </div>
    );
};

export default About;
