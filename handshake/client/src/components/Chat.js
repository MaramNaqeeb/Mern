import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
const Chat = () => {
    const [socket] = useState(() => io(':8000'));
    const [msg,setmsg]=useState('')
    useEffect(() => {
  
      console.log('Is this running?');
      socket.on('test', data => {console.log(data); setmsg(data)});
   
    //   return () => socket.disconnect(true);
    }, []);
  return (
   
    <div className="App">
      <h1> {msg}</h1>
    </div>
  );
}




export default Chat
