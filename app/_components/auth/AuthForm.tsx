"use client";

import Button from "@/app/_components/_a/Button";
import Input from "@/app/_components/_a/Input";

import { useState } from "react";

import authUser from "@/composables/api/auth";

export default function Form() {
  const [state, setState] = useState({
    identifier: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await authUser(state);

    console.log("response", {
      response: response?.error?.details?.errors,
      status: response?.error?.status,
    });
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
          <Input
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            value={state.identifier}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            label="Password"
            placeholder="**********"
            name="password"
            type="password"
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
