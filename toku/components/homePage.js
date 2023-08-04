import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Link from 'next/link'
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
       
            <div className="carouselContainer">
            {data.map((item, index)=>{
        return <img src ={item} id = 'carouselItem' 
        style ={{transform: `translate(-${currentIndex * 100}%)`}}
        key = {index}/> 
      
      })}
            </div>
            
       
            <nav>
                <button id = 'navAbout'><a href="#About">About</a></button>
                <button id = 'navAbout'><a href="#Documentation">Documentation</a></button>
            </nav><div class="backwrap gradient">

</div>
<div class="slider-thumb"></div>
            <h1 id="Intro">The Ultimate Ultraman Dictionary on all Ultra Series</h1>
            <div class="slider-thumb"></div>
        </div>
        
        
    )
    }