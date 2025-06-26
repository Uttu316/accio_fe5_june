import { useState } from "react";
import styles from "./timer.module.css";

let intervalId;
const Timer = () => {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPuased] = useState(false);

  const onStart = () => {
    setTime((t) => t + 1);
    intervalId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };
  const onPause = () => {
    clearInterval(intervalId);

    setIsPuased(true);
  };

  const onReset = () => {
    clearInterval(intervalId);
    setTime(0);
  };
  const onResume = () => {
    setIsPuased(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const isRuning = time > 0;

  return (
    <div className={styles.timer}>
      <h3 className={styles.timerText}>{time}</h3>
      <div className={styles.action}>
        {!isRuning && (
          <button onClick={onStart} className={styles.btn}>
            Start
          </button>
        )}
        {isRuning && (
          <>
            {!isPaused && (
              <button onClick={onPause} className={styles.btn}>
                Pause
              </button>
            )}
            {isPaused && (
              <button onClick={onResume} className={styles.btn}>
                Resume
              </button>
            )}
            <button onClick={onReset} className={styles.btn}>
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Timer;
