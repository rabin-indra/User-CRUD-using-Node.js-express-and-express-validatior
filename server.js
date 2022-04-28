const bodyParser = require("body-parser");
const expressValidator = require('express-validator');
const express = require("express");
const app = express();

// parse json objects
app.use(express.json());

// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true}));


app.get("/", (req, res) => {
    res.json({message:"Welcome Home."});
});

const userRoutes = require("./src/routes/user.routes");


app.use('/v1', userRoutes);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`);
});

