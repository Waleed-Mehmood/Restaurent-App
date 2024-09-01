const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Enable CORS
app.use(cors({
    origin: process.env.FRONTEND_URL, // Vercel frontend URL
    credentials: true
}));

// Import the router files
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Use the routers
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

app.get("/", (req,res)=>{
    res.json("Restaurent App")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

