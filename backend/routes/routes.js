const e = require('express')
const express = require('express')
const fs = require('fs')
const { cloneUniformsGroups } = require('three')
const router = express.Router()
const sql = require('sqlite3').verbose()
// import {test} from '../actions/actions'
// import * as lib from '../actions/actions'
const test = require('../actions/actions')

let db = new sql.Database('/mnt/c/Users/mrloe/Callers.db')

router.post('/test',(req,res)=>{
    // console.log(req.body.form)
    const data = req.body.form
    const formattedMessage = data.message 
    const formattedName = data.name 
    const formattedEmail = data.email 
    const sdata = "New Message Recieved from : \n" + formattedName + "\nThe Message is From : " + formattedEmail + "\nTheir Message says : " + formattedMessage
    // sdata = JSON.stringify(sdata)
    const filepath = './test.txt'
    const formatted =  `\n${sdata}\n`
    fs.appendFile(filepath, formatted,(err)=>{
        if(err){
            console.log('messed up')
            res.send('messed up')
        }
        else{
            console.log('data written')
        }
    })

    db.run('INSERT INTO users(name,email,message) VALUES(?,?,?)',[formattedName,formattedEmail,formattedMessage],(err)=>{
        if (err){
            console.log(err.message)
        }
        console.log(`A new row has been inserted with rowid : ${this.lastID}`)
    })

    res.status(200).json({status:"success", message:"data inserted successfyullty"})

})

router.post('/action',(req,res)=>{test(req,res)})

module.exports=router
