const express = require('express');
const app = express();
const cors = require("cors")
const {analyzeCode} = require("../src/services/ai.service")
const codeRouter = require("../src/routes/codeRoute")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "*",
    credentials: true
}))
app.use("/api/note",codeRouter)

app.get("/",(req,res) => {
    res.send("Server is started");
})

module.exports = app;