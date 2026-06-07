const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Innovatec Hub API is running 🚀");
});

// Products API
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Kitchen Knife Set", price: 5000 },
    { id: 2, name: "Rice Cooker", price: 15000 },
    { id: 3, name: "Storage Box Set", price: 8000 }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
