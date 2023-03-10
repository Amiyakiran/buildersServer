const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://amiya:serendipity@cluster0.mnwpqja.mongodb.net/realestate')


const Chairman = mongoose.model('Chairman', {
    thought:String,
    para:String,
    photo:String

})

const Career = mongoose.model('Career', {
    title:String,
    qualification:String,
    job_type:String,
    experience:String,
    salary:String,
    location:String


})
const Home = mongoose.model('Home', {
    
    id:String,
    category:String,
    place:String,
    plan:String,
    video:String,
    price:String
    

})

const Employee = mongoose.model('Employee', {
    id:String,
    empname:String,
    desg:String,
    dept:String,
    photo:String


})
const Interior = mongoose.model('Interior', {
    id:String,
    photo:String,
    area:String,
    title:String

})
//collection-users

const User = mongoose.model('User',{
   name:String,
   mail:String,
   pswd:String


})

//collection-freshers

const Fresher = mongoose.model('Fresher',{
    name:String,
    phone:String,
    mail:String,
    position:String,
    qualification:String,
    resume:String,
    comment:String
 
 })
 
module.exports={
    Chairman,
    Career,
    Home,
    Employee,
    Interior,
    User,
    Fresher
}