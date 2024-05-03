// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx"
// // import RFIDDisplay from './RFIDDisplay'; 
// import TagDisplay from "./TagDisplay.jsx";

// function App() {

//   return (
//     <>
//       <Header />
//       <TagDisplay />
//       <Footer />
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const serverUrl = 'http://localhost:2727'; // Change the port to match your server's port

function App() {
  const [tagData, setTagData] = useState('');

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = socketIOClient(serverUrl);

    // Listen for 'tagData' events from the server
    socket.on('tagData', receivedData => {
      // Update the tagData state with the received tag data
      setTagData(receivedData);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>RFID Tag Value</h1>
      <h1>{tagData}</h1>
    </div>
  );
}

export default App;



