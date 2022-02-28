// RUN NODEMON SERVER.JS TO START THE SERVER

// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// CONFIGURATION
const PORT = process.env.PORT || 5005;
const app = express();
// const userRoutes = require("./controllers/userController");
const bcryptjs = require("bcryptjs");

// VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use("/users", userRoutes);

// ROUTES AND LANDING PAGE
app.use("/api/users", require("./routes/userRoutes"));

// WILDCARD ROUTE
// app.get("*", (req, res) => {
//   res.send("error404");
// });

// CONNECT TO DATABASE => LISTEN FOR PORT
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
