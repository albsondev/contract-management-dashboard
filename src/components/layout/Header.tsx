import { Link } from "react-router-dom";
import { FiHome, FiBarChart2, FiFileText } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800 hidden md:block">Dashboard de Contratos</h1>
      <div className="flex items-center">
        {/* Links de Navegação Centralizados Apenas em Telas Menores */}
        <div className="md:hidden flex flex-row gap-4 justify-center items-center space-y-2"> {/* Alteração para centralizar */}
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
            <FiHome className="mr-1" /> Dashboard
          </Link>
          <Link to="/contracts" className="flex items-center text-gray-600 hover:text-gray-800">
            <FiFileText className="mr-1" /> Contratos
          </Link>
          <Link to="/reports" className="flex items-center text-gray-600 hover:text-gray-800">
            <FiBarChart2 className="mr-1" /> Relatórios
          </Link>
        </div>
        <span className="text-gray-600 ml-4 hidden md:block">Bem-vindo, Usuário</span>
      </div>
    </header>
  );
};

export default Header;
