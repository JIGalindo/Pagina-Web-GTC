import { useEffect, useState } from "react"
import axios from 'axios';
import React from 'react'

export const TableroPage = () => {
    const [certificados, setCertificados] = useState([]);

    let contadorEC = 0;
    let contadorAlturas = 0;
    let contadorEmpresa = 0;

    const variantesEspaciosConfinados = [
        'Persona Autorizada Para Trabajos en Espacios Confinados',
        'Persona Competente Para Trabajos en Espacios Confinados',
    ];

    const variantesAlturas = [
        'Persona Autorizada Para Trabajos en Alturas',
        'Persona Competente Para Trabajos en Alturas',
    ];

    certificados.forEach(element => {
        if (variantesEspaciosConfinados.includes(element.tipoCertificado)) {
            contadorEC++;
        }
        if (variantesAlturas.includes(element.tipoCertificado)) {
            contadorAlturas++;
        }
    });

    // Contar empresas certificadas
    const empresasUnicas = new Set(certificados.map(cert => cert.empresa));
    contadorEmpresa = empresasUnicas.size;
    //
    console.log("Empresas certificadas", contadorEmpresa);

        useEffect(() => {
            axios.get("http://localhost:4000/certificado")
                .then((res) => setCertificados(res.data.message))
                .catch((err) => console.error("Error al llamar API:", err));
        }, []);

        return (
            <div className="container p-4 flex flex-col items-center">
                <h1 className='text-lg font-semibold'>Tablero</h1>
                <hr className="w-full mb-4 border-gray-400" />
                {/* Riva Dashboard - Tailwind CSS */}
                <div className=''>
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                            <div className="bg-green-600  rounded shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pl-1 pr-4"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                                    <div className="flex-1 text-right">
                                        <h5 className="text-white">Total Capacitaciones</h5>
                                        <h3 className="text-white text-3xl">{certificados.length}<span className="text-green-400"><i className="fas fa-caret-down"></i></span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
                            <div className="bg-blue-600 shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pl-1 pr-4"><i className="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                                    <div className="flex-1 text-right">
                                        <h5 className="text-white">Espacios Confinados</h5>
                                        <h3 className="text-white text-3xl">{contadorEC}<span className="text-blue-400"><i className="fas fa-caret-up"></i></span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
                            <div className="bg-orange-600  shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pl-1 pr-4"><i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                                    <div className="flex-1 text-right pr-1">
                                        <h5 className="text-white">Alturas</h5>
                                        <h3 className="text-white text-3xl">{contadorAlturas}<span className="text-orange-400"><i className="fas fa-caret-up"></i></span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
                            <div className="bg-purple-600  shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pl-1 pr-4"><i className="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
                                    <div className="flex-1 text-right">
                                        <h5 className="text-white">Mes Anterior</h5>
                                        <h3 className="text-white text-3xl">76 days</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
                            <div className="bg-red-600 shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pl-1 pr-4"><i className="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                                    <div className="flex-1 text-right">
                                        <h5 className="text-white">Empresas</h5>
                                        <h3 className="text-white text-3xl">{contadorEmpresa}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-1">
                            <div className="bg-pink-600  shadow p-2">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pl-1 pr-4"><i className="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>
                                    <div className="flex-1 text-right">
                                        <h5 className="text-white">Siguiente</h5>
                                        <h3 className="text-white text-3xl">3 <span className="text-pink-400"><i className="fas fa-caret-up"></i></span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

