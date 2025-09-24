import { Routes, Route, Navigate } from "react-router";
import { Navbar } from "../../ui";
import {TableroPage, BuscarPage,CertificadosPage} from '../pages'

export const CertificateRoutes = () => {
  return (
    <div className="container">
      <Navbar />
      <div>
        <Routes>
          <Route path="tablero" element={<TableroPage/>} />
          <Route path="certificados" element={<CertificadosPage />} />
          <Route path="Buscar" element={<BuscarPage/>} />
          {/*<Route path="contacto" element={<Contact />} />
          <Route path="equipo" element={<OurTeam />} />
           <Route path="hero/:id" element={<></>} /> */}

          <Route path="/" element={<Navigate to="/tablero" />} />
        </Routes>
      </div>
    </div>
  );
};
