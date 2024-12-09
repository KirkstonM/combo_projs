var menu = [
    { name: "Margarita", price: 8 },
    { name: "Peparoni", price: 10 },
    { name: "Pineapple", price: 6 },
    { name: "Sausage", price: 5 },
];
var cashInRegister = 100;
var orderQueue = [];
var counter = 1;
var addNewPizza = function (pizzaObj) {
    menu.push(pizzaObj);
};
var placeOrder = function (pizzaName) {
    var foundPizza = menu.find(function (pizza) { return pizza.name === pizzaName; });
    cashInRegister += foundPizza.price;
    var newPizzaObj = { id: counter++, pizza: foundPizza, status: "ordered" };
    orderQueue.push(newPizzaObj);
    return newPizzaObj;
};
var completeOrder = function (orderId) {
    var completedOrder = orderQueue.find(function (order) { return order.id === orderId; });
    completedOrder.status = "Completed";
    return completedOrder;
};
addNewPizza({ name: "BBQ Chicken", price: 10 });
addNewPizza({ name: "Spicy Sausage", price: 8 });
addNewPizza({ name: "Chicken and bacon", price: 12 });
placeOrder("BBQ Chicken");
completeOrder(1);
console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order Queue", orderQueue);
var myName = "Kirk";
