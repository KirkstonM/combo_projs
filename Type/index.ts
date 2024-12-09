type Pizza = {
    id: number
    name : string
    price : number
}
type Order = {
    id : number
    pizza : Pizza
    status : "ordered" | "Completed";
}
const menu: Pizza[] = [
    { id: 1, name : "Margarita", price : 8 },
    { id: 2, name : "Peperoni", price : 10 },
    { id: 3, name : "Pineapple", price : 6 },
    { id: 4, name : "Sausage", price : 5 },
];

let cashInRegister = 100;
const orderHistory : Order[] = [];
let counter   = 1;

const addNewPizza = (pizzaObj : Pizza) => {
    menu.push(pizzaObj)
};

const placeOrder = (pizzaName : string) => {
    const foundPizza  = menu.find(pizza => pizza.name === pizzaName);
    if(!foundPizza) {
        console.log(`${pizzaName} cannot be found `);
        return;
    }
    cashInRegister += foundPizza.price;
    const newPizzaObj: Order = { id : counter++, pizza: foundPizza, status: "ordered" };
    orderHistory.push(newPizzaObj);
    return newPizzaObj;
};

const completeOrder = ( orderId: number) => {
    const completedOrder = orderHistory.find(order => order.id === orderId);
    if(!completedOrder) {
        console.log(`${orderId} cannot be found `);
        return;
    }
    completedOrder.status = "Completed";
    return completedOrder;
};

const getPizzaDetail = (identifier : string | number ) => {

    if(typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if(typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier) 
    } else {
        console.log("Pizza couldnt be found");
        
    }
}
addNewPizza({ id: 4, name : "BBQ Chicken", price : 10 });
addNewPizza({ id: 5, name : "Spicy Sausage", price : 8 });
addNewPizza({ id: 6, name : "Chicken and bacon", price : 12 });

placeOrder("BBQ Chicken");
completeOrder(1);

// console.log("Menu", menu);
// console.log("Cash in register", cashInRegister);
// console.log("Order Queue", orderHistory);
let findPizza = getPizzaDetail("Pineapple");
console.log("Found Pizza", findPizza);

