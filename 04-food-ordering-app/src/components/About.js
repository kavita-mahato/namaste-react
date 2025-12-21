import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is about us page of Foodie</h2>
            {/* <User name={"Kavita Mahato"}/> */}
            <UserClass name={"Kavita"} location={"Bokaro"}/>
        </div>
    );
}
export default About;