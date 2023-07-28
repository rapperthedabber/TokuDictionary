const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

export default async function getUltraman(req, res){
    try{
        const ultraman = await prisma.heroes.findMany({
            select:{
                id: true,
                name: true,
                Era: true,
                Info: true
            }
        })
        res.send(JSON.stringify(ultraman))
 
    

    }
    catch(error){
res.send(error)
    }
}