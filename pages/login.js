import React from "react";
import styles from "../styles/Login.module.css";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <div className={styles.bodycolor}>
        <div className={styles.center}>
            <Image src="/altudologo.png" className={`${styles.logo} img-thumbnail`} alt="Logo" width={150} height={70}></Image>
            <h2>Login</h2>
            <hr className={styles.logintext}></hr>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">
              Email address
            </label>
            <input type="email" id="form2Example1" className="form-control" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="button" className="btn btn-primary mb-4">
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
