import React, { useState } from 'react';
import styles from "../styles/Login.module.css";
import Image from "next/image";
import {useRouter} from 'next/router';
import axios from 'axios'

export const getStaticProps = () => {
  let url = "http://localhost:3000/";
  return {
      props: {
          baseurl: url
      }
  }
}

const Login = (props) => {
  const [formdata, setFormdata] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const router = useRouter();
    const {baseurl} = props;
    console.log('baseurl', baseurl);

    const loginFn = async () => {
        console.log('formdata', formdata, "http://localhost:3000/");
        const url =  baseurl + 'api/users/login';
        try{
            const response = await axios.post(url, formdata);
            console.log(response.data);
            if(response.data.userid) {
                localStorage.setItem('loginStatus', true);
                localStorage.setItem('username', response.data.email);
                localStorage.setItem('name', response.data.name)
                router.push('/product');
            }
        }
        catch{
            setSubmitStatus(true);
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let tempObj = {};
        tempObj[e.target.name] = e.target.value;
        setFormdata({...formdata, ...tempObj});
    }
  return (
    <>
    {submitStatus && (
            <div class="alert alert-danger" role="alert">
                This is a danger alert—check it out!
                </div>
        )}
        Email: <input type="email" name="email" onChange={handleChange}/>
        <br></br>
        Password: <input type="password" name="password" onChange={handleChange}/>
        <br></br>
        <button onClick={loginFn}>Submit</button>
      {/* <div className={styles.bodycolor}>
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
      </div> */}
    </>
  );
};

export default Login;
