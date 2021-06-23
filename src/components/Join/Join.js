import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Join.css"

const Join=()=>{
  const [name,setName]=useState("");
  const[room,setRoom]=useState("");

function Name(event){
  setName(event.target.value)
}
function Room(event){
  setRoom(event.target.value)
}

  return(
    <div className="joinOuterContainer">
    <div className="joinInnerContainer">
    <h1 className="heading">Join</h1>
    <div><input placeholder="Name" className="joinInput" type="text" onChange={Name} /></div>
    <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={Room} /></div>
    <Link onClick={event=>(!name||!room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
    <button className="button mt-20" type="submit">Sign In</button>
    </Link>
    </div>
    </div>
  )
}

export default Join;
