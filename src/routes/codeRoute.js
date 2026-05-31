const express = require("express")
const codeRouter = express.Router()
const {notes} = require("../controllers/code.controller")

codeRouter.post("/analyze",notes);

module.exports = codeRouter