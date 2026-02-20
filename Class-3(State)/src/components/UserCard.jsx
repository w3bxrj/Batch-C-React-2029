// Task Overview:
// Create a User Card component that:
//     Accepts a user details object (name, email, age, location, picture) as prop.
//     Displays user details in a card format.
//     Conditionally renders "Adult" or "Minor" based on age.
//     Adds a button to toggle email visibility.

import React, { useState } from "react";

import { User1 } from "./user.js";

function UserCard() {
  

  const [showEmail , setShowEmail] = useState(false)

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "dodgerblue",
      }}
    >
      <img src={User1.picture.large} />

      <h2>
        Name : {User1.name.first} {User1.name.last}
      </h2>

      <button onClick={()=>setShowEmail(true)}>Show Email</button>
      <button onClick={()=>setShowEmail(false)}>Hide Email</button>

      <h3>Email : {showEmail && User1.email}</h3>

      <h4>
        {" "}
        Age : {User1.dob.age} ({User1.dob.age >= 18 ? "Adult" : "Minor"})
      </h4>
    </div>
  );
}

export default UserCard;
