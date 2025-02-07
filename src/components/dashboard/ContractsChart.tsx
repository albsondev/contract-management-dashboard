import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import mockContracts from "../../assets/mockContracts.json";
import ChartsFilters from "./ChartsFilters";

interface Contract {
  endDate: string;
  status: string;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ContractsChart = () => {
  const [filteredContracts, setFilteredContracts] = useState<Contract[]>(mockContracts);

  const handleFilterChange = (filters: { status: string; startDate: string; endDate: string }) => {
    let filtered = mockContracts;

    if (filters.status) {
      filtered = filtered.filter((c) => c.status === filters.status);
    }
    if (filters.startDate) {
      filtered = filtered.filter((c) => new Date(c.endDate) >= new Date(filters.startDate));
    }
    if (filters.endDate) {
      filtered = filtered.filter((c) => new Date(c.endDate) <= new Date(filters.endDate));
    }

    setFilteredContracts(filtered);
  };

  const getContractsByMonth = () => {
    const months = Array(12).fill(0);

    filteredContracts.forEach((contract: Contract) => {
      const month: number = new Date(contract.endDate).getMonth();
      months[month] += 1;
    });

    return months;
  };

  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "Contratos vencendo",
        data: getContractsByMonth(),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Expiração de Contratos</h3>
      <ChartsFilters onFilterChange={handleFilterChange} />
      <Bar data={data} />
    </div>
  );
};

export default ContractsChart;
