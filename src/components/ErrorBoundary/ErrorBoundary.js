import  { useState, useEffect } from 'react';
import NotFound from '../NotFound';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    // You can render any custom fallback UI
    
    <NotFound/>
    return "";
  }

  return props.children;
}

export default ErrorBoundary;