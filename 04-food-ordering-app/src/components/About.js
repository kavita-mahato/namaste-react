import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 to-amber-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4 drop-shadow-md">
                        About Us
                    </h1>
                    <h2 className="text-xl text-gray-600 font-medium">
                        This is about us page of Foodie
                    </h2>
                </div>
                {/* <User name={"Kavita Mahato"}/> */}
                <div className="flex justify-center text-10px text-gray-600 font-medium">
                    <UserClass name={"Kavita"} location={"Bokaro"}/>
                </div>
            </div>
        </div>
    );
}
export default About;