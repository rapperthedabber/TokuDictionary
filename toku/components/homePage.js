import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Link from 'next/link'
import Image from "next/image";
import getAll from '../Images/getAll.png'
import ultramanName from '../Images/Ultraman.png'
import ultramanJack from '../Images/ultramanZero.png'
import Era from '../Images/Era.png'
import {AiFillThunderbolt} from "react-icons/ai"


export default function homePage(){
    const data =['https://i.ytimg.com/vi/5p36Wyo9__U/maxresdefault.jpg', 
  'https://wallpapers.com/images/hd/ultraman-x-tv-series-icc1t2hgjes6ytmm.jpg', 'https://c4.wallpaperflare.com/wallpaper/592/96/962/ultraman-artwork-city-glass-building-hd-wallpaper-thumb.jpg',
'https://wallpapers.com/images/hd/ultraman-glowing-nexus-ef5f5wbpocl9m3c6.jpg']
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselInfiniteScroll = ()=>{
  if(currentIndex === data.length){
    return setCurrentIndex(0)
  }

 
return setCurrentIndex(currentIndex+1)}

useEffect(() =>{
  const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
  return () => clearInterval(interval)})
    return(
        
        
        <div>
       <div className="Icon">
           <h1 id="Api">UltramanAPI</h1><AiFillThunderbolt />
           </div>
            
       
            <nav>
                <navigator id = 'navAbout'><a href="#About">About</a></navigator>
                <navigator id = 'navAbout'><a href="#Documentation">Documentation</a></navigator>
               <a href="https://github.com/rapperthedabber/TokuDictionary">Github</a>
            </nav>
<div class="slider-thumb"></div>
<div className="Introduction">
            <h1 id="Intro">The Ultimate Ultraman Dictionary</h1>
            <Image src={ultramanJack} id="ultramanJack"></Image>
            </div>
            <div class="slider-thumb"></div>
            <h1 id="Documentation">Documentation</h1>
            <div className="divDoc">
            <h2 id="method">/api/getUltraman</h2>
            <h2 id="moreInfo">A get request that retrieves all Ultraman series from the Showa era to the Reiwa era. It consist of 
                the name, the era that the Ultraman was produced, image, and more information about the Ultraman
                such as the name of the human host and a brief summary of the series
            </h2>
            <Image src={getAll}></Image>
            </div>
            
            
            <div className="divDoc">
            <h2 id="method">/api/Ultraman/&#123; Ultraman Name &#125;</h2>
            <h2 id="moreInfo">A get request that retrieves a specific Ultraman. This is a dynamic URL in which
            users can type in the name of the Ultraman at the end of the URL to pull that specific info. For example, Ultraman Neos is 
           put at the end of the URL to retrieve all the data of Ultraman Neos
            </h2>
            <Image src={ultramanName}></Image>
            </div>
            <div className="divDoc">
            <h2 id="method">/api/getEra/&#123; name of Era &#125;</h2>
            <h2 id="moreInfo">A get request that retrieves all Ultraman produced in that era. Users can type in Showa, Heisei, Neo-Heisei, or Reiwa
            to get every Ultraman information produced in that era. For example, Ultraman Tiga is one of the datas pulled because Ultraman Tiga
            belongs to the Heisei era.
            </h2>
            <Image src={Era}></Image>
            </div>
                <h1 id="About">About</h1>
                <div className="divDoc">
                <h2>Ultraman API is a free API that allows users to retrieve all Ultraman shows from the original 
                    Ultraman in 1971 to Ultraman Blazar in 2023. The API allows users to retrieve the information on 
                    that specific series, image, and the era. The API is built with Next.js, MongoDB, and Prisma.
                </h2>
            </div>
            
        </div>
        
        
    )
    }