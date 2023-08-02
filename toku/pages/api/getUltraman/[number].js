const { PrismaClient } = require("@prisma/client");
const superagent = require('superagent')
const prisma = new PrismaClient()
export default async function getUltraman(req,res){


    
  const { number }= req.query
   try{
        const ultramanId = await prisma.ultraman.findUnique({
            where:{
                id: number
                
            }, 
            include: {
                info: true
            }
        })
res.send(JSON.stringify(ultramanId))
    }catch(error){
        res.send(error)
    }
}