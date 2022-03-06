import React from "react";

import { Link } from "react-router-dom";

import "../../styles/components/FormSignIn.css";

import Input from "@mui/material/Input";

const FormSignIn = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h3>LOOKCOIN-UP</h3>
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
        <div className="col-12 my-2">
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
