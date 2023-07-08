import React, { useState } from "react";

const  Home = () => {
    const [RoomCode, setRoomCode] = useState('');
    return (
        <div>
            <label htmlFor="">Enter the Room code
            </label>
            <input type="text" required placeholder="Enter Room Code" value={roomCode}></input>
        </div>
    );
};

export default Home;