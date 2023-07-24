import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import Admin from "./Admin/Admin";
import Homepage from "../Components/Homepage";
import SingleBooksPage from "./singleBooksPage";
import SolutionPage from "./solutionPage";

import ProductPage from "./ProductPage";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  return (
    <div>
      <Routes>
        {/* //         <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={isAuth ? <Homepage /> : <LandingPage />} />
        <Route path="/explanations" element={<ProductPage />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/books/:id" element={<SingleBooksPage />} />
        <Route path="/solution/:id" element={<SolutionPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
