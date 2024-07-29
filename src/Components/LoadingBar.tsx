import React, { useEffect, useState } from 'react';
import './LoadingBar.css'; // Import the CSS for styling

const LoadingBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (progress < 100) {
      timer = setTimeout(() => {
        setProgress((prev) => prev + 25); // Adjust step size as needed
      }, 500); // Adjust timing for how fast the bar progresses
    }

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="loading-bar" style={{ transform: `scaleX(${progress / 100})` }}></div>
  );
};

export default LoadingBar;
