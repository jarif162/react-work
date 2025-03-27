//rfc ----> create functional component
// import React from 'react'

// export default function Profile() {
//   return (
//     <div>Profile</div>
//   )
// }

// rfce ----> create functional component with export default
// import React from "react";
function ProfileCard(props) {
  console.log("data:", props.name, props.job);
  const { name, job } = props; //use destructuring for calling the props
  const person = {
    name: "jarif",
    age: 24,
    job: "developer",
    theme: {
      color: "red",
      fontSize: "20px",
    },
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}
export { ProfileCard };

function Profile() {
  const person = {
    name: "jarif",
    age: 24,
    job: "developer",
    theme: {
      color: "red",
      fontSize: "20px",
    },
  };
  return (
    <>
      <div>
        <h2>{person.name}</h2>
        <img
          src="https://cdn.pixabay.com/photo/2024/07/14/14/42/woman-8894656_1280.jpg"
          alt=""
        />
      </div>
    </>
  );
}

export default Profile; //here use default for calling the function in another file and use export for calling the function in the same file and component name can be anything but function name should be capital

export function Card() {
  return (
    <div>
      <h2>card</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>learn more</button>
    </div>
  );
}

// export { Profile, Card }; //here use export for calling the function in the same file and component name can be anything but function name should be capital

export function Button() {
  return <button>learn more</button>;
}

// export { Card, Button };
//here use export for calling the function in the same file and component name can be anything but function name should be capital
