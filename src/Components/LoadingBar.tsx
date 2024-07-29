import React, { useEffect, useState } from 'react';


const LoadingBar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`loading-bar ${isLoading ? 'loading' : 'loaded'}`}></div>
  );
};

export default LoadingBar;
