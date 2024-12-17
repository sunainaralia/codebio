"use client"
import React, { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export default function ChatBot() {
  useEffect(() => {
    // Initialize the Intercom Messenger
    Intercom({
      app_id: 'li4iksv3', // Replace with your Intercom App ID
      alignment: 'right', // Aligns the chat widget to the right
      hide_default_launcher: false, // Show default launcher
    });

    // Return a cleanup function to reset Intercom on unmount
    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return (
    <div>
      {/* <button
        onClick={() => window.Intercom('show')}
        className='fixed bottom-0 end-0'
        style={{
          padding: '10px 20px',
          background: '#393F62',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Chat with Us
      </button> */}
    </div>
  );
}
