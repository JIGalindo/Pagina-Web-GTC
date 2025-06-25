import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";

export function Certificate() {
  const [certificado, setCertificado] = useState(null);
  console.log("Certificado:", certificado);

  useEffect(() => {
    axios
      .get("http://localhost:4000/certificado/10019")
      .then((res) => setCertificado(res.data))
      .catch((err) => console.error("Error al llamar API:", err));
  }, []);
  if (!certificado) {
    return <p className="p-4 text-center">Cargando certificado...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      <div className="bg-white/95 rounded-2xl shadow-2xl p-10 w-full max-w-xl border-4 border-yellow-400 relative">
        <img
          src="/Logo.png"
          alt="Logo"
          className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 object-contain bg-white rounded-full border-4 border-yellow-400 shadow-lg"
        />
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-2 text-center tracking-wide">
            Certificado de Participación
          </h1>
          <hr className="border-yellow-400 w-1/2 mb-6" />
          <p className="text-lg mb-2 text-blue-900 font-semibold">
            {certificado.nombreCompleto}
          </p>
          <p className="text-base mb-1 text-gray-700">
            <span className="font-semibold text-blue-900">Identidad:</span>{" "}
            {certificado.identidad}
          </p>
          <p className="text-base mb-1 text-gray-700">
            <span className="font-semibold text-blue-900">Empresa:</span>{" "}
            {certificado.empresa}
          </p>
          <p className="text-base mb-1 text-gray-700">
            <span className="font-semibold text-blue-900">Certificado:</span>{" "}
            {certificado.tipoCertificado}
          </p>
          <p className="text-base mb-1 text-gray-700">
            <span className="font-semibold text-blue-900">Instructor:</span>{" "}
            {certificado.instructor}
          </p>
          <p className="text-base mb-1 text-gray-700">
            <span className="font-semibold text-blue-900">Fecha:</span>{" "}
            {certificado.fechaCertificacion.slice(0, 10)}
          </p>
          <p className="text-base mt-4 text-yellow-600 font-bold tracking-wider">
            Codigo del Certificado: {certificado.id}
          </p>
        </div>
      </div>
    </div>
  );
}
