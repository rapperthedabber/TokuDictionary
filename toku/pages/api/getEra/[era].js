const { PrismaClient } = require("@prisma/client");
const superagent = require('superagent')
const prisma = new PrismaClient()
export default async function getEra(req,res){


    
  const { era }= req.query
   try{
        const ultramanEra = await prisma.ultraman.findMany({
           where: {
             Era: era
           },
           include: {
            info: true
           }
        })
res.send(JSON.stringify(ultramanEra))
    }catch(error){
        res.send(error)
    }
}