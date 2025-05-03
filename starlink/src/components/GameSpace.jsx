import React from 'react';
import Title from './Title'; // Import the Title component
import GameForm from './GameForm'; // Import the GameForm component

function GameSpace() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height to center vertically
  };

  const style = {
    width: '100%', // Full width
    height: '90vh', // Adjust height to fit most of the phone screen
    backgroundColor: '#f0f0f0', // Light gray background
    border: '2px solid #ccc', // Optional border
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <Title /> {/* Add the Title component */}
      <div style={style}>
        <GameForm /> {/* Add the GameForm component */}
      </div>
    </div>
  );
}

export default GameSpace;