import React from 'react';
import image1 from './images/bg.jpeg';
import image2 from './images/bg.jpg';

const Test = () => {
  return (
    <div>
      <div>
        <img src={image2} style={{ zIndex: '5', position: 'absolute' }}></img>
        <img
          src={image2}
          style={{
            zIndex: '2',
            position: 'absolute',
            
            bottom: '0px',
            left: '0%',
          }}
        ></img>
      </div>
    </div>
  );
};

export default Test;
