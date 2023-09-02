const bodyParser = require('body-parser')
const express = require('express')

const router = express.Router()
router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send("Hello World")
})

router.post('/email',(req,res)=>{
    console.log(`Email: ${JSON.stringify(req.body)}`)
})

module.exports = router;