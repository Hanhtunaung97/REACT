import React, { useState } from 'react';
import Context from './Context';

const HideShowComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Hide & Show Component</h2>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4" onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <Context/> }
    </div>
  );
};

export default HideShowComponent;
