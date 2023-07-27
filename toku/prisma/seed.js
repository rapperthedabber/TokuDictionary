
const { PrismaClient, Prisma } = require("@prisma/client")
const prisma = new PrismaClient()
const {user} = require('../data/user')
 
async function main() {
console.log('...seeding')
 await prisma.user.createMany({
    data: [{
        name: "Josh",
        password: 'Joshua'
    },{
        name: 'Joe',
        password: 'Rogan'
    },
{name: "Horror",
password: "Game"}]
    

})

await prisma.heroes.createMany({
    data: [{
        name: "Ultraman",
        Era: "Showa",
        Image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Ultraman_Profile_Photo.jpg",
        Info: "The first Ultraman created by Tsuburaya. This became the model for future generations of other Ultraman series"
    },
{
    name: "Ultraseven",
    Era: "Showa",
    Image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Ultraseven_and_Narse%2C_Fly_to_the_Mountain_of_Evil.png/220px-Ultraseven_and_Narse%2C_Fly_to_the_Mountain_of_Evil.png",
    Info: "The second Ultraman in the Ultraman series. Follows Ultraseven taking on the identity of Dan Moroboshi to fight aliens and kaijus. This Ultraman is known for its Ultra-eye and Ultra-slugger that sits on his head"

},
{
     name: "Ultraman Jack",
     Era: "Showa",
     Image: "https://static.wikia.nocookie.net/ultra/images/9/98/Ultraman_Jack_data.png/revision/latest?cb=20180603040258",
     Info:"The third Ultraman in the Ultraman series. It is called Return of Ultraman, implying that it was doing a show on the original Ultraman until it was changed later to Jack after it was voted by fans. First time the Ultraman universe was introduced and featured cameo Ultras such as Ultraseven, Zoffy, and etc."
},
{
    name: "Ultraman Ace",
    Era: "Showa",
    Image: "https://static.wikia.nocookie.net/ultra/images/9/9e/Ultraman_Ace.png/revision/latest/scale-to-width-down/213?cb=20190924202144",
    Info:"During the attack of kaiju Veokron, Ultraman Ace gave power to Seiji Hokuto and Yuko Minami in order to become Ultraman Ace. They join TAC, a kaiju fighting unit, to take down Kaijus "


},
{
    name: "Ultraman Taro",
    Era: "Showa",
    Image: "https://static.wikia.nocookie.net/ultra/images/3/39/Taro_Info.png/revision/latest/scale-to-width-down/198?cb=20200217011355",
    Info: "A more kid-friendly Ultraman series and the son of Father of Ultra. Taro merged with Kotaro Higashi to protect earth "


},{
name: "Ultraman Leo",
Era: "Showa",
Image: "https://static.wikia.nocookie.net/ultra/images/7/70/Ultraman_Leo.png/revision/latest/scale-to-width-down/206?cb=20190924180839",
Info: "Escapes Planet L77 and was destroyed by Alien Magma. He chased it down to earth for revenge and encountered Ultraseven, who happened to be the captain of MAC. Ultraseven trains Leo rigorously to become one of the most powerful Ultraman that ever lived"
},
{
    name: "Ultraman Powered",
    Era: "Showa",
    Image: "https://static.wikia.nocookie.net/ultra/images/6/6a/Ultraman_Powered.png/revision/latest/scale-to-width-down/204?cb=20191224205306",
    Info: "A American produced Ultraman series since Tsuburaya decided to set their eyes on western market. It is known to be one of the worst ultraman series due to its bad fighting choreography, bad acting, and barely made it on live television"

},{
    name: "Ultraman Great",
    Era: "Showa",
    Image: "https://static.wikia.nocookie.net/ultra/images/9/91/Ultraman_Great.png/revision/latest/scale-to-width-down/201?cb=20191223222951",
    Info: "A much more successful Ultraman series that was produced in Australia. Follows a astronaut that survived an attack on mars and witnessed Ultraman Great defeating a kaiju. Then, Ultraman Great decided to merge with him to chase down alien Gudis "
},
{
    name: "Ultraman 80",
    Era: "Showa",
    Image: "https://static.wikia.nocookie.net/ultra/images/1/10/Ultraman_80.png/revision/latest/scale-to-width-down/251?cb=20210919010646",
    Info: "A teacher that is secretly Ultraman 80 that fights kaiju. The most common criticism for this series is that it stops midway about the protagonist's teacher life and focuses more on his fighting kaiju unit"
},{
    name: "Ultraman Zearth",
    Era: "Showa",
    Image: "https://static.wikia.nocookie.net/ultra/images/2/24/Ultraman%E2%98%86Zearth.png/revision/latest/scale-to-width-down/172?cb=20191224225529",
    Info:"A parody Ultraman in which follows a protagonist that works at a gas station that happens to be Ultraman Zearth and his coworkers that are secretly a kaiju fighting unit "
}
 
]
})
// await prisma.user.createMany({
  
// })
// console.log(user)
}
main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(()=> {
    prisma.$disconnect
})

main()