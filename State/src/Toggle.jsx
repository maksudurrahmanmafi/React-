import { useState } from 'react';

export default function ShowHideText() {
  // 1. Initialize state to track visibility
  const [isVisible, setIsVisible] = useState(false);

  // 2. Toggle function to flip the boolean state
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>This is the text that can be shown or hidden.</p>}
    </div>
  );
}