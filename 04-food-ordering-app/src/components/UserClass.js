import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props); // Call the super constructor with props

        // console.log(props);
        // console.log("Child - UserClass constructor() Called");

        // Initialize the state of the component
        this.state = {
            userInfo: {
                name: 'Kavita Mahato',
                location: 'Jharkhand, India',
                avatar_url:
                    'http://dummyphoto.jpg',
            },
        };
    }
    async getUserInfo() {
        try {
            const response = await fetch(
                'https://api.github.com/users/kavita-mahato'
            );
            const json = await response.json();

            console.log(json);

            this.setState({
                userInfo: json,
            });
        } catch (error) {
            console.error('Error while fetching user data: ', error);
        }
    }

    componentDidMount() {
        this.getUserInfo();
    }
    componentDidUpdate() {
        console.log('Component did update');
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render() {
        const { name, location, avatar_url, login } = this.state.userInfo;
        return (
            <div className="userCard">
                <img src={avatar_url} alt={name}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {login}</h4>
            </div>
        );
    }
}
export default UserClass;
