const { PrismaClient } = require("@prisma/client");
const superagent = require('superagent')
const prisma = new PrismaClient()
export default async function getUltraman(req,res){


    
  const { number }= req.query
   try{
        const ultramanId = await prisma.heroes.findUnique({
            where:{
                id: number
                
            } 
        })
res.send(JSON.stringify(ultramanId))
    }catch(error){
        res.send(error)
    }
}