let cargo = "gerente";

switch (cargo) {
  case "estagiario":
    console.log("Salário base: R$ 1500");
    break;
  case "analista":
    console.log("Salário base: R$ 4000");
    break;
  case "gerente":
    console.log("Salário base: R$ 8000");
    break;
  case "diretor":
    console.log("Salário base: R$ 15000");
    break;
  default:
    console.log("Cargo não encontrado");
}
