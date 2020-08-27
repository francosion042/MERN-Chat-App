import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const [name, setName] = useState(" ");
  const [room, setRoom] = useState(" ");
  return (
    <div>
      <h1>Join Chat</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="room">Room</label>
        <input
          type="text"
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}>
        <button>Join</button>
      </Link>
    </div>
  );
}
