import React from "react";

import { Link } from "react-router-dom";

// css
import "../../styles/components/FormSignIn.css";

// ui
import Input from "@mui/material/Input";

// icons
import { MdAttachMoney } from "react-icons/md";

const FormSignIn = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <div className="icon-app">
          <MdAttachMoney style={{ color: "white", fontSize: "98px" }} />
        </div>
        <div className="mb-5">
          <h3 className="title-app">LOOKCOIN-UP</h3>
        </div>
      </div>
      <div>
        <h5>Sign In</h5>
        <p>Hi there! Nice to see you again</p>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="my-1 text-color">Email</p>
          <Input fullWidth></Input>
        </div>
        <div className="col-12 mt-4">
          <p className="my-1 text-color">Password</p>
          <Input fullWidth type="password"></Input>
        </div>
        <div className="col-12 mt-5">
          <button className="button-sign">Sign In</button>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Link to={"/register"}>
            <div className="mt-4 text-color">Register</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
