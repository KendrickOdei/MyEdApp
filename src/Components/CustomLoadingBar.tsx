import React, { useEffect, useState } from 'react';


const CustomLoadingBar: React.FC<{ duration: number }> = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Increment progress
      });
    }, duration / 10); // Adjust increment rate

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
  );
};

export default CustomLoadingBar;
