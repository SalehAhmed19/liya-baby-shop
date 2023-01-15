import React from "react";
import "../../../../CSS/Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      {/* lg:w-1/2 lg:mx-auto mx-3  */}
      <h2 className="lg:text-3xl text-2xl font-semibold text-center">
        Welcome to <br /> Liya baby Shop
      </h2>
      <h4 className="text-xl my-5 text-center">Login</h4>
      <div className="">
        <div className=" ">
          {/* w-80 lg:w-96 mx-auto */}
          <div className="form-control">
            <div className="input-group">
              <input type="text" disabled value="+880" className="w-16" />
              <input
                type="text"
                placeholder="Enter your number"
                className="input input-bordered w-60"
              />
              <button
                style={{ color: "#fff" }}
                className="btn btn-primary btn-square w-20"
              >
                Get OTP
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-2 mx-3">
            <small>
              By continuing, you agree to Liya Baby Shop{" "}
              <span className="link" style={{ color: "#2096BE" }}>
                Terms
              </span>{" "}
              of Use and{" "}
              <span className="link" style={{ color: "#2096BE" }}>
                Privacy Policy
              </span>
              .
            </small>
          </p>
        </div>
        <div className="divider">or login using</div>
        <button className="googleBtn my-5 mx-auto">
          <span className="flex justify-center">
            <FcGoogle className="text-2xl mr-3" />{" "}
            <span>Continue with Google</span>
          </span>
        </button>
        <button className="googleBtn mx-auto">
          <span className="flex justify-center">
            <FaFacebook
              className="text-2xl mr-3"
              style={{ color: "#047AE9" }}
            />
            <span>Continue with Facebook</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
