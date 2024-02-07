
import React from 'react';

const Layout = ({ children }) => {
  const backgroundStyle = {
    // Your background styles here
    backgroundColor: '#12121',
    background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,102,121,0.528470763305322) 35%, rgba(0,212,255,1) 100%)',
    background: 'rgb(30,36,0)',
    background: '-moz-radial-gradient(circle, rgba(30,36,0,1) 0%, rgba(89,92,93,0.528470763305322) 57%, rgba(128,128,128,1) 100%)',
    background: '-webkit-radial-gradient(circle, rgba(30,36,0,1) 0%, rgba(89,92,93,0.528470763305322) 57%, rgba(128,128,128,1) 100%)',
    background: 'radial-gradient(circle, rgba(30,36,0,1) 0%, rgba(89,92,93,0.528470763305322) 57%, rgba(128,128,128,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e2400",endColorstr="#808080",GradientType=1)',
    // backgroundImage: 'url("/path/to/your/background-image.jpg")',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Layout;
