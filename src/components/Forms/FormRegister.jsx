import React, { useState } from "react";

// link
import { Link } from "react-router-dom";

// css
import "../../styles/components/FormSignIn.css";

// ui
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";

const FormRegister = () => {
  const [secondary, setSecondary] = useState(false);

  return (
    <div className="container">
      <div className="my-4">
        <h4>Sign Up</h4>
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
          <div className="d-flex align-items-center">
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
            <p className="m-0">
              I agree to the{" "}
              <span className="text-color">Terms of Service</span> and{" "}
              <span className="text-color">Privacy Policy.</span>
            </p>
          </div>
        </div>
        <div className="col-12 mt-4">
          <Link to={"/register/aditionalData"}>
            <button className="button-sign">Continue</button>
          </Link>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className="d-flex mt-5">
            <p className="mx-2">Have an Account ?</p>
            <Link to={"/"}>
              <span className="text-color">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
