const fs = require("fs");

// Função para gerar datas aleatórias
const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString()
    .split("T")[0];
};

// Possíveis status e tipos de contrato
const statuses = ["Ativo", "Expirado", "Renovação Pendente"];
const contractTypes = ["Serviços", "Fornecimento", "Consultoria", "Manutenção"];

const generateContracts = (count = 100) => {
  const contracts = [];

  for (let i = 1; i <= count; i++) {
    const startDate = getRandomDate(new Date(2022, 0, 1), new Date(2024, 0, 1));
    const endDate = getRandomDate(new Date(2024, 1, 1), new Date(2026, 11, 31));
    const status = new Date(endDate) < new Date() ? "Expirado" : statuses[Math.floor(Math.random() * statuses.length)];
    const value = Math.floor(Math.random() * 100000) + 5000;

    contracts.push({
      id: i,
      client: `Empresa ${i}`,
      startDate,
      endDate,
      status,
      value,
      type: contractTypes[Math.floor(Math.random() * contractTypes.length)]
    });
  }

  return contracts;
};

// Gerar e salvar o arquivo JSON
const contracts = generateContracts();
fs.writeFileSync("../assets/mockContracts.json", JSON.stringify(contracts, null, 2));

console.log("Arquivo mockContracts.json gerado com sucesso!");
