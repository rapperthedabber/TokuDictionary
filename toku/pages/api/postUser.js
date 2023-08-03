import connect from "@/lib/mongodb";
import user from '../../Models/User'


export default async function postUser(req,res){
    await connect();

    const User = await user.create(req.body)
   
   try{
    if(User){
        res.redirect('/welcome/welcome')
    }else{
        res.json({"code": "User failed to create"})
    }
   } 
   catch(error){
    res.status(400).json({status: 'not able to create a new user'})
   }
    
}