import { useEffect, useState } from "react";

export const useScreenSizeDown = (breakpoint: number) => {
  const [isDown, setIsDown] = useState<boolean>(false);

  const checkWindow = () => {
    if (window.innerWidth < breakpoint) {
      setIsDown(true);
    } else {
      setIsDown(false);
    }
  };

  useEffect(() => {
    checkWindow();
    window.addEventListener("resize", checkWindow);

    return () => window.removeEventListener("resize", checkWindow);
  }, []);

  return isDown;
};
