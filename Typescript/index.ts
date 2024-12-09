const menu = [
    {name : "Margarita", price : 8 },
    {name : "Peparoni", price : 10 },
    {name : "Pineapple", price : 6 },
    {name : "Sausage", price : 5 },
];

let cashInRegister = 100;
const orderQueue = [];
let counter   = 1;

const addNewPizza = (pizzaObj) => {
    menu.push(pizzaObj)
};

const placeOrder = (pizzaName : string) => {
    const foundPizza = menu.find(pizza => pizza.name === pizzaName);
    cashInRegister += foundPizza.price;
    const newPizzaObj = { id : counter++, pizza: foundPizza, status: "ordered" };
    orderQueue.push(newPizzaObj);
    return newPizzaObj;
};

const completeOrder = ( orderId: number) => {
    const completedOrder = orderQueue.find(order => order.id === orderId);
    completedOrder.status = "Completed";
    return completedOrder;
};

addNewPizza({ name : "BBQ Chicken", price : 10 });
addNewPizza({ name : "Spicy Sausage", price : 8 });
addNewPizza({ name : "Chicken and bacon", price : 12 });

placeOrder("BBQ Chicken");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order Queue", orderQueue);

let myName: string = "Kirk"