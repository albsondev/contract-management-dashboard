import mockContractsData from "../../assets/mockContracts.json";

const mockContracts: Contract[] = mockContractsData as Contract[];

interface Contract {
  id: number;
  client: string;
  startDate: string;
  endDate: string;
  status: string;
  value: number;
}

const ContractsTable = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Lista de Contratos</h3>
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
            {mockContracts.map((contract: Contract) => (
              <tr key={contract.id} className="border-b">
                <td className="p-2">{contract.id}</td>
                <td className="p-2">{contract.client}</td>
                <td className="p-2">{contract.startDate}</td>
                <td className="p-2">{contract.endDate}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractsTable;
