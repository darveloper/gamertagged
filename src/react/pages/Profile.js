import React from "react";
import UserCard from "../components/UserCard";
import "./Profile.css"

class Profile extends React.Component {
    render() {
        return (
            <div className="container" style={{ height: "100vh" }}>
                <div className="UserCard">
                    <UserCard />   
                </div>
            </div>
        )
    }
}

export default Profile;