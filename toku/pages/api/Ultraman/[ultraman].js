const { PrismaClient } = require("@prisma/client");

const primsa = new PrismaClient()


export default async function Ultraman(req,res){
    
const {ultraman } = req.query
    try{
        const ultramanName = await primsa.ultraman.findFirst({
            where: {
                name: ultraman
            },
            include:{
                info: true
            }
        })
        res.send(JSON.stringify(ultramanName))
    }
    catch(error){
        res.send(error)
    }
}

