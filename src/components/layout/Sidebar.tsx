import { FiHome, FiBarChart2, FiFileText, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:w-64 md:fixed inset-y-0 left-0 bg-white border-r border-gray-200 h-screen">
      <nav className="flex flex-col gap-4 p-4">
        <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
          <FiHome /> Dashboard
        </Link>
        <Link to="/contracts" className="flex items-center gap-2 hover:text-gray-300">
          <FiFileText /> Contratos
        </Link>
        <Link to="/reports" className="flex items-center gap-2 hover:text-gray-300">
          <FiBarChart2 /> Relatórios
        </Link>
        <Link to="/settings" className="flex items-center gap-2 hover:text-gray-300">
          <FiSettings /> Configurações
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
