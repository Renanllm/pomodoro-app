import { useContext, useEffect, useState } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={`${styles.countDownButton}`}>
          Ciclo encerrado &#9989;
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countDownButtonActive} ${styles.countDownButton}`}
                onClick={() => resetCountDown()}>
                Abandonar ciclo &#x2715;
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countDownButton}
                  onClick={() => startCountDown()}>
                  Iniciar um ciclo &#9658;
                </button>
              )}
          </>
        )}
    </div>
  );
}