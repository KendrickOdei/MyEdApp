import React, { useEffect, useState } from 'react';


const LoadingBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (progress < 100) {
        setProgress((prev) => prev + 25); // Adjust step size
      }
    };

    const timer = setInterval(updateProgress, 500); // Adjust interval for progress speed

    return () => clearInterval(timer);
  }, [progress]);

  // Hide loading bar when progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setProgress(0), 500); // Hide after reaching 100%
    }
  }, [progress]);

  return (
    <div className={`loading-bar ${progress >= 100 ? 'loaded' : 'loading'}`} style={{ transform: `scaleX(${progress / 100})` }}></div>
  );
};

export default LoadingBar;
