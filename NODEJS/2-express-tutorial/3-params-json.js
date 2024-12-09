const express = require("express");
const { products, people } = require("./data");

const app = express();

//SENDING BACK JSON DATA
// app.get("/", (req, res) => {
//     res.json(products)
// })
app.get("/", (req, res) => {
    res.send("<h1> Home Page </h1> <a href='/api/products'> Products </a>")
});

//MAPPING THROUGH THE ARRAY, DECONSTRUCT WHAT WE WANT AND RETURN ONLY THOSE VALUES
app.get("/api/products", (req, res) => {
    const newProducts = products.map(item => {
        const { id, name, image } = item;
        return { id, name, image }
    });
    res.json(newProducts)
});

app.get("/api/products/:id", (req, res) => {
    /*req = req is just one massive object
    req.params = this will get us the parameters such as id's
    */
    const { id } = req.params; //this is returned as a string, need to convert it to a number
    const newProduct = products.find(item => item.id === Number(id));
    if(!newProduct) {
        return res.status(404).send("<h1> PRODUCT DOES NOT EXIST </h1>")
    }
    return res.json(newProduct)
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    //URL : http://localhost:5000/api/products/1/reviews/12
    console.log(req.params); //{ productID: '1', reviewID: '12' }
    res.send("Hello World")
});

app.get("/api/v1/query", (req, res) => {
    //URL :  http://localhost:5000/api/v1/query?name=kirk&id=12
    //console.log(req.query); { name: 'kirk', id: '12' }
    const { customer, limit } = req.query
    //http://localhost:5000/api/v1/query?customer=a
    //http://localhost:5000/api/v1/query?limit=3
    let sortedList = [...products]

    if(customer) {
        sortedList = sortedList.filter(item => {
            return item.name.startsWith(customer)
        })
    }
    if(limit) {
        sortedList = sortedList.slice(0, Number(limit))
    }
    if(sortedList.length < 1 ) {
        return res.status(200).json({ status : "success", data : [] })
        /*
         {
             "status": "success",
             "data": []
         }
         */
    }
    return res.status(200).json(sortedList)
});

app.listen(5000, () => {
    console.log("Server running on PORT 5000")
});
