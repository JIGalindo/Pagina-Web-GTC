import React from "react";
import { Routes, Route, Navigate } from "react-router";s
import { Navbar } from "../../ui";

export const CertificateRoutes = () => {
  return (
    <div  className="container">
      <Navbar />
      <div>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </div>
  );
};
