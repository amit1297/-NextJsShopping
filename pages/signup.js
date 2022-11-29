import React from "react";
import styles from "../styles/Login.module.css";
import Image from "next/image";

const Signup = () => {
  return (
    <>
      <div className={styles.bodycolor}>
        <div className={styles.center}>
            <h2>Sign Up</h2>
            <hr className={styles.logintext}></hr>
            <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">
              Name
            </label>
            <input type="email" id="form2Example1" className="form-control" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">
              Phone No.
            </label>
            <input type="email" id="form2Example1" className="form-control" />
          </div>
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
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">
              Confirm Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
          </div>
          

          <button type="button" className="btn btn-primary mb-4">
            Sign up
          </button>

        </div>
      </div>
    </>
  );
};

export default Signup;

