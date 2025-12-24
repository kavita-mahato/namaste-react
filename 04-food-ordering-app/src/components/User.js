import { useEffect, useState } from "react";

const User = (props) => {
    const [userInfo, setUserInfo] = useState({
        name: "Kavita Mahato",
        location: "Jharkhand, India",
        avatar_url: "http://dummyphoto.jpg",
    });

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://api.github.com/users/kavita-mahato"
            );
            const json = await response.json();

            console.log(json);
            setUserInfo(json);
        } catch (error) {
            console.error("Error while fetching user data: ", error);
        }
    };

    // componentDidMount
    useEffect(() => {
        getUserInfo();

        // componentWillUnmount
        return () => {
            console.log("Component will unmount");
        };
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log("Component did update");
    }, [userInfo]);

    const { name, location, avatar_url, login } = userInfo;

    return (
        <div className="w-50 h-50 rounded-2xl">
            <img src={avatar_url} alt={name} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {login}</h4>
        </div>
    );
};

export default User;