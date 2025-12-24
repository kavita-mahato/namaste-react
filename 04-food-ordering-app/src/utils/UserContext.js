import { createContext } from "react";

// UserContext => Keep the information of loggedIn User
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;