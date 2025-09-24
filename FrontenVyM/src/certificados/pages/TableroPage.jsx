import React from 'react'

export const TableroPage = () => {
    return (
        <div>
            <h1 className='text-center decoration-sky-100'>Tablero</h1>
            <hr />
            {/* Riva Dashboard - Tailwind CSS */}
            <div className=''>
                <div class="flex flex-wrap mb-2">
                    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                        <div class="bg-green-600  rounded shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-shrink pl-1 pr-4"><i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                                <div class="flex-1 text-right">
                                    <h5 class="text-white">Total Capacitaciones</h5>
                                    <h3 class="text-white text-3xl">3249&euro;<span class="text-green-400"><i class="fas fa-caret-down"></i></span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
                        <div class="bg-blue-600 shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                                <div class="flex-1 text-right">
                                    <h5 class="text-white">Espacios Confinados</h5>
                                    <h3 class="text-white text-3xl">13 <span class="text-blue-400"><i class="fas fa-caret-up"></i></span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
                        <div class="bg-orange-600  shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                                <div class="flex-1 text-right pr-1">
                                    <h5 class="text-white">Alturas</h5>
                                    <h3 class="text-white text-3xl">2 <span class="text-orange-400"><i class="fas fa-caret-up"></i></span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
                        <div class="bg-purple-600  shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
                                <div class="flex-1 text-right">
                                    <h5 class="text-white">Mes Anterior</h5>
                                    <h3 class="text-white text-3xl">76 days</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
                        <div class="bg-red-600 shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                                <div class="flex-1 text-right">
                                    <h5 class="text-white">Empresas</h5>
                                    <h3 class="text-white text-3xl">7 tasks</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-1">
                        <div class="bg-pink-600  shadow p-2">
                            <div class="flex flex-row items-center">
                                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>
                                <div class="flex-1 text-right">
                                    <h5 class="text-white">Capacitaciones Programadas</h5>
                                    <h3 class="text-white text-3xl">3 <span class="text-pink-400"><i class="fas fa-caret-up"></i></span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

