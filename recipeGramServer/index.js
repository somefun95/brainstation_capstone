require("dotenv").config();

const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const homepageRoutes = require("./routes/homepage");
const userpageRoutes = require("./routes/userpage");

app.use(cors());
app.use(express.json());

app.use("/homepage", homepageRoutes);
app.use("/userpage", userpageRoutes);

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});