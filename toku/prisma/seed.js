
const { PrismaClient, Prisma } = require("@prisma/client")
const prisma = new PrismaClient()
// const {Ultraman} = require('../data/Ultraman')
// const { default: Ultraman } = require("@/pages/api/Ultraman/[ultraman]")
 
async function main() {
console.log('...seeding')
 const user = await prisma.info.create({
    data: {
        Introduction: "Introduction of Ultraman",
        Story: "Story of Ultraman",
    author: {
            connect: {
                id: '64c882a8fea7b2448a0c71b0'
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