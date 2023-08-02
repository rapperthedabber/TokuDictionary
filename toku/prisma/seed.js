
const { PrismaClient, Prisma } = require("@prisma/client")
const prisma = new PrismaClient()
// const {Ultraman} = require('../data/Ultraman')
// const { default: Ultraman } = require("@/pages/api/Ultraman/[ultraman]")
 
async function main() {
console.log('...seeding')
 const user = await prisma.ultraman.create({
  data:  {
    name: "Ultraman Blazar",
    Era: "Reiwa",
    Image: "https://static.wikia.nocookie.net/ultra/images/2/20/UltramanBlazar.png/revision/latest/scale-to-width-down/222?cb=20230421040757",
    info: {
        create: [{
            Introduction: "Ultraman Blazar (ウルトラマンブレーザー, Urutoraman Burēzā) is the titular hero of the series Ultraman Blazar.[4][5] He was first known as a mysterious being sighted by Earth's astronauts, becoming an urban legend among them, before he bonded with Gento Hiruma, who later became captain of the newly formed SKaRD.",
            Story: "The entity that had been codenamed Ultraman had been sighted by astronauts for decades prior to the series. The Ultraman somehow bonded with Gento Hiruma, a captain within the GGF, and emerged on the Earth for the first time during Bazanga's invasion. First Wave The Giant of Light received his name, Ultraman Blazar, when Gento came up with it during a meeting with Retsu Haruno after remembering an experience in which he saw the giant of light within a blazar. While the GGF decided to take up the name, Haruno was skeptical about Blazar's appearance and tasked Gento and his new team, SKaRD, with not only observing and analysing Blazar, but also using Earth Garon to defeat a Kaiju before Blazar could. "
    }]
  }}
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