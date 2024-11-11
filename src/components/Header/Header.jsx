import { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    logOutUser();
    toast.success("Logged out successfully");
    <Navigate to="/login"></Navigate>;
  };

  return (
    <div className="pt-7">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/login">LogIn</NavLink>
              <NavLink to="/Signup">SignUp</NavLink>
              {user && <NavLink to="/dashboard">Dashboard</NavLink>}
            </ul>
          </div>
          <Link className="text-xl font-bold">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 font-bold">
            <NavLink to="/">Home</NavLink>
            {!user && (
              <div className="flex gap-10">
                <NavLink to="/login">LogIn</NavLink>
                <NavLink to="/Signup">SignUp</NavLink>
              </div>
            )}
            {user && (
              <div className="flex gap-10">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/profile">Profile</NavLink>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <span className="font-semibold">{user?.email}</span>
              <button onClick={handleSignOut} className="btn">
                LogOut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
