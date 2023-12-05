const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 650,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1550,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1450,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1500,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1200,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 700,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//A
const pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log("Las pizzas con ID impar son:");
pizzasIdImpar.forEach((pizza) => {
  console.log(`${pizza.nombre} - ID: ${pizza.id}`);
});

//B
const pizzaMenosDeSeiscientos = pizzas.some((pizza) => pizza.precio < 600);
if (pizzaMenosDeSeiscientos) {
  console.log("Sí, hay al menos una pizza que vale menos de $600.");
} else {
  console.log("No, todas las pizzas valen $600 o más.");
}

//C
console.log("Nombre y precio de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre} - Precio: $${pizza.precio}`);
});

//D
console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre}:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(`- ${ingrediente}`);
  });
});
