const express = require('express'); 
const morgan = require('morgan'); 
const app = express(); 
const layout = require('./views/layout')
const models = require('./models');
const wiki = require('./routes/wiki'); 
const user = require('./routes/user'); 

models.db.authenticate().
then(() => {
    console.log('connected');
})


app.use(morgan('dev')); 
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false})); 
app.use('/wiki', wiki); 
app.use('/user', user); 

app.get('/', (req, res) => { 
    res.redirect('/wiki');
}); 

const init = async() => {
    await models.db.sync();
    app.listen(1337, () => { 
        console.log('listening on port 1337'); 
    });
}

init();



module.exports = app; 