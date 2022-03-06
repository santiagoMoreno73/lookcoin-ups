import React, { useState } from "react";

// link
import { Link } from "react-router-dom";

// ui
import Input from "@mui/material/Input";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";

// icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const countries = [
  {
    id: 1,
    name: "United States",
  },
  {
    id: 2,
    name: "Colombia",
  },
  {
    id: 3,
    name: "Canadá",
  },
  {
    id: 4,
    name: "Chile",
  },
];

const FormAditionalData = () => {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="container">
      <Link to={"/register"}>
        <div>
          <AiOutlineArrowLeft className="icon-row" />
        </div>
      </Link>
      <div className="my-3">
        <h4>Register</h4>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="my-1 text-color">Name</p>
          <Input fullWidth></Input>
        </div>
        <div className="col-12 mt-4">
          <p className="my-1 text-color">Lastname</p>
          <Input fullWidth></Input>
        </div>
        <div className="col-12 mt-4">
          <p className="my-1 text-color">Birthday</p>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <Input fullWidth {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="col-12 mt-4">
          <p className="my-1 text-color">Address</p>
          <Input fullWidth></Input>
        </div>
        <div className="col-12 mt-4">
          <p className="my-1 text-color">Country</p>
          <TextField
            select
            fullWidth
            value={country}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {countries.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </TextField>
        </div>
        <div className="col-12 mt-4">
          <Link to={"/"}>
            <button className="button-sign">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormAditionalData;
