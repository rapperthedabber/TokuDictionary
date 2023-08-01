
const { PrismaClient, Prisma } = require("@prisma/client")
const prisma = new PrismaClient()
// const {Ultraman} = require('../data/Ultraman')
// const { default: Ultraman } = require("@/pages/api/Ultraman/[ultraman]")
 
async function main() {
console.log('...seeding')
 const user = await prisma.info.create({
    data: {
        Introduction: "It was the introduction of this iconic character that had popularized the Ultraman Series in Japan and the world, arguably being the face of the franchise as a whole.",
        Story: "Ultraman (ウルトラマン, Urutoraman) is an alien from a place called the Land of Light in Nebula M78, who chased the monster Bemular to Planet Earth, and merged with Shin Hayata during his tenure there. He is the first Ultra to visit Earth and defended the planet against Kaiju until he was recalled after his battle with Zetton. Ultraman was given his title by his human host. Initially a basic Ultra Warrior, Ultraman arrived on Earth while pursuing an escapee of the Monster Graveyard; Bemular. In his pursuit, he accidentally collided with Shin Hayata, an officer of the Science Patrol, who was on a scouting mission in his jet. Hayata was killed in the same crash, but out of remorse, Ultraman gave Hayata his own life, and merged their bodies, to keep him alive. After Bemular was destroyed, Ultraman stayed to protect Earth from more threats, such as ancient monsters and alien invaders. Some memorable mentions are his encounters with the Baltan, his close match with Alien Mefilas, and his defeat at the deadly monster Gomora. However, his time on Earth came to a close after his battle with Zetton. His Color Timer was damaged in his fight with Zetton, in which his enemy used a weapon that Ultraman had not expected--one specifically targeting the Ultra Warrior's warning light. Zetton was left to be destroyed by the Science Patrol. Ultraman was retrieved by his superior, Zoffy, and was taken back to their home world.",
      author: {
        connect: {
            id: "64c8b3bbc3572d682bc40b89"
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