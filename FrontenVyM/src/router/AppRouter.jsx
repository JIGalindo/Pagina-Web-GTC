
import { Routes, Route, Navigate } from "react-router";// Importing Marvel and DC pages
import {LoginPage} from "../auth"
import {CertificateRoutes}from '../certificados/'

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<CertificateRoutes/>} />
      </Routes>
    </div>
  );
};
 