const express = require('express');
const router = express.Router()

router.get('/' , (req,res)=>{
    obj = {
        text : 'This is Note.js'
    }
    res.send(obj);
})

module.exports = router;