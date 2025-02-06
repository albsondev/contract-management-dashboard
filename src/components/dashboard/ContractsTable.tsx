import { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import ContractsFilters from "./ContractsFilters";
import { useNavigate } from "react-router-dom";
import mockContracts from "../../assets/mockContracts.json"; // Importa os contratos mockados

interface Contract {
  id: number;
  client: string;
  startDate: string;
  endDate: string;
  status: string;
  value: number;
  type: string;
}

const ContractsTable = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [filteredContracts, setFilteredContracts] = useState<Contract[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Carregar contratos do localStorage
    const savedContracts = JSON.parse(localStorage.getItem("contracts") || "[]");
    
    // Combinar contratos do localStorage com os contratos mockados
    const allContracts = [...mockContracts, ...savedContracts];

    // Ordenar contratos por ID (assumindo que IDs mais altos são mais recentes)
    allContracts.sort((a, b) => b.id - a.id);

    setContracts(allContracts);
    setFilteredContracts(allContracts);

    // Persistir contratos do mock apenas se localStorage estiver vazio
    if (savedContracts.length === 0) {
      localStorage.setItem("contracts", JSON.stringify(mockContracts)); // Persistir os mockados no localStorage
    }
  }, []);

  const handleFilterChange = (filters: { status: string; type: string; startDate: string; endDate: string }) => {
    let filtered = contracts;

    if (filters.status) {
      filtered = filtered.filter((c) => c.status === filters.status);
    }
    if (filters.type) {
      filtered = filtered.filter((c) => c.type === filters.type);
    }
    if (filters.startDate) {
      filtered = filtered.filter((c) => new Date(c.startDate) >= new Date(filters.startDate));
    }
    if (filters.endDate) {
      filtered = filtered.filter((c) => new Date(c.endDate) <= new Date(filters.endDate));
    }

    setFilteredContracts(filtered);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Lista de Contratos</h3>
      
      {/* Filtros dentro da Tabela */}
      <ContractsFilters onAddClick={() => navigate("/contracts")} onFilterChange={handleFilterChange} />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Cliente</th>
              <th className="p-2 text-left">Início</th>
              <th className="p-2 text-left">Vencimento</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Valor</th>
            </tr>
          </thead>
          <tbody>
            {filteredContracts.length > 0 ? (
              filteredContracts.map((contract) => (
                <tr key={contract.id} className="border-b">
                  <td className="p-2">{contract.id}</td>
                  <td className="p-2">{contract.client}</td>
                  <td className="p-2">{formatDate(contract.startDate)}</td>
                  <td className="p-2">{formatDate(contract.endDate)}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        contract.status === "Ativo" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {contract.status}
                    </span>
                  </td>
                  <td className="p-2">R$ {contract.value.toLocaleString("pt-BR")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center text-gray-600 p-4">
                  Nenhum contrato encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractsTable;
