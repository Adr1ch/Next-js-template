"use client";

import Button from "@/app/_components/_a/Button";
import Input from "@/app/_components/_a/Input";

import { useState } from "react";

import registerUser from "@/composables/api/register";

export default function Form() {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (data) => {
    const newErrors = {
      username: "",
      password: "",
      email: "",
    };

    if (!data.username.trim()) {
      newErrors.username = "Username is required";
    } else {
      newErrors.username = "";
    }

    if (!data.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(data.password)) {
      newErrors.password = "Invalid password format";
    } else if (data.password.trim().length <= 10) {
      newErrors.password = "Password must be at least 10 characters length";
    } else {
      newErrors.password = "";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      newErrors.email = "Invalid email format";
    } else {
      newErrors.email = "";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await registerUser(state);

    console.log("response", {
      response: response?.error?.details?.errors,
      status: response?.error?.status,
    });

    // const newErrors = validateForm(state);
    // setErrors(newErrors);

    // if (Object.values(newErrors).every((error) => error === "")) {
    //   const response = await registerUser(state);

    //   console.log("response", {
    //     response,
    //   });

    //   // console.log("Form submitted:", state);
    //   // setTimeout(() => {
    //   //   setState({
    //   //     email: "",
    //   //     username: "",
    //   //     password: "",
    //   //   });
    //   //   setErrors({
    //   //     email: "",
    //   //     username: "",
    //   //     password: "",
    //   //   });
    //   // }, 1000);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Form component</h2>
        <div>
          <h2>Form state</h2>
          <pre
            style={{
              overflow: "auto",
              maxWidth: "100vw",
            }}
          >
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
        <div>
          <h2>Form errors</h2>
          <pre
            style={{
              overflow: "auto",
              maxWidth: "100vw",
            }}
          >
            {JSON.stringify(errors, null, 2)}
          </pre>
        </div>
        <div>
          <Input
            label="Username"
            placeholder="Username"
            name="username"
            type="text"
            error={errors.username}
            value={state.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            error={errors.email}
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            label="Password"
            placeholder="**********"
            name="password"
            type="password"
            error={errors.password}
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <Button theme="pearino" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
