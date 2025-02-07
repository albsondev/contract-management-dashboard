import React from "react";
import { formatDate } from "../../utils/formatDate"; // Importando a função de formatação

interface Contract {
  id: number;
  client: string;
  startDate: string;
  endDate: string;
  status: string;
  value: number;
  type: string;
}

interface ModalProps {
  contract: Contract | null;
  onClose: () => void;
}

const ContractDetailsModal: React.FC<ModalProps> = ({ contract, onClose }) => {
  if (!contract) return null;

  // Definir classes de cores para os status
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Expirado":
        return "bg-red-500 text-white";
      case "Renovação Pendente":
        return "bg-yellow-500 text-white";
      case "Ativo":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Detalhes do Contrato</h2>
        <hr />
        <div className="space-y-4 mt-4 mb-4">
          <p><strong>ID:</strong> {contract.id}</p>
          <p><strong>Cliente:</strong> {contract.client}</p>
          <p><strong>Tipo:</strong> {contract.type}</p>
          <p><strong>Data de Início:</strong> {formatDate(contract.startDate)}</p>
          <p><strong>Data de Vencimento:</strong> {formatDate(contract.endDate)}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`inline-flex items-center px-2 py-1 text-xs font-bold leading-none rounded-full ${getStatusBadgeClass(contract.status)}`}>
              {contract.status}
            </span>
          </p>
          <p><strong>Valor:</strong> R$ {contract.value.toLocaleString("pt-BR")}</p>
        </div>
        <hr />
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractDetailsModal;
