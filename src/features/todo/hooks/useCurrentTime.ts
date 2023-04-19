import { useState, useEffect } from "react";

const useCurrentTime = (): string => {
  const [time, currentTime] = useState('INVALID TIME INFO');

  useEffect(() => {
    if (window !== undefined) {
      const date = new Date();
      currentTime(date.toString());
    }
  }, []);

  return time;
}

export default useCurrentTime;
