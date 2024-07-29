import React, { useEffect, useState } from 'react';


const LoadingBar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this duration to your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-bar ${isLoading ? 'loading' : 'loaded'}`}></div>
  );
};

export default LoadingBar;
