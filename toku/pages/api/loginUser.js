
import User from '../../Models/User'
import connect from '@/lib/mongodb'

export default async function loginUser(req,res){
    await connect()
    const {username, password} = req.body
    const user = await User.findOne({username,password})
        if(!user){
            return res.json({status: 'Not able to find user'})
        }else{
            res.redirect('/welcome/welcome')
            
        }

 
   
}