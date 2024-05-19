import inquirer from "inquirer";

const { operation } = await inquirer.prompt({
  type: "list",
  name: "operation",
  choices: ["suma", "resta", "multiplicacion", "division"],
});

const { valor1 } = await inquirer.prompt({
  type: "input",
  name: "valor1",
  message: "Inserte el primer numero",
});

const { valor2 } = await inquirer.prompt({
  type: "input",
  name: "valor2",
  message: "Inserte el segundo numero",
});
if (operation === "suma") {
  console.log(Number(valor1) + Number(valor2));
}
if (operation === "resta") {
  console.log(Number(valor1) - Number(valor2));
}
if (operation === "multiplicacion") {
  console.log(Number(valor1) * Number(valor2));
}
if (operation === "division") {
  console.log(Number(valor1) / Number(valor2));
}
