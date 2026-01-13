import React from "react";
import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import "./Login.css";
import { Link } from "react-router-dom";
function Loginpage() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const isValid = value !== "" && password !== "";

  return (
    <div className="bg-[url(/Products-images/background-image.png)] h-[100vh] bg-center overflow-hidden">
      <h1 className="sansation-light myhead text-7xl text-white font-bold p- pt-28 text-center opacity-60">
        Rétro<span className="text-gray-500/80">X</span>
      </h1>
     
      <div>
        <form
          action=""
          className="myform text-white flex flex-col  p-8 pt-14 pb-14  m-[2rem] rounded-lg relative z-50 bg-neutral-500/15 "
        >
          <input
            type="email"
            placeholder="EMAIL"
            className="border-b  m-3 ml-0 pb-1 outline-none"
            required
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="border-b m-3 ml-0 pb-1 outline-none "
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="text-end ml-0 m-3 mt-0">forgot password?</label>

          {isValid ? (
            <Link
              to="/home"
              className="border p-2 ml-0 m-3 rounded-lg bg-gray-500/20 w-full text-center hover:bg-gray-500/50 duration-300 "
            >
              Login
            </Link>
          ) : (
            <button className="border p-2 ml-0 m-3 rounded-lg bg-gray-500/20 w-full active:bg-gray-500/50 duration-300 ">
              Login
            </button>
          )}

          <button className="border p-2 ml-0 m-3 mt-0 rounded-lg w-full">
            Register
          </button>
        </form>
       
      </div>
    </div>
  );
}

export default Loginpage;
