import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { loginUser } from "../../../api";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";

function Login() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  async function guestLogin() {
    console.log("clicked");
    const email = "guest@gameshare.com";
    const password = "123456";

    try {
      setStatus("submitting");
      await signIn(email, password);
      setStatus("idle");
      navigate("/host");
    } catch (err) {
      setError(err.message);
      setStatus("idle");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const email = loginForm.email;
    const password = loginForm.password;

    try {
      setStatus("submitting");
      await signIn(email, password);
      setStatus("idle");
      navigate("/host");
    } catch (err) {
      setError(err.message);
      setStatus("idle");
      // console.log(err.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // }, [])
  return (
    <div className="login--container">
      {location.state ? (
        <div className="login--form--header--container">
          {" "}
          <h3 className="login--form--header" style={{ color: "red" }}>
            {location.state.message}
          </h3>
        </div>
      ) : null}

      <div className="login--form--header--container">
        <h1 className="login--form--header">Sign into your account</h1>
      </div>

      {error ? <p>{error}</p> : null}

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
          <button
            className="btn btn-primary login--form--button"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Logging in..." : "Login"}
          </button>
        </div>
        <div className="login--form--button--container">
          <button
            type="button"
            onClick={guestLogin}
            className="btn btn-primary login--form--button"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Logging in..." : "Login as test guest"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
