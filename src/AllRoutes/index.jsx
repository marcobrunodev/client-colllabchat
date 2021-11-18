import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = function pageHome() {
  return <h1>Home</h1>;
};

const AllRoutes = function allRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
