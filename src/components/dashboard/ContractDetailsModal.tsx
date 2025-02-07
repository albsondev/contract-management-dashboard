import React from "react";

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Detalhes do Contrato</h2>
        <div className="space-y-2">
          <p><strong>ID:</strong> {contract.id}</p>
          <p><strong>Cliente:</strong> {contract.client}</p>
          <p><strong>Tipo:</strong> {contract.type}</p>
          <p><strong>Data de Início:</strong> {contract.startDate}</p>
          <p><strong>Data de Vencimento:</strong> {contract.endDate}</p>
          <p><strong>Status:</strong> {contract.status}</p>
          <p><strong>Valor:</strong> R$ {contract.value.toLocaleString("pt-BR")}</p>
        </div>
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
