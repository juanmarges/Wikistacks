const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const  models = require('./models');
const app = express();

models.db.authenticate().
then(()=> {
    console.log('Living in the database!');
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.send(layout(' '));
})

const main = async() => {
    await models.db.sync({force: true});
    
    const PORT = 1337;

    app.listen(PORT, () =>{
        console.log(`Listening on port ${PORT}`);
    });
}

main();