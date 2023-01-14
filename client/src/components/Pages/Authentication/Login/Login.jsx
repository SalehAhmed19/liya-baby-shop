import React from "react";
import "../../../../CSS/Login.css";

const Login = () => {
  return (
    <div className="lg:w-1/2 lg:mx-auto mx-3 my-10">
      <h2 className="text-3xl">Welcome</h2>
      <h4 className="text-xl my-5">Login</h4>
      <div>
        <form action="">
          <div>
            <input
              type="text"
              disabled
              value="+880"
              className="lg:input input-sm lg:w-20 w-16"
            />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered lg:input-md input-sm lg:w-full lg:max-w-xs text-xs"
            />
            <button className="btn lg:btn-md btn-sm px-10 ml-2">Get OTP</button>
          </div>
        </form>
        <div>
          <p>
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
        <button className="googleBtn my-5 mx-auto">Continue with Google</button>
        <button className="googleBtn mx-auto">Continue with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
