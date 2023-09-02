const express = require('express')
const cors = require('cors')
const routesindex = require('./routes/index')


app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.use('/api',routesindex)

app.listen(5000,(req,res)=>{
    console.log("Server is running on port", 5000)
})