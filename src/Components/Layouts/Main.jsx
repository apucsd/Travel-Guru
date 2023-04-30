/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div
      className="h-screen bg-[url('https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?w=900&t=st=1682843089~exp=1682843689~hmac=a7c9ed9b503ab29dc6a5120a59d11e521574244603ce0e1935dd7ed8c6221d75')] "
      style={{
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "	rgba(0, 0, 0, 0.600",
      }}
    >
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
