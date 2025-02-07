import ContractsTable from "../components/dashboard/ContractsTable";

const Reports = () => {



  return (
    <div className="space-y-6 w-full">
      <h2 className="text-2xl font-semibold text-gray-800">Relatórios</h2>

      {/* Tabela de Contratos */}
      <ContractsTable />
    
    </div>
  );
};

export default Reports;
