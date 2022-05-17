import React, { useContext } from "react";

// context
import { AuthContext } from "../context/auth.provider";

// graphic
import CircularGraphic from "../components/Shared/Graphics/CircularGraphic";
import GeneralFavorties from "../components/Shared/Graphics/GeneralFavorties";

// ui
import Avatar from "@mui/material/Avatar";
import { Card } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

// style
import "../styles/components/Profile.css";

// icons
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const userCoins = [
  { id: 1, name: "Bitcoin" },
  { id: 2, name: "Solana" },
  { id: 3, name: "Ethereum" },
  { id: 4, name: "Tether" },
  { id: 5, name: "STEPN" },
  { id: 6, name: "Bullshit inu" },
];
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
        <div className="d-flex justify-content-center">
          <GeneralFavorties />
        </div>
        <h6>Your Favorites</h6>
        {userCoins.map((coin) => (
          <div className="my-3">
            <Card className="card">
              <div className="d-flex align-items-center justify-content-between">
                {coin.name}
                <Checkbox
                  icon={<MdFavoriteBorder />}
                  checkedIcon={<MdFavorite />}
                />
              </div>
              <h6>General Balance</h6>
              <div>
                <CircularGraphic />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
