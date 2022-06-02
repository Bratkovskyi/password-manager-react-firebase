import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../API/Firebase";
import Loader from "../../UI/Loader/Loader";
import AppRouter from "../AppRouter/AppRouter";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

const Layout = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="Layout">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default Layout;
