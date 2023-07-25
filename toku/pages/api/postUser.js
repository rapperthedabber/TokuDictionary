import connect from "@/lib/mongodb";
import User from '../../Models/User'


export default async function postUser(req,res){
    await connect();

    const user = await User.create(req.body)
   
   try{
    if(user){
        res.redirect('/welcome/welcome')
    }else{
        res.json({"code": "User failed to create"})
    }
   } 
   catch(error){
    res.status(400).json({status: 'not able to create a new user'})
   }
    
}