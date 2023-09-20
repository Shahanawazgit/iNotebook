import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://i-notebook-backend-gamma.vercel.app/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged in Successfully!", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <>
      <div className="container my-2">
        <form onSubmit={handleSubmit}>
          <h2>Login to Your Account</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
              autoComplete="off"
              style={{ width: mobile ? "100%" : "50%" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              autoComplete="off"
              style={{ width: mobile ? "100%" : "50%" }}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <p className="mt-2">
            Don't have an Account?{" "}
            <Link to="/signup">
              <button className="btn btn-primary">Signup Now</button>
            </Link>
          </p>
        </form>
      </div>

      <div className="container mt-5 text-light bg-warning px-3 rounded-3 bg-opacity-25">
        <h3 className="pt-2">You can test all the features through this test account:</h3>
        <p>Email: test@example.com</p>
        <p className="pb-2">Password: test@123</p>
      </div>
    </>
  );
};

export default Login;
