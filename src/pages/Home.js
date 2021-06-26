import React, { Fragment, useContext, useState } from "react";
import Bord from "../components/layout/Bord";
import SidePanel from "../components/layout/SidePanel";
import AppContext from "../context/app/appContext";
import "../css/login.css";

export const Home = () => {
  const appContext = useContext(AppContext);
  const { user, setUser } = appContext;
  const [userInputField, setUserInputField] = useState("");
  return (
    <Fragment>
      {user ? (
        <div
          className="main-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <SidePanel />
          <Bord />
        </div>
      ) : (
        <div className="login-container">
          <div className="title"> Please Log In </div>
          <div className="login">
            <div className="login-item">
              <input
                placeholder="Please enter your name"
                value={userInputField}
                onChange={(e) => {
                  setUserInputField(e.target.value);
                }}
              />
            </div>
            <div className="login-item">
              <button
                onClick={() => {
                  setUser(userInputField);
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Home;
