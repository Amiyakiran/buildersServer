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
  //hiring
  const hiring = () =>{
    return db.Fresher.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                hiring:result
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
//admingetpwsd
const getpwsd = () =>{
    return db.User.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                userAdmin:result
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

//changeAdmin
const changeAdmin = (username,mail,pswd)=>{
    return db.User.findOneAndUpdate({"name":username},{"mail":mail,"pswd":pswd},{returnOriginal:false}).then((result)=>{
      if(result){
        result.save()
        console.log(result);
         return db.User.find().then(
          (result)=>{
              if(result){
                      return{
                          statusCode:200,
                          userAdmin:result,
                          message:'updated Successfully'
                      }
              }
              else{
                  return{
                      statusCode:404,
                      message:"No Guest"
                  } 
              }
          }
         )
         
           /*   return{
          statusCode:200,
          message:'successfully updated'
        } */
      }
      else{
        return{
          statusCode:404,
          message:'Not Possible'
        }
      }
    })
  }
  

  //postcareer
const postcareer = (title,qualification,jobtype,experience,salary,location)=>{
    console.log('inside postcareer function body');
    return db.Career.find().then((result)=>{
        if(result){
            const newCareer = new db.Career({ 
                    title:title,
                    qualification:qualification,
                    job_type:jobtype,
                    experience:experience,
                    salary:salary,
                    location:location,
                    
            })
                newCareer.save()

                return db.Career.find().then((result)=>{
                    if(result){
                        return{
                            statusCode:200,
                            careers:result,
                            message:"New Job Added Successfully"
                        }
                    }
                    else{
                        return{
                            statusCode:404,
                            message:"no career opportunity available now"
                        }
                    }
                })
            
           /*  return{
                statusCode:200,
                message:'Registration Successfull'
            } */
        }
        else{
            return{
                statusCode:404,
                message:"Addition failed"
            }
        }
    })
  }
  

//delete career
const deletecareer = (id)=>{
    return db.Career.deleteOne({
        _id:id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"job deleted successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data available"
            }
        }
    })
}

//delete home
const deletehome = (id)=>{
    return db.Home.deleteOne({
        _id:id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Home deleted successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data available"
            }
        }
    })
}

//posthome
const posthome = ( category,place,plan,video,price)=>{
    console.log('inside posthome function body');
    return db.Project.find().then((result)=>{
        if(result){
            const newProject = new db.Project({ 
                id:'',
                category:category,
                place:place,
                plan:plan,
                video:video,
                price:price
          
                    
            })
               newProject.save()

               /*  return db.Home.find().then((result)=>{
                    if(result){ */
                        return{
                            statusCode:200,
                            message:"New project Added for approval"
                        }
                    /*  }
                    else{
                        return{
                            statusCode:404,
                            message:"no Home  available to add now"
                        }
                    } 
                })
             */
          
        }
        else{
            return{
                statusCode:404,
                message:"Addition failed"
            }
        }
    })
  }
  

  //changeAdmin
const updateChair = (thought,photo)=>{
    return db.Chairman.findOneAndUpdate({"_id":"6403832ca32d2cd8f60cf80a"},{"thought":thought,"photo":photo},{returnOriginal:false}).then((result)=>{
      if(result){
        result.save()
        console.log(result);
        return db.Chairman.find().then((result)=>{
            if(result){
                return{
                    statusCode:200,
                    chairwords:result,
                    message:"updated successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"no data is available"
                }
            }
        })
         
           /*   return{
          statusCode:200,
          message:'successfully updated'
        } */
      }
      else{
        return{
          statusCode:404,
          message:'Not Possible'
        }
      }
    })
  }
  

  //getapproval
const getapproval = () =>{
    return db.Project.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                approval:result
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



//posthome
const approvenewhome = ( category,place,plan,video,price)=>{
    console.log('inside approvenewhome function body');
    return db.Home.find().then((result)=>{
        if(result){
            const newHome = new db.Home({ 
                id:'',
                category:category,
                place:place,
                plan:plan,
                video:video,
                price:price
          
                    
            })
               newHome.save()

               /*  return db.Home.find().then((result)=>{
                    if(result){ */
                        return{
                            statusCode:200,
                            message:"New project approved"
                        }
                    /*  }
                    else{
                        return{
                            statusCode:404,
                            message:"no Home  available to add now"
                        }
                    } 
                })
             */
          
        }
        else{
            return{
                statusCode:404,
                message:"Approval failed"
            }
        }
    })
  }
  

  //delete home
const deletefromapproval = (id)=>{
    return db.Project.deleteOne({
        _id:id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Home deleted successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data available"
            }
        }
    })
}



  //updateemployee
  const updateemployee = (empid,empname,empphoto)=>{
    return db.Employee.findOneAndUpdate({"_id":empid},{"empname":empname,"photo":empphoto},{returnOriginal:false}).then((result)=>{
      if(result){
        result.save()
        console.log(result);
        return db.Employee.find().then((result)=>{
            if(result){
                return{
                    statusCode:200,
                    chairwords:result,
                    message:"updated successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"no data is available"
                }
            }
        })
         
           /*   return{
          statusCode:200,
          message:'successfully updated'
        } */
      }
      else{
        return{
          statusCode:404,
          message:'Not Possible'
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
    fresherapply,
    hiring,
    getpwsd,
    changeAdmin,
    postcareer,
    deletecareer,
    deletehome,
    posthome,
    updateChair,
    getapproval,
    approvenewhome,
    deletefromapproval,
    updateemployee
}