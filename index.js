const express = require("express");
const dotenv =require("dotenv")
const connectDB = require('./config/config')
require("colors");
const morgan = require("morgan");
const app = express();
const cores = require("cors")

//config dotenv
dotenv.config();

app.use(cores())
//connection mongodb
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users" ,require("./routes/userRoute"));
app.use("/api/orders", require("./routes/orderRoute"));


app.get('/',(req,res) => {
    res.send('<h1>Hello from node server from nodemon port 8080</h1>')
})
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
      .bgMagenta.white
  );
});