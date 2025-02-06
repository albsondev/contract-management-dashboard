import { FiHome, FiBarChart2, FiFileText, FiSettings } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-blue-900 h-screen text-white transition-all duration-300`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 w-full text-left focus:outline-none"
      >
        {isOpen ? "Fechar" : "Abrir"}
      </button>
      <nav className="flex flex-col gap-4 p-4">
        <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
          <FiHome /> {isOpen && "Dashboard"}
        </Link>
        <Link to="/contracts" className="flex items-center gap-2 hover:text-gray-300">
          <FiFileText /> {isOpen && "Contratos"}
        </Link>
        <Link to="/reports" className="flex items-center gap-2 hover:text-gray-300">
          <FiBarChart2 /> {isOpen && "Relatórios"}
        </Link>
        <Link to="/settings" className="flex items-center gap-2 hover:text-gray-300">
          <FiSettings /> {isOpen && "Configurações"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
