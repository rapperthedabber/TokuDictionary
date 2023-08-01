
const { PrismaClient, Prisma } = require("@prisma/client")
const prisma = new PrismaClient()
// const {Ultraman} = require('../data/Ultraman')
// const { default: Ultraman } = require("@/pages/api/Ultraman/[ultraman]")
 
async function main() {
console.log('...seeding')
 const user = await prisma.ultraman.create({
  data:  {
    name: "UlraNine",
    Era: "Showa",
    Image: "Showa Image",
    info: {
        create: {
            Introduction: "introduction",
            Story: "Show Image"
        }
    }
  }
 })
console.log(user)
}
// await prisma.user.createMany({
  
// })


main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(()=> {
    prisma.$disconnect
})

main()