import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// const chatSocket = io('http://localhost:5000/chat'); // Connect to the 'chat' namespace

function LiveDataComponent() {
    const [messages, setMessages] = useState([]);
    const [chatMessage, setChatMessage] = useState('');
    useEffect(() => {
        const chatSocket = io('http://localhost:5000/chat'); // Connect to the 'chat' namespace
        // Chat namespace
        chatSocket.on('message', (msg) => {
            console.log('Cdata :', msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            // Clean up listeners on component unmount
            // chatSocket.emit('close'); // Emit 'close' event when leaving the page
            chatSocket.disconnect();
        };
    }, []);

    // const sendChatMessage = () => {
    //     chatSocket.emit('messag', chatMessage);
    //     setChatMessage('');
    // };

    return (
        <div>
            <div>
                <h2>Chat=  </h2>
                {/* <div>
                    <ul>
                    {messages[0].code}
                    </ul>
                </div> */}
                <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                />
                <button>Send Chat Message</button>
            </div>
        </div>
    );
}

export default LiveDataComponent;
