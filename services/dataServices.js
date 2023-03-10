const db = require('./db')


//Chairmanwords
const Chairmanwords = () =>{
    return db.Chairman.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                chairwords:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
}

const allEmployees = () =>{
    return db.Employee.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
}

//get all new careers
const careers = () =>{
    return db.Career.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                careers:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no career opportunity available now"
            }
        }
    })
}

// get all homes
const homes = () =>{
    return db.Home.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                homes:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"not available now"
            }
        }
    })
}


// get all Interior
const interiors = () =>{
    return db.Interior.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                interiors:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"not available now"
            }
        }
    })
}
//register
const register = (name,mail,pswd)=>{
    //check phone is in mongodb
     return db.User.findOne({
      mail
     }).then((result)=>{//promise is used because its a asynchronous function mongodb is using 27017port and server is using 3000
          console.log(result);
          if (result) {
            //phone/User already exist
            return{
              statusCode:401,
              message:'Account Already exist!'
            }
          }
          else{
            //to add new user in node
            const newUser = new db.User({
                name:name,
                mail:mail,
                pswd:pswd
              
            })
            // to save new user in mongodb
            newUser.save()
            return{
              statusCode:200,
              message:'Registration Successful'
            }
          }
     })
  }
  
  //login
const login = (mail,pswd)=>{
  console.log('inside login function body');
  //check acno and pswd in mongodb
  return db.User.findOne({
   mail,
   pswd
  }).then((result)=>{
    if (result) {
      return{
        statusCode:200,
        message:'login Successful',
        mail:mail,
        pswd:pswd,
        user:result
       
      }
    }
    else{
      return{
        statusCode:404,
        message:'Invalid Mail id or Password'
      }
    }
  })
  }
//fresherapply
const fresherapply = (name,phone,mail,position,qualification,resume,comment)=>{
    console.log('inside fresherapply function body');
    return db.Fresher.find().then((result)=>{
        if(result){
            const newFresher = new db.Fresher({ 
                name:name,
                phone:phone,
                mail:mail,
                position:position,
                qualification:qualification,
                resume:resume,
                comment:comment
            })
                newFresher.save()
            
            return{
                statusCode:200,
                message:'Registration Successfull'
            }
        }
        else{
            return{
                statusCode:404,
                message:"Registration failed"
            }
        }
    })
  }


module.exports = {
    Chairmanwords ,
    allEmployees,
    careers,
    homes,
    interiors,
    register,
    login,
    fresherapply
}