import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

// link
import { Link } from "react-router-dom";
import { app } from "../../firebase/configFirebase";

// css
import "../../styles/components/FormSignIn.css";

// ui
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";

// components
import FormAditionalData from "../Forms/FormAditionalData";

const FormRegister = () => {
  const [secondary, setSecondary] = useState(false);
  const [formTwo, setFormTwo] = useState(false);
  const [country, setCountry] = useState("");
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (value) => {
    const correo = value.email;
    const password = value.password;

    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {formTwo ? (
          <FormAditionalData
            control={control}
            errors={errors}
            setFormTwo={setFormTwo}
            country={country}
            setCountry={setCountry}
          />
        ) : (
          <>
            <div className="my-4">
              <h4>Sign Up</h4>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="my-1 text-color">Email</p>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="email"
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
                <p className="my-1 text-color">Password</p>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="password"
                  error={errors.password}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <TextField
                        {...field}
                        id="user_password"
                        error={errors.password}
                        autoComplete="current-password"
                        variant="standard"
                      />
                    </FormControl>
                  )}
                />
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
                <button
                  disabled={secondary ? false : true}
                  className="button-sign"
                  onClick={() => setFormTwo(true)}
                >
                  Continue
                </button>
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
          </>
        )}
      </form>
    </div>
  );
};

export default FormRegister;
