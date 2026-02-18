import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitData(e){
    e.preventDefault()


    let obj = {
      name : name,
      email : email,
      password : password,
      userName : userName
    }

    setName('')
    setEmail('')
    setPassword('')
    setUserName('')

    console.log(obj)
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>UserName</label>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button onClick={submitData}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
