
import { PrismaClient } from "@prisma/client";

const primsa = new PrismaClient()
export default async function getUltraman(req, res){

    try{
        const ultramanId = await primsa.heroes.findUnique({
            where: {
                id: "64c06ed88b542e530b96371d "
            }
        })
        res.send(JSON.stringify(ultramanId))
    }catch(error){
        res.send(error)
    }

}