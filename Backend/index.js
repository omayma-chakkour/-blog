const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PostRoutes = require("./routes/PostRoutes.js");
const PORT = 50002;

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//declaring routers
app.use("/posts", PostRoutes);

//connecting to mongoDb
const connectionUrl =
  "mongodb+srv://greatcoders:greatcoders123@mernstackapp.poyt8.mongodb.net/reactBlogApp?retryWrites=true&w=majority";
mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch((e) => {
    console.log("error", e.message);
  });
