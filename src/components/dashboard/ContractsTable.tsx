import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { formatDate } from "../../utils/formatDate";
import { TableColumn } from 'react-data-table-component';
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


  const columns: TableColumn<Contract>[] = [
    { name: 'ID', selector: (row: Contract) => row.id, sortable: true },
    { name: 'Cliente', selector: (row: Contract) => row.client, sortable: true },
    { name: 'Início', selector: (row: Contract) => row.startDate, format: (row: Contract) => formatDate(row.startDate), sortable: true },
    { name: 'Vencimento', selector: (row: Contract) => row.endDate, format: (row: Contract) => formatDate(row.endDate), sortable: true },
    { name: 'Status', selector: (row: Contract) => row.status, sortable: true },
    { name: 'Valor', selector: (row: Contract) => row.value, cell: (row: Contract) => `R$ ${row.value.toLocaleString('pt-BR')}`, sortable: true }
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Lista de Contratos</h3>

      <ContractsFilters onAddClick={() => navigate("/contracts")} onFilterChange={handleFilterChange} />

      <DataTable
        title="Contratos"
        columns={columns}
        data={filteredContracts}
        pagination
        striped
        highlightOnHover
        responsive
        defaultSortFieldId="id"
      />
    </div>
  );
};

export default ContractsTable;
