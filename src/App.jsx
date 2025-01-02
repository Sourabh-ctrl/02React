import React, { useEffect, useState } from 'react'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'


function App() {
  let heroData =[
    {text1 : "Dive into",text2 : "what you love"},
    {text1 : "indulge",text2 : "your passions"},
    {text1 : "Give in to",text2 : "your passions"}
  ]
   
  const [heroCount, setheroCount] = useState(0)      
  const [playStatus, setplayStatus] = useState(false)


  useEffect(() => {
    setInterval(() => {
      setheroCount((count)=>{return count===2?0:count+1})
    }, 3000);
   
  }, [])
  

  return (
    <div>
    <Background playStatus ={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero 
     heroData ={heroData[heroCount]}
     heroCount = {heroCount}
     setheroCount = {setheroCount}
     playStatus ={playStatus}
     setplayStatus = {setplayStatus}
    />
    </div>
  )
}

export default App