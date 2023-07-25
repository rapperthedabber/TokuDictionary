
const { PrismaClient, Prisma } = require("@prisma/client")
const prisma = new PrismaClient()
const {user} = require('../data/user')
 
async function main() {
console.log('...seeding')
 await prisma.user.create({
    data: {
        name: "Allen",
        password: 'yoooALLLEN'
    }
    

})

await prisma.user.createMany({
    data: user,
})
console.log(user)
}
main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(()=> {
    prisma.$disconnect
})

main()