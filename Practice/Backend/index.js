const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/route");


const app = express();
const PORT = 5050;

app.use(express.json());
app.use(cors());

app.use("/", userRoute)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});