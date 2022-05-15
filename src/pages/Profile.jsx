import React, { useContext } from "react";

// context
import { AuthContext } from "../context/auth.provider";

// ui
import Avatar from "@mui/material/Avatar";
import { Card } from "@mui/material";

const Profile = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <div className="container">
      <h3>Profile</h3>
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <Avatar>H</Avatar>
          <p>{user.email}</p>
        </div>
        <h6>Your Favorites</h6>
      </div>
    </div>
  );
};

export default Profile;
