import React from 'react';

import styles from './Сalculator.module.scss';
import {
  calculate,
  clearOut,
  deleteLastEl,
  enteringNumber,
  enteringOperator,
} from '../../../redux/calculate/slice';
import { useAppDispatch, useAppSelector } from '../../../Hook/redux';
import ButtonToGitHub from '../../ButtonToGitHub';

const Сalculator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { out } = useAppSelector((state) => state.calculate);

  return (
    <div className={styles.calculator}>
      <div className="flex_wrap">
        <h2>Калькулятор</h2>
        <ButtonToGitHub
          gitHubUrl={
            'https://github.com/pedronin/portfolio/tree/main/src/components/projectsJs/Сalculator'
          }
        />
      </div>
      <input type="text" className={styles.calculator_screen} value={out.join('')} disabled />
      <div className={styles.calculator_keys}>
        <button
          onClick={() => dispatch(clearOut())}
          type="button"
          className={`${styles.grey} ${styles.btn} ${styles.two_column}`}
          value="all-clear">
          AC
        </button>
        <button
          onClick={() => dispatch(deleteLastEl())}
          type="button"
          className={`${styles.grey} ${styles.btn}`}
          value="all-delete">
          {/* ☒ */}
          |&#8592;
        </button>
        <button
          onClick={(e) => dispatch(enteringOperator((e.target as HTMLInputElement).value))}
          type="button"
          className={`${styles.operator} ${styles.btn}`}
          value={'/'}>
          ÷
        </button>
        {[...new Array(3)].map((el, i) => (
          <button
            onClick={(e) => dispatch(enteringNumber((e.target as HTMLInputElement).value))}
            type="button"
            className={`${styles.grey} ${styles.btn}`}
            value={i + 7}
            key={i}>
            {i + 7}
          </button>
        ))}
        <button
          onClick={(e) => dispatch(enteringOperator((e.target as HTMLInputElement).value))}
          type="button"
          className={`${styles.operator} ${styles.btn}`}
          value={'*'}>
          ×
        </button>
        {[...new Array(3)].map((el, i) => (
          <button
            onClick={(e) => dispatch(enteringNumber((e.target as HTMLInputElement).value))}
            type="button"
            className={`${styles.grey} ${styles.btn}`}
            value={i + 4}
            key={i}>
            {i + 4}
          </button>
        ))}
        <button
          onClick={(e) => dispatch(enteringOperator((e.target as HTMLInputElement).value))}
          type="button"
          className={`${styles.operator} ${styles.btn}`}
          value={'-'}>
          −
        </button>
        {[...new Array(3)].map((el, i) => (
          <button
            onClick={(e) => dispatch(enteringNumber((e.target as HTMLInputElement).value))}
            type="button"
            className={`${styles.grey} ${styles.btn}`}
            value={i + 1}
            key={i}>
            {i + 1}
          </button>
        ))}
        <button
          onClick={(e) => dispatch(enteringOperator((e.target as HTMLInputElement).value))}
          type="button"
          className={`${styles.operator} ${styles.btn}`}
          value={'+'}>
          +
        </button>
        <button
          onClick={(e) => dispatch(enteringNumber((e.target as HTMLInputElement).value))}
          type="button"
          className={`${styles.grey} ${styles.btn} ${styles.two_column}`}
          value={0}>
          0
        </button>
        <button
          onClick={(e) => dispatch(enteringNumber((e.target as HTMLInputElement).value))}
          type="button"
          className={`${styles.grey} ${styles.btn}`}
          value={'.'}>
          .
        </button>
        <button
          onClick={() => dispatch(calculate())}
          type="button"
          className={`${styles.btn} ${styles.operator}`}
          value="=">
          =
        </button>
      </div>
    </div>
  );
};

export default Сalculator;
