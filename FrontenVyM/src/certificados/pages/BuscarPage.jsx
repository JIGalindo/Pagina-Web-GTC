import React, { useState } from 'react';
import axios from 'axios';
import { Footer } from '../components/Footer/Footer';

export const BuscarPage = () => {
  const [searchId, setSearchId] = useState('');
  const [certificate, setCertificate] = useState(null);
  console.log(certificate);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    setSearchId(e.target.value);
  };

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    setErrorMsg('');
    setCertificate(null);
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:4000/certificado/${searchId}`);

      if (response.data) {
        setCertificate(response.data);
      } else {
        setErrorMsg(`No se encontró un certificado con el ID ${searchId}`);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('No se encontró el certificado o hubo un error en la conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pb-20 p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Buscar Certificado</h1>
        <hr className="border-gray-300 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Columna izquierda */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Buscar por ID</h4>
            <hr className="border-gray-300 mb-4" />

            <form onSubmit={onSearchSubmit}>
              <input
                type="text"
                placeholder="Ingrese el ID del certificado..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="searchId"
                autoComplete="off"
                value={searchId}
                onChange={onInputChange}
              />
              <button
                type="submit"
                className="mt-3 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                disabled={loading}
              >
                {loading ? 'Buscando...' : 'Buscar'}
              </button>
            </form>
          </div>

          {/* Columna derecha */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Resultados</h4>
            <hr className="border-gray-300 mb-4" />

            {errorMsg && (
              <div className="p-4 mb-4 rounded-lg bg-red-100 text-red-700 font-medium animate-fadeIn">
                {errorMsg}
              </div>
            )}

            {certificate && (
              <div className="p-6 bg-gray-50 rounded-xl shadow animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  Certificado #{certificate.id}
                </h2>
                <p className="text-gray-700">
                  <b>Nombre:</b> {certificate.nombreCompleto}
                </p>
                <p className="text-gray-700">
                  <b>Nombre:</b> {certificate.identidad}
                </p>
                <p className="text-gray-700">
                  <b>Empresa:</b> {certificate.empresa}
                </p>
                <p className="text-gray-700">
                  <b>Curso:</b> {certificate.tipoCertificado}
                </p>
                <p className="text-gray-700">
                  <b>Instructor:</b> {certificate.instructor}
                </p>

                <p className="text-gray-700">
                  <b>Fecha de emisión:</b> {certificate.fechaCertificacion}
                </p>
                <p className="text-gray-700">
                  <b>Fecha de expiración:</b> {certificate.fechaExpiracopm}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
