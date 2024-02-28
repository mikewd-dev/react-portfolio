
import React from 'react';

const Layout = ({ children }) => {
  const backgroundStyle = {
    backgroundColor: '#12121',
    background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,102,121,0.528470763305322) 35%, rgba(0,212,255,1) 100%)',
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
