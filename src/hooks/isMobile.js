import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
    // Initialize state with true/false based on initial window width
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  
    useEffect(() => {
      // Define a function to update `isMobile` based on window width
      const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
  
      // Attach the event listener
      window.addEventListener('resize', handleResize);
  
      // Run handler once to set initial value
      handleResize();
  
      // Clean up event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);
  
    return isMobile;
  }
  
  export default useIsMobile;