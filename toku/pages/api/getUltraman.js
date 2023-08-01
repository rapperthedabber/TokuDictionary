const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

export default async function getUltraman(req, res){
    try{
        const ultraman = await prisma.ultraman.findMany({
            select:{
                id: true,
                name: true,
                Era: true,
                info: true
            }
        })
        res.send(JSON.stringify(ultraman))
 
    

    }
    catch(error){
res.send(error)
    }
}