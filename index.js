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

//hiring
server.get('/hiring',(req, res)=>{
    dataServices.hiring().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//getpwsd
server.get('/getpwsd',(req, res)=>{
    dataServices.getpwsd().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//changeadminpswd
server.put('/changeAdmin',(req,res)=>{
    console.log('inside changeAdmin Api');
    console.log(req.body);
    //asynchronous
    dataServices.changeAdmin(req.body.username,req.body.mail,req.body.pswd).then((result)=>{
        res.status(result.statusCode).json(result)//sending data through internet to client
    }) 
})

//post new job
server.post('/postcareer',(req,res)=>{
    console.log('inside new job Api');
    console.log(req.body);
    //asynchronous
    dataServices.postcareer(req.body.title,req.body.qualification,req.body.jobtype,req.body.experience,req.body.salary,req.body.location).then((result)=>{
        res.status(result.statusCode).json(result)//sending data through internet to client
    }) 
})

//delete career
server.delete('/delete-career/:id',(req, res)=>{
    dataServices.deletecareer(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//delete home
server.delete('/delete-home/:id',(req, res)=>{
    dataServices.deletehome(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//post new home
server.post('/postproperties',(req,res)=>{
    console.log('inside new job Api');
    console.log(req.body);
    //asynchronous
    dataServices.posthome(req.body.category,req.body.place,req.body.plan,req.body.video,req.body.price).then((result)=>{
        res.status(result.statusCode).json(result)//sending data through internet to client
    }) 
})

//update chairman profile
server.put('/updateChair',(req,res)=>{
    console.log('inside updateChair Api');
    console.log(req.body);
    //asynchronous
    dataServices.updateChair(req.body.thought,req.body.photo).then((result)=>{
        res.status(result.statusCode).json(result)//sending data through internet to client
    }) 
})

//getapproval
server.get('/approval',(req, res)=>{
    dataServices.getapproval().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


//approve new home
server.post('/approve-home',(req,res)=>{
    console.log('inside approve-home Api');
    console.log(req.body);
    //asynchronous
    dataServices.approvenewhome(req.body.category,req.body.place,req.body.plan,req.body.video,req.body.price).then((result)=>{
        res.status(result.statusCode).json(result)//sending data through internet to client
    }) 
})


//delete approvalhomerequest
server.delete('/deletefromapproval/:id',(req, res)=>{
    dataServices.deletefromapproval(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


//update employee profile
server.put('/indemployeeupdate',(req,res)=>{
    console.log('inside indemployeeupdate Api');
    console.log(req.body);
    //asynchronous
    dataServices.updateemployee(req.body.empid,req.body.empname,req.body.empphoto).then((result)=>{
        res.status(result.statusCode).json(result)//sending data through internet to client
    }) 
})