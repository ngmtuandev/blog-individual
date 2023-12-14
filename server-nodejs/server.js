const express = require("express");
const cors = require("cors");
const mongooseDBConnect = require("./config/connect_mongoose");
const INIT_ROUTES = require("./routes/index");
require("dotenv").config();

const app = express();
app.use(
  cors({
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 8888;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

mongooseDBConnect();
INIT_ROUTES(app);
app.listen(PORT, () => {
  console.log("server run on port", PORT);
});
