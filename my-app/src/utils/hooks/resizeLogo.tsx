import { useState, useEffect } from "react";

export function useLogoMobile(breakpoint: number = 768): boolean {
  const [isLogoMobile, setIsLogoMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    function handleResize() {
      setIsLogoMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isLogoMobile;
}
