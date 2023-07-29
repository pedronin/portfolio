import React from 'react';
import styles from './PasswordGenerate.module.scss';

const symbolEl = '!@#$%^&*()_+';
const lowStringEl = 'abcdefghijklmnopqrstuvwxyz';
const upStringEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberEl = '0123456789';

const PasswordGenerate = () => {
  const [passwordLength, setPasswordLength] = React.useState(8);
  const [used, setUsed] = React.useState<string[]>([lowStringEl, numberEl]);
  const [out, setOut] = React.useState('');

  const addUsed = (val: string) => {
    if (used.includes(val)) {
      setUsed((prev) => prev.filter((el) => el !== val));
    } else {
      setUsed((prev) => [...prev, val]);
    }
    render();
  };

  const render = () => {
    function randomIdx(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const symbols = used.join('').split(''); // превращаем из 1-4 масивов в строку (т.к мы puch строки в масив)  // превращаем из строки в масив состоящий из каждого элемента
    const symbolsLength = symbols.length;
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const n = randomIdx(0, symbolsLength - 1); // рандомный индекс элемента
      result += symbols[n];
    }
    setOut(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(out);
    alert('Пороль скопирован');
  };

  React.useEffect(() => {
    if (used) {
      render();
    }
  }, [used, passwordLength]);

  return (
      <div className={styles.general}>
        <h1 className={styles.general__title}>General password</h1>

        <div className={styles.password}>
          <div className={styles.out_wrapper}>
            <div className={styles.out} id="out">
              {out}
            </div>
            <button onClick={render} className={styles.repeat_btn}>
              &#8634;
            </button>
          </div>
          <button onClick={copyPassword} id="copy" className={styles.copy_btn}>
            copy
          </button>
        </div>

        <div className={styles.general__length}>
          <p className={styles.general__text}>Password lengts:</p>
          <input
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            value={passwordLength}
            id="length-input"
            className={styles.general__length_input}
            type="number"
          />
          <input
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            value={passwordLength}
            className={styles.general__length_range}
            type="range"
            id="length-range"
            name="volume"
            min="0"
            max="18"
          />
        </div>
        <div className={styles.general__used}>
          <p className={styles.general__text}>Characters used:</p>
          <div className={styles.input__row}>
            <input
              onChange={() => addUsed(lowStringEl)}
              checked={used.includes(lowStringEl)}
              id="lowercase"
              className={styles.general__used_checkbox}
              data-used="lowStringEl"
              type="checkbox"
            />
            {/* <label for="">abc</label> */}
            <label>abc</label>
          </div>
          <div className={styles.input__row}>
            <input
              onChange={() => addUsed(upStringEl)}
              id="uppercase"
              className={styles.general__used_checkbox}
              data-used="upStringEl"
              type="checkbox"
            />
            {/* <label for="">ABC</label> */}
            <label>ABC</label>
          </div>
          <div className={styles.input__row}>
            <input
              onChange={() => addUsed(numberEl)}
              checked={used.includes(numberEl)}
              id="number"
              className={styles.general__used_checkbox}
              data-used="numberEl"
              type="checkbox"
            />
            {/* <label for="">123</label> */}
            <label>123</label>
          </div>
          <div className={styles.input__row}>
            <input
              onChange={() => addUsed(symbolEl)}
              id="symbol"
              className={styles.general__used_checkbox}
              data-used="symbolEl"
              type="checkbox"
            />
            {/* <label for="">#$%</label> */}
            <label>#$%</label>
          </div>
        </div>
      </div>
  );
};

export default PasswordGenerate;
