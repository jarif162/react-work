import { useState ,useEffect } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
    address:{
      street:'Tangail',
      postCode:'12345',
    }
  });

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });
// }, []);

  // function handleFirstNameChange(e) {
  //   setPerson({
  //     ...person, //this is the spread operator which is used to copy the previous state
  //     firstName:e.target.value,
  //   })
  // }

  // function handleLastNameChange(e) {
    
  //   setPerson({
  //     ...person,
  //     lastName :e.target.value,
  //   })
  // }

  // function handleEmailChange(e) {
   
  //   setPerson({
  //     ...person,
  //     email :e.target.value,
  //   })
  // }

  // function handleChange(e) {
  //   setPerson({
  //     ...person,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  function ChangeAddress(e){
    setPerson({
      ...person,
      address:{
        ...person.address,
        // [e.target.name]:e.target.value, if there use input field
        street:'Dhaka',
        postCode:'143',
      }
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          name="firstName"
          // onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          name='lastName'
          // onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          name='email'
          // onChange={handleChange}
        />
      </label>
      <p>
      {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      
      </p>

      <button onClick={ChangeAddress}>Change Address</button>
      <h1>  ({person.address.street})
      ({person.address.postCode})</h1>
    </>
  );
}
