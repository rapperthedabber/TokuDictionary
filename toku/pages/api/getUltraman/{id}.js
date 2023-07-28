const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
export default async function getUltraman(req,res){
  const query = req.body
    try{
        const ultramanId = await prisma.heroes.findUnique({
            where:{
                id: "64c06ed88b542e530b96371b"
                
            } 
        })
res.send(JSON.stringify(ultramanId))
    }catch(error){
        res.send(error)
    }
}