import React from 'react';

export default function Header() {
    const months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Webnesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let d = new Date();

    return (
      <div className='Header'>
          <h1>To-do App</h1>
          <h2>{days[d.getDay()]}, {months[d.getMonth()]}, {d.getUTCDate() + ', ' + d.getFullYear()}</h2>
      </div>
  )
  ;
}
