const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const universityRoute = require("./routes/universityRoute");
const courseRoute = require("./routes/courseRoute");
const classRoute = require("./routes/classRoute");
const generalRoute = require("./routes/generalRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// cors:
app.options("*", cors());

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connected to MongoDB`))
  .catch((err) => console.error(err));

app.use(userRoute, universityRoute, courseRoute, classRoute);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
