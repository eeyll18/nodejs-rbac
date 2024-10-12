const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes');

const app = express();

dbConnect();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT,()=>{
    console.log("server listening on port:",PORT)
})
