import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";

function SignUp() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { createUser } = UserAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const email = loginForm.email;
    const password = loginForm.password;

    try {
      await createUser(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
  }

  return (
    <div className="login--container">
      <div className="login--form--header--container">
        <h1 className="login--form--header">Sign up</h1>
      </div>
      {error ? (
        <div style={{ margin: "10px" }}>
          <p style={{ color: "red" }}>Error:({error})</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="login--form--button--container">
          <button className="btn btn-primary login--form--button">
            signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
