import { useState, useEffect, useCallback, useRef } from "react";
import { dateParser } from "@/features/todo/utils/dateParser";

const useCurrentTime = (): string => {
  const [time, setTime] = useState('INVALID TIME INFO');
  const timer = useRef<NodeJS.Timeout>();

  const startTimer = useCallback(() => {
    if (!window) return;
    timer.current = setInterval(() => {
      const [date, time] = dateParser(new Date());
      setTime(`${date}${time}`);
    }, 1000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    }
  }, []);

  return time;
}

export default useCurrentTime;
