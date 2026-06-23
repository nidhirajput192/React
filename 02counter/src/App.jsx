import { useState } from 'react'   // ye hooks import hua h
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {

  // hooks ko use kaise karte h wo padhenge ab.....
  let [counter, setcounter] = useState(15)
   
  //let counter = 15 ;

  const addvalue = () => {
   
 //counter= counter + 1;
 setcounter(counter +1 );
  }
  

  const removevalue = () => {
 //console.log("value removed", Math.random());
 //console.log("clicked", counter);
 //counter = counter - 1;
 if(counter>0){
  setcounter(counter - 1);
 }
  }
  

  return (
    <>
   <h1> NIDHI RAJPUT AND REACT LEARNING </h1>

<br />

   <h2>
   counter value  : {counter}
   </h2>

<br />  

<div className="container">
   <button
   onClick={addvalue}
   className='button'>Add Value {counter}</button>
   <br />
   <br />
    <button 
    onClick={removevalue}
    className='button'>Remove Value {counter}</button>
    <br />
    <br />
    <p>footer : {counter}</p>
    </div>
    </>
  )
}

export default App
