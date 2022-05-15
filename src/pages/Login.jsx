import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// css
import "../styles/components/Register.css";

// icons
import { MdAttachMoney } from "react-icons/md";

// ui
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { signInWithEmailAndPassword } from "firebase/auth";

// context
import { auth } from "../firebase/configFirebase";

const FormSignIn = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [error, setError] = useState("");

  const onSubmit = async (value) => {
    setError("");
    try {
      await signInWithEmailAndPassword(
        auth,
        value.user_email,
        value.user_password
      );
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      {error && <p>{error}</p>}
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <p className="my-1 text-color">Email</p>
            <Controller
              rules={{ required: true }}
              control={control}
              name="user_email"
              error={errors.email}
              render={({ field }) => (
                <FormControl fullWidth>
                  <TextField
                    {...field}
                    id="user_email"
                    error={errors.email}
                    className="mb-3"
                    variant="standard"
                  />
                </FormControl>
              )}
            />
          </div>
          <div className="col-12 mt-4">
            <p className="my-1 text-color">Password</p>
            <Controller
              rules={{ required: true }}
              control={control}
              name="user_password"
              error={errors.password}
              render={({ field }) => (
                <FormControl fullWidth>
                  <TextField
                    {...field}
                    id="user_password"
                    error={errors.password}
                    autoComplete="current-password"
                    type={"password"}
                    variant="standard"
                  />
                </FormControl>
              )}
            />
          </div>
          <div className="col-12 mt-5">
            <button className="button-sign">Sign In</button>
          </div>
        </div>
      </form>
      <div className="col-12 d-flex justify-content-center">
        <Link to={"/register"}>
          <div className="mt-4 text-color">Register</div>
        </Link>
      </div>
    </div>
  );
};

export default FormSignIn;
