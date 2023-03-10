//import express
const express = require('express')

//create server 
const server = express()
const dataServices=  require('./services/dataServices')

//create cors
const cors = require('cors')


server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())

//set port
server.listen(8000,  ()=>{
    console.log('EMS server started at 8000');
})




//chairmans words
server.get('/chairmans',(req, res)=>{
    dataServices.Chairmanwords().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//all_employees
server.get('/all_employees',(req, res)=>{
    dataServices.allEmployees().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//careers
server.get('/careers',(req, res)=>{
    dataServices.careers().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get all homes
server.get('/homes',(req, res)=>{
    dataServices.homes().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//to get all employee
server.get('/homes',(req, res)=>{
    dataServices.homes().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//to get all Interiors
server.get('/interiors',(req, res)=>{
    dataServices.interiors().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//register api
server.post('/register', (req,res)=>{
    console.log('inside the register request');
    console.log(req.body);
    dataServices.register(req.body.name,req.body.mail,req.body.pswd).then((result)=>{
        res.status(result.statusCode).json(result)//sending data 
    })
})

//api for login
server.post('/login', (req,res)=>{
    console.log('inside the login request');
    console.log(req.body);
    dataServices.login(req.body.mail,req.body.pswd).then((result)=>{
        res.status(result.statusCode).json(result)//sending data 
    })
})
//fresher api
server.post('/apply', (req,res)=>{
    console.log('inside the apply request');
    console.log(req.body);
   dataServices.fresherapply(req.body.name,req.body.phone,req.body.mail,req.body.position,req.body.qualification,req.body.resume,req.body.comment).then((result)=>{
    res.status(result.statusCode).json(result)//sending data 
   })
})