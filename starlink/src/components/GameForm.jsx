import React from 'react';

function GameForm() {
  const formStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Space between the two columns
    gap: '2rem', // Spacing between the left and right columns
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px', // Optional: Limit the form's width
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem', // Spacing between inputs in each column
    flex: 1, // Ensure both columns take equal space
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'center', // Center the button
  };

  return (
    <form style={formStyle}>
      {/* Left Column */}
      <div style={columnStyle}>
        <input type="text" placeholder="Actor 1" style={inputStyle} />
        <input type="text" placeholder="Actor 2" style={inputStyle} />
        <input type="text" placeholder="Actor 3" style={inputStyle} />
        <input type="text" placeholder="Actor 4" style={inputStyle} />
        <input type="text" placeholder="Actor 5" style={inputStyle} />
      </div>

      {/* Right Column */}
      <div style={columnStyle}>
        <input type="text" placeholder="Movie 1" style={inputStyle} />
        <input type="text" placeholder="Movie 2" style={inputStyle} />
        <input type="text" placeholder="Movie 3" style={inputStyle} />
        <input type="text" placeholder="Movie 4" style={inputStyle} />
      </div>

      {/* Submit Button */}
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

export default GameForm;