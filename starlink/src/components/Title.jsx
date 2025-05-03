import React from 'react';

function Title() {
  const titleStyle = {
    fontFamily: '"Roboto", sans-serif', // Cool font (you can replace it with another)
    fontSize: '3rem', // Large font size
    fontWeight: 'bold', // Bold text
    color: '#4CAF50', // Cool green color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Subtle shadow for a cool effect
    margin: '20px 0', // Add some spacing
  };

  return <h1 style={titleStyle}>Starlinks</h1>;
}

export default Title;