import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

export const getStaticProps = () => {
  let url = "http://localhost:3000/";
  return {
    props: {
      baseurl: url,
    },
  };
};

const Signup = (props) => {
  // const initilObj = {
  //     name: '',
  //     email: '',
  //     mobile: '',
  //     password: ''
  // }
  const [formdata, setFormdata] = useState({});
  const [errorformdata, setErrorFormdata] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const router = useRouter();
  const { baseurl } = props;
  console.log("baseurl", baseurl);
  const registerfn = async () => {
    const validationStatus = validate();
    if (validationStatus) {
      console.log("formdata", formdata, "http://localhost:3000/");
      const url = baseurl + "api/users/register";
      try {
        const response = await axios.post(url, formdata);
        console.log(response.data);
        if (response.status === 201) {
          setSubmitStatus(true);
          //setFormdata(initilObj);
          router.push("/login");
        }
      } catch {}
    }
  };
  const validate = () => {
    if (formdata.mobile) {
      if (formdata.mobile.length > 5) {
        //remove error for mobile field
        return true;
      } else {
        let tempObj = {};
        tempObj["mobile"] = "Mobile length not sufficient";
        setErrorFormdata({ ...errorformdata, ...tempObj });
        return false;
      }
    } else {
      let tempObj = {};
      tempObj["mobile"] = "Mobile can not be empty";
      setErrorFormdata({ ...errorformdata, ...tempObj });
      return false;
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    let tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setFormdata({ ...formdata, ...tempObj });
  };

  useEffect(() => {
    console.log("errors", errorformdata);
  });

  return (
    <>
      {submitStatus && (
        <div className="alert alert-success" role="alert">
          Form submitted.
        </div>
      )}
       Name: <input type="text" name="name" onChange={handleChange} />
        <span className='text-danger'>{errorformdata.name}</span>
        <br></br>
        Email: <input type="email" name="email" onChange={handleChange} />
        <span className='text-danger'>{errorformdata.email}</span>
        <br></br>
        Mobile: <input type="text" name="mobile" onChange={handleChange} />
        <span className='text-danger'>{errorformdata.mobile}</span>
        <br></br>
        Password: <input type="password" name="password" onChange={handleChange} />
        <span className='text-danger'>{errorformdata.password}</span>
        <br></br>
        <button onClick={registerfn}>Submit</button>

      {/* <div className={styles.bodycolor}>
        <div className={styles.center}>
          <h2>Sign Up</h2>
          <hr className={styles.logintext}></hr>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">
              Name
            </label>
            <input
              type="email"
              id="form2Example1"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">
              Phone No.
            </label>
            <input
              type="text" name="mobile"
              id="form2Example1"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">
              Email address
            </label>
            <input
              type="email"
              id="form2Example1"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          

          <button onClick={registerfn} className="btn btn-primary mb-4">
            Sign up
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Signup;
