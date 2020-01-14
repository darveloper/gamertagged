import React from "react";
import UserCard from "../components/UserCard";
import "./Profile.css";
import { userIsAuthenticated } from "../HOCs";
import TopMenu from "../components/TopMenu";

class Profile extends React.Component {
    render() {
        return (
            
            <div>
                <TopMenu />
                <div className="UserCard">
                    <UserCard />   
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(Profile);