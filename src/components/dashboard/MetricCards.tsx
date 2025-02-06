import { FiFileText, FiCheckCircle, FiClock, FiDollarSign } from "react-icons/fi";

// Mock de métricas (podemos substituir por dados dinâmicos depois)
const metrics = [
  { id: 1, label: "Total de Contratos", value: 120, icon: <FiFileText /> },
  { id: 2, label: "Contratos Ativos", value: 85, icon: <FiCheckCircle /> },
  { id: 3, label: "Próximos ao Vencimento", value: 20, icon: <FiClock /> },
  { id: 4, label: "Valor Total (R$)", value: "R$ 1.200.000", icon: <FiDollarSign /> }
];

const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.id} className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
          <div className="text-blue-600 text-3xl">{metric.icon}</div>
          <div>
            <p className="text-gray-600">{metric.label}</p>
            <h3 className="text-xl font-bold">{metric.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCards;
