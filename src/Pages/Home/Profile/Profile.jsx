import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col  items-center justify-center h-screen text-center">
      <div className="border-2 border-sky-500 rounded-xl p-7 space-y-3">
        <h1 className="font-bold text-4xl">Profile Page</h1>
        <p className="font-semibold text-2xl">Welcome to your profile page!</p>
        <p className="font-bold">Email : {user?.email} </p>
      </div>
    </div>
  );
};

export default Profile;
