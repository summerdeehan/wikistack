const express = require('express'); 
const router = express.Router(); 
const addPage = require('../views/addPage'); 

module.exports = router; 

router.get('/', async (req, res, next) => { 
    try{ 
        res.send('hello'); 
    } catch(err){ 
        next(err); 
    }
}); 

router.post('/', async (req, res, next) => { 
    try { 

    } catch(err){ 
        next(err); 
    }
}); 

router.get('/add', async (req, res, next) => { 
    try { 
        res.send(addPage());
    } catch(err){ 
        next(err); 
    }
}); 