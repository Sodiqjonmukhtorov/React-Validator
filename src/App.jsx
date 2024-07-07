import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/formInput";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should contain 3-16 characters and shouldn't contain any special characters",
      label: "Name",
      pattern: "[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "birthdate",
      type: "date",
      placeholder: "Birthdate",
      //we don't need an error message for date cause you won't be able to type anything in the input field once the type has been set to date.
      label: "Birth Date",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character",
      label: "Password",
      pattern:
        "^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm password",
      errorMessage: "Password doesn't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It must be a valid email address",
      label: "Email Address",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
