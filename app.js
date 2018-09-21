const express = require('express'); 
const morgan = require('morgan'); 
const app = express(); 
const layout = require('./views/layout')

app.use(morgan('dev')); 
app.use(express.static(__dirname + "/public")); 
app.use(express.urlencoded({extended: false})); 

app.get('/', (req, res) => { 

    res.send(layout('')); 
}); 

app.listen(1337, () => { 
    console.log('listening on port 1337'); 
})


module.exports = app; 