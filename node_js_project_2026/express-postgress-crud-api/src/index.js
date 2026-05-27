const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db")

const app = express()
const port = process.env.port || 3000;

// middleware
app.use(express.json());
app.use(cors());

//routes

/// error handleing


// testing db connection
app.get("/", async(req,res) => {
    console.log("start");
    const result = await pool.query("SELECT current_databases()");
    console.log("end");
    res.send(`the database name is ${result.rows[0].current_database}`)
})

//server runing

app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})