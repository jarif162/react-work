import { useState } from "react";

function App() {
//  let index = 0;

 
 const [like, setLike] = useState(false);


function handleLike(){
  // setLike(!like);
  setLike(l=>!l);
  console.log(like);
}
 
function closePopup(){
  setLike(false);
  console.log(like);
}

  return (
    <>
   <section>
      <div >
        <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="demo" height={200} width={200} />
      </div>

      <div>
        <button onClick={handleLike} style={{color: like==true ? "" : "green"}} >
          {like==true ? "Liked" : "like"}
        </button>
      </div>
      {/* {like? <Popup /> : ""} */}
      {like&& (
         <div className="popup">
         <h2>Hello react</h2>
         <button onClick={closePopup}>close popup</button>
       </div>
      )}
      
    <LearnState />
   </section>
  
   
   
    </>
  )
}

export default App;


import React from 'react'

function LearnState() {
  
const [count, setCount] = useState(10);
 function handleClick() {
  console.log("ok");
  // index=index + 1;
  // console.log(index);
  setCount((p)=>p+8);
 }

 function handleDel() {
  console.log("ok");
  // index=index + 1;
  // console.log(index);
  setCount(count - 1);
 }

  return (
    <section>
    <div className='main' >
      value: {count}
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleDel}>Decrease</button>
    </div>
 </section>
  )
}

function Popup(){
  return(
    <>
    <div className="popup">
      <h2>Hello react</h2>
      {/* <button onClick={closePopup}>close popup</button> */}
    </div>
    
    </>
  )
}



