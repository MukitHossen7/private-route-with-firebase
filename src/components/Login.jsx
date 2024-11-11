import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { createLoginUser, loginGoogle, loginGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createLoginUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Login successful");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR" + error);
        toast.error("Invalid email and password");
      });
  };
  const handleSignInGoogle = () => {
    loginGoogle()
      .then((result) => {
        console.log(result);
        navigate("/");
        toast.success("Login with Google successful");
      })
      .catch((error) => {
        console.log("ERROR" + error);
      });
  };
  const handleSignInGithub = () => {
    loginGithub()
      .then((result) => {
        console.log(result);
        navigate("/");
        toast.success("Login with Github successful");
      })
      .catch((error) => {
        console.log("ERROR" + error);
      });
  };
  return (
    <div className="hero mt-12">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-7">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex justify-around">
            <button
              onClick={handleSignInGoogle}
              className="btn btn-outline btn-accent"
            >
              Google
            </button>
            <button
              onClick={handleSignInGithub}
              className="btn btn-outline btn-accent"
            >
              Github
            </button>
          </div>
          <p className="text-sm my-3 text-center">
            New to the website? please{" "}
            <span className="text-sky-500 underline font-bold">
              <Link to="/Signup">Sign up</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
