import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Main } from "./Pages";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default index;
