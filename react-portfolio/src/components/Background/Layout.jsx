
import React from 'react';

const Layout = ({ children }) => {
  const backgroundStyle = {
    // Your background styles here
    backgroundColor: 'rgb(2,0,36)',
    background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,102,121,0.528470763305322) 35%, rgba(0,212,255,1) 100%)',
    // backgroundImage: 'url("/path/to/your/background-image.jpg")',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the background covers the entire viewport
  };

  return (
    <div style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Layout;
