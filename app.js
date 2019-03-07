const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.send("Hello World!");
})

const PORT = 1337;

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});