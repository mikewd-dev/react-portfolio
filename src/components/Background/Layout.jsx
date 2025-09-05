
import React from 'react';

const Layout = ({ children }) => {
  const backgroundStyle = {
    backgroundColor: '#12121',
    background: 'radial-gradient(circle, #ffffff, #f0f0f0, #e0e0e0);',
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
