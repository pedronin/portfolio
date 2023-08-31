import React from 'react';
import styles from './PasswordGenerate.module.scss';
import ButtonToGitHub from '../../ButtonToGitHub';

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
  };

  const render = () => {
    function randomIdx(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const symbols = used.join('').split('');
    const symbolsLength = symbols.length;
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const n = randomIdx(0, symbolsLength - 1); // рандомный индекс элемента
      result += symbols[n];
    }
    setOut(result);
  };

  React.useEffect(() => {
    if (used.length) {
      render();
    } else {
      setOut('');
    }
  }, [used, passwordLength]);

  const copyPassword = () => {
    navigator.clipboard.writeText(out);
    alert('Пороль скопирован');
  };

  return (
    <section className={styles.general}>
      <div className="flex_wrap">
        <h2>Генератор поролей</h2>
        <ButtonToGitHub
          gitHubUrl={
            'https://github.com/pedronin/portfolio/tree/main/src/components/projectsJs/PasswordGenerate'
          }
        />
      </div>
      <div className={styles.general__content}>
        <div className={styles.password}>
          <div className={styles.out} id="out">
            {out}
          </div>

          <div className={styles.flex_wrap}>
            <button onClick={render} className={styles.repeat_btn}>
              {/* &#8634; */}
            </button>
            <button onClick={copyPassword} id="copy" className={styles.copy_btn}>
              копировать
            </button>
          </div>
        </div>

        <div className={styles.general__length}>
          <p className={styles.general__text}>Длинна пороля: {passwordLength}</p>
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
          <p className={styles.general__text}>Используемые символы:</p>
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
    </section>
  );
};

export default PasswordGenerate;
