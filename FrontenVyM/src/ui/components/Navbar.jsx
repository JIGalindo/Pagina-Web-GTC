import { Link, NavLink, useNavigate } from 'react-router'

export const Navbar = () => {
  const navigate = useNavigate();
  console.log(props);
  const onlogout = () => {
    navigate("/login", { replace: true });}
    return (
      <>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2  lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="./Logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    <NavLink className={({ isActive }) => `rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white${isActive ? "active" : ""}`}
                      to="/inicio">
                      Inicio
                    </NavLink>
                    <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive ? "active" : ""}`}>
                      Equipo
                    </NavLink>
                    <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive ? "active" : ""}`}>
                      Capacitaciones
                    </NavLink>
                    <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive ? "active" : ""}`}>
                      Certificados
                    </NavLink>
                    <NavLink className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive ? "active" : ""}`}>
                      Contactanos
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Inicio
              </a>
              <a
                href="#Team"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Equipo
              </a>
              <a
                href="#Course"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Capacitaciones
              </a>
              <a
                href="https://certificados.vymhonduras.com/"
                target="_blank"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Certificados
              </a>
              <a
                href="#Contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contactanos
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  };