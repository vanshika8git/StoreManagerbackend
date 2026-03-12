require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");
const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api", productRoutes);

app.use(errorHandler);
app.listen(process.env.PORT, ()=>{
 console.log("Server running on port "+process.env.PORT);
});