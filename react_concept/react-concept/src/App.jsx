import { useEffect, useState } from 'react'
import './App.css'
import FormComponent from './FormComponent';
import List from './Array';
import Listt from './ArrayFilter';
import useFetchApi from './hocks/useFetchApi';


function App() {
  const[count, setCount] = useState({
    num:7,
    id:"dd",

  });
  const handleAdd = () => {
    // setCount(count + 1);
    // console.log(count); 
    // 10 cause react snappshot is not updated when it is called but it will visible in screen as 11
    // setCount(count + 4);
    // setCount(count + 2);
     //react count this cause react select the last value of the state
    // setCount((prev) => prev + 1);
     // this is the correct way to update the state and it catch the previous value and update the state
    // setCount(prev => prev+1);
  }

  // const handleSub = () => {
  //   setCount(count - 1);
  // }

  // useEffect(() => {
  //   setCount(10);
  //   //describe this useEffect will run only once when the component is mounted here mounted means when the component is loaded
  // })

  const changeNum=()=>{
    setCount(
      {
        ...count,//this is the spread operator which is used to copy the previous state
        num:100,
       
      }
    );
  }

  const {data, loading, error} =  useFetchApi("https://jsonplaceholder.typicode.com/posts");
  if(loading) return <p>Loading...</p>
  if(error) return <p>something went wrong</p>

  return (
    <>
     <div>
         {/* <button onClick={changeNum}>+</button>
        <span>{count.num}</span>
        
        <span>{count.id}</span>
         <button>-</button> */}
         {/* <FormComponent/>
         <List/>
         <Listt/> */}
         <div>
          {data?.map((post) => (
            <li key={post.id}>{post.title} </li>
          ))}
         </div>
        
     </div>
    </>
  )
}

export default App
