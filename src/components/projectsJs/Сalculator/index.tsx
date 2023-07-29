import React from 'react'

import styles from './Сalculator.module.scss'
import { calculate, clearOut, deleteLastEl, enteringNumber, enteringOperator } from '../../../redux/calculate/slice'
import { useAppDispatch, useAppSelector } from '../../../Hook/redux'

const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
const operators = [['+', '+'], ['-', '−'], ['*', '×'], ['/', '÷']]

const Сalculator = () => {
  const dispatch = useAppDispatch()
  const { out } = useAppSelector(state => state.calculate)

  React.useEffect(() => {
    console.log(out);
  }, [out])
  
  return (
    <section>
      <div className={styles.calculator}>
        <input type="text" className={styles.calculator_screen} value={out.join('')} disabled />
        <div className={styles.calculator_keys}>
          {operators.map((el, i) => (
            <button onClick={(e) => dispatch(enteringOperator((e.target as HTMLInputElement).value))} type="button" className={`${styles.operator} ${styles.btn}`} value={el[0]} key={i}>{el[1]}</button>
          ))}
          {nums.map((el, i) => (
            <button onClick={(e) => dispatch(enteringNumber((e.target as HTMLInputElement).value))} type="button" className={`${styles.num} ${styles.btn}`} value={el} key={i}>{el}</button>
            ))}
          <button onClick={() => dispatch(clearOut())} type="button" className={`${styles.all_clear} ${styles.btn}`} value="all-clear">AC</button>
          <button onClick={() => dispatch(calculate())} type="button" className={`${styles.equal_sign} ${styles.btn}`} value="=">=</button>
            <button onClick={() => dispatch(deleteLastEl())} type="button" className={`${styles.all_delete} ${styles.btn}`} value="all-delete">☒</button>
        </div>
      </div>
    </section>
  )
}

export default Сalculator