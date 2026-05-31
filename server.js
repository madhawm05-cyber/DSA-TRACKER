require("dotenv").config();
const app = require("./src/index");
const connectToDB = require("./src/config/mongoDB")

connectToDB();
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log("Service is running on port", port);
})