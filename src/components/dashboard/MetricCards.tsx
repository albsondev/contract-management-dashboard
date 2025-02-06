import { FiFileText, FiCheckCircle, FiClock, FiDollarSign } from "react-icons/fi";

// Mock de métricas (podemos substituir por dados dinâmicos depois)
const metrics = [
  { id: 1, label: "Total de Contratos", value: 120, icon: <FiFileText />, bgColor: "card-yellow", textColor: "text-yellow-600", colorValue: "text-yellow-800" },
  { id: 2, label: "Contratos Ativos", value: 85, icon: <FiCheckCircle />, bgColor: "card-blue", textColor: "text-blue-600", colorValue: "text-blue-800" },
  { id: 3, label: "Próximos ao Vencimento", value: 20, icon: <FiClock />, bgColor: "card-red", textColor: "text-red-600", colorValue: "text-red-800" },
  { id: 4, label: "Valor Total (R$)", value: "R$ 1.200.000", icon: <FiDollarSign />, bgColor: "card-green", textColor: "text-green-600", colorValue: "text-green-800" },
];

const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.id} className={`p-4 border-cards-default shadow rounded-lg flex items-center space-x-4 ${metric.bgColor}`}>
          <div className={`text-3xl ${metric.textColor}`}>{metric.icon}</div>
          <div>
            <p className={`text-md font-semibold ${metric.textColor}`}>{metric.label}</p>
            <h3 className={`text-xl font-bold ${metric.colorValue}`}>{metric.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCards;
