import React, { useState, useEffect } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      setHasError(true);
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    };

    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return props.children;
}

export default ErrorBoundary;