const express = require('express'); 
const router = express.Router(); 
const addPage = require('../views/addPage'); 
const models = require('../models/index')

const Page = models.Page;

router.get('/', async (req, res, next) => { 
    try{ 
        res.send('hello'); 
    } catch(err){ 
        next(err); 
    }
}); 

router.post('/', async (req, res, next) => { 
    const title = req.body.title;
    const content = req.body.content;
    const page = new Page({
        title : title,
        content: content
    });
    try {
        await page.save();
        res.redirect('/');
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



module.exports = router; 

