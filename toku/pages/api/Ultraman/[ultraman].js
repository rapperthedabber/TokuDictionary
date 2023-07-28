const { PrismaClient } = require("@prisma/client");

const primsa = new PrismaClient()


export default async function Ultraman(req,res){
    
const {ultraman } = req.query
    try{
        const ultramanName = await primsa.heroes.findFirst({
            where: {
                name: ultraman
            }
        })
        res.send(JSON.stringify(ultramanName))
    }
    catch(error){
        res.send(error)
    }
}

