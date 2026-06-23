import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'


function App() {
  const [Count, setCount]= useState(0)
  let myObj ={
    username : "nidhi",
    age: 21

  }
    return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Hello Nidhi
      </h1>

 
  <Card username ="Nidhi"/> 
  <br />
  <Card username="Samay"/> 
  <br />
  <Card username="Rajput"/> 


</>

  );
}

export default App







