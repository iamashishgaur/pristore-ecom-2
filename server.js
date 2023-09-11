const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const cors = require("cors");
const products = require("./data/products");
const productsRoute = require("./routes/productsRoute");
const usersRoute = require("./routes/UsersRoute");
const { errorHandler } = require("./middlewares/errorMiddleware");
const orderRoutes = require("./routes/orderRoute");

dotenv.config();
connectDb();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Data From Server");
});

app.use("/api", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.use(errorHandler);

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode On Port ${process.env.PORT} `
      .bgCyan.white
  );
});
