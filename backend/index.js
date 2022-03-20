// START SERVER BY RUNNING  **NPM RUN SERVER**
// START  FRONT END BY RUNNING **NPM RUN CLIENT**
// START BOTH RUN **NPM RUN DEV**

// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");
const methodOverride = require("method-override");

// CONFIGURATION
const PORT = process.env.PORT || 5005;
const app = express();

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

// ROUTES AND LANDING PAGE
// app.use("/homepage", requrie("./routes/homepageRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

// WILDCARD ROUTE
app.use(errorHandler);

// CONNECT TO DATABASE => LISTEN FOR PORT
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
