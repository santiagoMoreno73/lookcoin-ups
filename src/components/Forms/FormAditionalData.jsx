import React, { useState } from "react";
import { Controller } from "react-hook-form";

// ui
import Input from "@mui/material/Input";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

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

const FormAditionalData = ({
  control,
  errors,
  setFormTwo,
  country,
  setCountry,
}) => {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <div onClick={() => setFormTwo(false)}>
        <AiOutlineArrowLeft className="icon-row" />
      </div>
      <div className="my-3">
        <h4>Register</h4>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="my-1 text-color">Name</p>
          <Controller
            rules={{ required: true }}
            control={control}
            name="name"
            render={({ field }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  id="user_name"
                  error={errors.name}
                  autoComplete="current-password"
                  variant="standard"
                />
              </FormControl>
            )}
          />

          <p className="my-1 text-color">Lastname</p>
          <Controller
            rules={{ required: true }}
            control={control}
            name="Lastname"
            render={({ field }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  id="user_Lastname"
                  error={errors.Lastname}
                  autoComplete="current-password"
                  variant="standard"
                />
              </FormControl>
            )}
          />

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

          <p className="my-1 text-color">Address</p>
          <Controller
            rules={{ required: true }}
            control={control}
            name="address"
            render={({ field }) => (
              <FormControl fullWidth>
                <TextField
                  {...field}
                  id="user_address"
                  error={errors.address}
                  autoComplete="current-password"
                  variant="standard"
                />
              </FormControl>
            )}
          />

          <p className="my-1 text-color">Country</p>
          <TextField
            select
            fullWidth
            error={errors.country}
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
          <button type="submit" className="button-sign">
            Join Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormAditionalData;
