import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import mockContracts from "../../assets/mockContracts.json";
import ChartsFilters from "./ChartsFilters";

interface Contract {
  type: string;
  status: string;
  endDate: string;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ContractsDistributionChartServices = () => {
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

  const getDistributionByType = () => {
    const distribution = {
      Serviços: 0,
      Fornecimento: 0,
      Consultoria: 0,
      Manutenção: 0,
    };

    filteredContracts.forEach((contract: Contract) => {
      if (contract.type in distribution) {
        distribution[contract.type as keyof typeof distribution] += 1;
      }
    });

    return distribution;
  };

  const distribution = getDistributionByType();
  const data = {
    labels: Object.keys(distribution),
    datasets: [
      {
        label: "Distribuição por Tipo",
        data: Object.values(distribution),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribuição de Contratos por Tipo</h3>
      
      {/* Filtros para o gráfico */}
      <ChartsFilters onFilterChange={handleFilterChange} />

      <div style={{ position: "relative", height: "40vh", width: "100%" }}>
        <Bar data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default ContractsDistributionChartServices;
