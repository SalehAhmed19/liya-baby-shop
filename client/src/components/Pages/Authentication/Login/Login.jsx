import React from "react";
import "../../../../CSS/Login.css";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold" style={{ color: "#2296be" }}>
              Please Login
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full shadow-md max-w-sm bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  style={{ border: "1px solid #2296be" }}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  style={{ border: "1px solid #2296be" }}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="loginButton">Login</button>
                <p>
                  <small>
                    New to Liya Baby Shop?{" "}
                    <span
                      style={{ color: "#2296be" }}
                      className="link link-hover"
                    >
                      <a href="#">Register Now</a>
                    </span>
                  </small>
                </p>
                <div className="divider w-1/2 mx-auto"></div>
                <div>
                  <button className="googleBtn">Continue with Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
