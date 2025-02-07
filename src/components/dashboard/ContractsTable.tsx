import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { formatDate } from "../../utils/formatDate";
import ContractsFilters from "./ContractsFilters";
import { useNavigate } from "react-router-dom";
import ContractDetailsModal from "./ContractDetailsModal"; // Importa o modal
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
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null); // Estado para o contrato selecionado
  const navigate = useNavigate();

  useEffect(() => {
    const savedContracts = JSON.parse(localStorage.getItem("contracts") || "[]");
    const allContracts = [...mockContracts, ...savedContracts];
    setContracts(allContracts);
    setFilteredContracts(allContracts);

    if (savedContracts.length === 0) {
      localStorage.setItem("contracts", JSON.stringify(mockContracts));
    }
  }, []);

  const handleFilterChange = (filters: { status: string; type: string; startDate: string; endDate: string }) => {
    let filtered = contracts;

    if (filters.status) {
      filtered = filtered.filter(c => c.status === filters.status);
    }
    if (filters.type) {
      filtered = filtered.filter(c => c.type === filters.type);
    }
    if (filters.startDate) {
      filtered = filtered.filter(c => new Date(c.startDate) >= new Date(filters.startDate));
    }
    if (filters.endDate) {
      filtered = filtered.filter(c => new Date(c.endDate) <= new Date(filters.endDate));
    }

    setFilteredContracts(filtered);
  };

  interface Column {
    name: string;
    selector?: (row: Contract) => string | number;
    sortable?: boolean;
    cell?: (row: Contract) => JSX.Element;
    width?: string;
  }

  const columns: Column[] = [
    { name: 'ID', selector: row => row.id, sortable: true, width: '80px' },
    { name: 'Cliente', selector: row => row.client, sortable: true },
    { name: 'Início', selector: row => formatDate(row.startDate), sortable: true },
    { name: 'Vencimento', selector: row => formatDate(row.endDate), sortable: true },
    { 
      name: 'Status', 
      selector: row => row.status, 
      cell: row => {
        let badgeClass = '';

        switch (row.status) {
          case 'Expirado':
            badgeClass = 'bg-red-500 text-white';
            break;
          case 'Renovação Pendente':
            badgeClass = 'bg-yellow-500 text-white';
            break;
          case 'Ativo':
            badgeClass = 'bg-green-500 text-white';
            break;
          default:
            badgeClass = 'bg-gray-300 text-black';
        }

        return (
          <span className={`inline-flex items-center px-2 py-1 text-xs font-bold leading-none rounded-full ${badgeClass}`}>
            {row.status}
          </span>
        );
      },
      sortable: true 
    },
    { 
      name: 'Valor', 
      selector: row => `R$ ${row.value.toLocaleString('pt-BR')}`, 
      sortable: true 
    },
    { 
      name: 'Ações',
      cell: row => (
        <button
          onClick={() => setSelectedContract(row)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Ver Detalhes
        </button>
      )
    }
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Lista de Contratos</h3>

      <ContractsFilters onAddClick={() => navigate("/contracts")} onFilterChange={handleFilterChange} />

      <DataTable
        columns={columns}
        data={filteredContracts}
        pagination
        striped
        highlightOnHover
        responsive
        defaultSortFieldId="id"
      />

      {/* Modal para exibir detalhes */}
      {selectedContract && <ContractDetailsModal contract={selectedContract} onClose={() => setSelectedContract(null)} />}
    </div>
  );
};

export default ContractsTable;
