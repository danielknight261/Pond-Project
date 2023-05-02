import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    console.log(ev);
    console.log(registerUser);
    console.log(name, email, password);
    ev.preventDefault();
    try {
      await axios.post("http://localhost:4000/register", {
        name,
        email,
        password,
      });

      alert("Registration successful, Now you can login in");
    } catch (e) {
      alert("Registration failed, please try again")
    }
  }

  return (
    <div className="mt-4 ">
      <h1 className="text-4xl text-center mb-4">Register</h1>

      <form className="max-w-md mx-auto" onSubmit={registerUser}>
        <input
          className="p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          className="p-2"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          className="p-2"
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="bg-red-400 p-2 w-full text-white rounded-2xl">
          Register
        </button>

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
