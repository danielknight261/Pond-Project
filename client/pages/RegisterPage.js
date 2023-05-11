import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

// Define the RegisterPage component
const RegisterPage = () => {
  // Define state variables using useState hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle user registration
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      // Send a POST request to the registration endpoint
      await axios.post("http://localhost:4000/register", {
        name,
        email,
        password,
      });

      // Display a success message
      alert("Registration successful, Now you can login in");
    } catch (e) {
      // Display an error message if registration fails
      alert("Registration failed, please try again");
    }
  }

  return (
    <div className="mt-4 ">
      <h1 className="text-4xl text-center mb-4">Register</h1>

      <form className="max-w-md mx-auto" onSubmit={registerUser}>
        {/* Name input */}
        <input
          className="p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />

        {/* Email input */}
        <input
          className="p-2"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />

        {/* Password input */}
        <input
          className="p-2"
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        {/* Register button */}
        <button className="bg-red-400 p-2 w-full text-white rounded-2xl">
          Register
        </button>

        {/* Login link */}
        <div className="text-center py-2 text-gray-500">
          Already a member ?{" "}
          <Link href="LoginPage" className="underline text-black">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
