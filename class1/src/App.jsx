import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard, { Button, Card as CardComponent } from "./Profile"; //import Profile component from Profile.jsx
import Menu from "./Menu";
// import Profile from "./Profile";

function App() {
  const [count, setCount] = useState(0);
  const firstName = "Israt";
  const lastName = "Jahan";
  const cardStyle = {
    backgroundColor: "red",
    color: "white",
  };

  const menu = [
    { id: 1, name: "Home", price: "$100" },
    { id: 2, name: "About", price: "$200" },
    { id: 3, name: "Contact", price: "$300" },
  ];
  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} classNameName="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} classNameName="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div classNameName="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p classNameName="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    <div classNameName="react-box">
      <div>
        <h1 style={{ color: "red", backgroundColor: "yellow" }}>React</h1>
        <p style={cardStyle}>
          {firstName} {lastName}
        </p>
        {/* use {} for calling the variable dynamically */}
        <p>Hello World</p>
        <a href="#">Learn more</a>
      </div>
      {/* <Profile /> Profile component and function name should be capital */}
      {/* <Profile />
      <Profile /> */}
      {/* <Card />
      <Card /> */}
      {/* <Profile /> Profile component and function name should be capital
      <Profile />
      <Profile /> */}

      <ProfileCard name="Jarif" job="developer" />
      <Menu />

      <CardComponent />
      {/* //here use CardComponent for calling the Card function from Profile.jsx and Card as CardComponent is used to rename the Card function */}
      <Button />
      {menu.map((item) => (
        // <div key={item.id}>{item.name}</div> //key is used for unique identification to avoid warning
        <Menu menu={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;

// function Profile() {
//   return (
//     <>
//       <div>
//         <h2>Profile</h2>
//         <img
//           src="https://cdn.pixabay.com/photo/2024/07/14/14/42/woman-8894656_1280.jpg"
//           alt=""
//         />
//       </div>
//     </>
//   );
// }

// function Card() {
//   return (
//     <div>
//       <h2>card</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//       <button>learn more</button>
//     </div>
//   );
// }
