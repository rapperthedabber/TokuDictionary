
import user from '../../Models/User'
import connect from '@/lib/mongodb'

export default async function loginUser(req,res){
    await connect()
    const {username, password} = req.body
    const User = await user.findOne({username,password})
        if(!User){
            return res.json({status: 'Not able to find user'})
        }else{
            res.redirect('/welcome/welcome')
            
        }

 
   
}