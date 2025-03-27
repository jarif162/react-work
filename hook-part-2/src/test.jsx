
import { useEffect, useState } from 'react'
import './App.css'

function Test() {
  const [count,setCount] = useState(0);
  const[text,setText] = useState("Random Name");

  useEffect(()=>{
     fetchApi();
    // document.title = `You clicked ${count} times`;
    
    // console.log(count);
  },[]);

  useEffect(()=>{
    console.log(count);
  },[count])

  function fetchApi(){
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((data)=>console.log(data));
    
  }

  //we can use useEffect for function call and  change state and api call

  

  function changeText(){
    setText("jarif");
  }

  return (
   <>
   <div>
     <h2>https://jsonplaceholder.typicode.com/posts</h2>
    
     <button onClick={()=>setCount(count+1)}>Count{count}</button> 
     {/* //in onClick we are calling setCount function and passing count+1 as argument */}
     <button onClick={changeText}>Click me</button>
     <h4>My name is {text}</h4>
   </div>
   </>
  )
}

export default App
