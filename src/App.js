import "./App.css";
import React, {useState} from "react";

import Button from "./components/Button";


function App() {
  const [count, setCount]= useState(0);

  let incrementCounter =() => {
    setCount(count +1);

  }

  let decrementCounter =()=> {
    setCount(count-1);
  }

  let resetCounter =()=>{
    setCount(0);
  }


  return (
    <div className="App">
     <h1> REACT COUNTER APP</h1>
     <p id= "counter-value">{count}</p>

     <div class= "button">
     
     <Button id= " decrease-button" title = { "Decrease"} action = {decrementCounter}/>
 
     <Button  id= " increse-button "title ={ "Increase"} action = {incrementCounter}/>

     <Button  id= "reset-button" title = { "Reset"} action = {resetCounter}/>

     </div>

    </div>
  );

  };
export default App;
