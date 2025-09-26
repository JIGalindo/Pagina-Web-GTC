import axios from 'axios';
import { Footer } from '../components/Footer/Footer'
import React, { useState, useEffect } from 'react';

export const CertificadosPage = () => {
  const [certificados, setCertificados] = useState([]);
  const [editando, setEditando] = useState(null); // Certificado a editar
  const [form, setForm] = useState({
    nombreCompleto: '',
    identidad: '',
    empresa: '',
    tipoCertificado: ''
  });

  useEffect(() => {
    axios.get("http://localhost:4000/certificado")
      .then((res) => setCertificados(res.data.message))
      .catch((err) => console.error("Error al llamar API:", err));
  }, []);

  // Eliminar
  const handleEliminar = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este certificado?")) {
      try {
        await axios.delete(`http://localhost:4000/certificado/${id}`);
        setCertificados(certificados.filter((c) => c.id !== id));
      } catch (error) {
        alert("Error al eliminar el certificado");
        console.error(error);
      }
    }
  };

  // Abrir modal de edición
  const handleEditar = (cert) => {
    setEditando(cert.id);
    setForm({
      nombreCompleto: cert.nombreCompleto,
      identidad: cert.identidad,
      empresa: cert.empresa,
      tipoCertificado: cert.tipoCertificado
    });
  };

  // Guardar cambios
  const handleActualizar = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/certificado/${editando}`, form);
      setCertificados(certificados.map(c =>
        c.id === editando ? { ...c, ...form } : c
      ));
      setEditando(null);
    } catch (error) {
      alert("Error al actualizar el certificado");
      console.error(error);
    }
  };

  return (
    <>
      <div className="container p-4 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">
            Personas Certificadas
          </h1>
          <button
            className="bg-sky-600 hover:bg-sky-700 text-xs text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200"
          >
            + Nuevo
          </button>
        </div>
        <hr className="w-full mb-4 border-gray-400" />

        {/* Tabla responsiva con scroll horizontal y vertical */}
        <div className="w-full overflow-x-auto">
          <div className="max-h-[400px] overflow-y-auto">
            <table className="min-w-full text-center border border-gray-300 rounded-lg shadow-lg text-sm md:text-base">
              <thead className="bg-sky-500 text-white sticky top-0 z-10">
                <tr>
                  <th className="p-2 md:p-4">Codigo</th>
                  <th className="p-2 md:p-4">Nombre</th>
                  <th className="p-2 md:p-4">Identidad</th>
                  <th className="p-2 md:p-4">Empresa</th>
                  <th className="p-2 md:p-4">Certificado</th>
                  <th className="p-2 md:p-4">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-grey-light">
                {certificados.map((c) => (
                  <tr key={c.id} className="hover:bg-sky-50 transition-colors">
                    <td className="p-2 md:p-4">{c.id}</td>
                    <td className="p-2 md:p-4">{c.nombreCompleto}</td>
                    <td className="p-2 md:p-4">{c.identidad}</td>
                    <td className="p-2 md:p-4">{c.empresa}</td>
                    <td className="p-2 md:p-4">{c.tipoCertificado}</td>
                    <td className="p-2 md:p-4 space-x-2">
                      <button
                        onClick={() => handleEditar(c)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-3 rounded shadow transition-colors duration-200 inline-flex items-center justify-center"
                        title="Editar"
                      >
                        {/* Icono lápiz (editar) */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13zm0 0V21h8" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleEliminar(c.id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded shadow transition-colors duration-200 inline-flex items-center justify-center"
                        title="Eliminar"
                      >
                        {/* Icono papelera (eliminar) */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal de edición */}
        {editando && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <form
              onSubmit={handleActualizar}
              className="bg-white p-6 rounded shadow-lg w-full max-w-md"
            >
              <h2 className="text-lg font-bold mb-4">Editar Certificado</h2>
              <label className="block mb-2 text-sm font-medium">Nombre Completo
                <input
                  className="w-full border rounded px-2 py-1"
                  value={form.nombreCompleto}
                  onChange={e => setForm({ ...form, nombreCompleto: e.target.value })}
                  required
                />
              </label>
              <label className="block mb-2 text-sm font-medium">Identidad
                <input
                  className="w-full border rounded px-2 py-1"
                  value={form.identidad}
                  onChange={e => setForm({ ...form, identidad: e.target.value })}
                  required
                />
              </label>
              <label className="block mb-2 text-sm font-medium">Empresa
                <input
                  className="w-full border rounded px-2 py-1"
                  value={form.empresa}
                  onChange={e => setForm({ ...form, empresa: e.target.value })}
                  required
                />
              </label>
              <label className="block mb-4 text-sm font-medium">Tipo Certificado
                <input
                  className="w-full border rounded px-2 py-1"
                  value={form.tipoCertificado}
                  onChange={e => setForm({ ...form, tipoCertificado: e.target.value })}
                  required
                />
              </label>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditando(null)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-4 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-1 px-4 rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
      <Footer />
    </>
  )
}
