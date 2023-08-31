import React from 'react';

import styles from './Snake.module.scss';
import { SnakeContext } from './SnakeContext';
import ButtonToGitHub from '../../ButtonToGitHub';

const Snake = () => {
  let step = 0;
  const maxStep = 5;
  const sizeCell = 16;
  const sizeBerry = 16 / 4;

  const canvasRef = React.useRef();
  const [score, setScore] = React.useState(0);

  const [positionX, setPositionX] = React.useState(160);
  const [positionY, setPositionY] = React.useState(160);

  const [berryX, setBerryX] = React.useState(64);
  const [berryY, setBerryY] = React.useState(32);

  const [dx, setDx] = React.useState(sizeCell);
  const [dy, setDy] = React.useState(0);

  //   let dx = sizeCell;
  //   let dy = 0;

  const [tails, setTails] = React.useState([]);
  const [currentTails, setCurrentTails] = React.useState(3);

  const tailsRef = React.useRef(tails);

  React.useEffect(() => {
    tailsRef.current = tails;
  }, [tails]);

  let canvas;
  let context;

  React.useEffect(() => {
    canvas = canvasRef.current;
    context = canvas.getContext('2d');
  });

  React.useLayoutEffect(() => {
    let timerId;
    function gameLoop() {
      timerId = requestAnimationFrame(gameLoop);

      // уменьшаем кол-во обновлений в maxStep раз
      if (++step < maxStep) {
        return;
      }
      step = 0;

      context.clearRect(0, 0, canvas.width, canvas.height);

      drawBerry();
      drawSnake();
    }
    timerId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(timerId);
  });

  function drawSnake() {
    setPositionX((prev) => prev + dx);
    setPositionY((prev) => prev + dy);

    collisionBorder();

    // добавляем на новые кооринаты, новую ячейку змейки
    setTails((prev) => [{ x: positionX, y: positionY }, ...prev]);

    // если не съел фрукт, удаляем из конца ячейку змейки
    if (tails.length > currentTails) {
      setTails((prev) => prev.slice(0, -1));
    }

    // рисуем
    tails.forEach(function (el, index) {
      if (index == 0) {
        context.fillStyle = '#FA0556';
      } else {
        context.fillStyle = '#A00034';
      }
      context.fillRect(el.x, el.y, sizeCell, sizeCell);

      // съел ягоду
      if (el.x === berryX && el.y === berryY) {
        setCurrentTails((prev) => prev + 1);
        setScore((prev) => prev + 1);
        randomPositionBerry();
      }

      // укусил себя за хвост
      for (let i = index + 1; i < tails.length; i++) {
        if (el.x == tails[i].x && el.y == tails[i].y) {
          refreshGame();
        }
      }
    });
  }

  // пресек стену - появляешься с другой стороны
  function collisionBorder() {
    if (positionX < 0) {
      setPositionX(canvas.width - sizeCell);
    } else if (positionX >= canvas.width) {
      setPositionX(0);
    }

    if (positionY < 0) {
      setPositionY(canvas.height - sizeCell);
    } else if (positionY >= canvas.height) {
      setPositionY(0);
    }
  }

  // конец игры, все по нулям
  function refreshGame() {
    setScore(0);

    setPositionX(160);
    setPositionY(160);

    setTails([]);
    setCurrentTails(3);
    setDx(sizeCell);
    setDy(0);

    randomPositionBerry();
  }

  // рисуем ягоду
  function drawBerry() {
    context.beginPath();
    context.fillStyle = '#A00034';
    context.arc(berryX + sizeCell / 2, berryY + sizeCell / 2, sizeBerry, 0, 2 * Math.PI);
    context.fill();
  }

  // новая позиция ягоды
  function randomPositionBerry() {
    setBerryX(randomNumber(0, canvas.width / sizeCell) * sizeCell);
    setBerryY(randomNumber(0, canvas.height / sizeCell) * sizeCell);
  }

  // рандомное число (для ягоды)
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // управление
  React.useEffect(() => {
    function handler(e) {
      if (e.code == 'ArrowUp') {
        setDy(-sizeCell);
        setDx(0);
      } else if (e.code == 'ArrowLeft') {
        setDx(-sizeCell);
        setDy(0);
      } else if (e.code == 'ArrowDown') {
        setDy(sizeCell);
        setDx(0);
      } else if (e.code == 'ArrowRight') {
        setDx(sizeCell);
        setDy(0);
      }
    }
    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <section className={styles.snake}>
      <div className="flex_wrap">
        <h2>Игра змейка</h2>
        <ButtonToGitHub gitHubUrl={'https://github.com/pedronin/snake'} />
      </div>
      <div className={styles.snake__content}>
        <div className={styles.game_header}>
          <div className={styles.game_score}>
            <span className={styles.score_count}>{score}</span>
          </div>
        </div>
        <div className={styles.canvas_wrapper}>
          <canvas
            ref={canvasRef}
            className={styles.game_canvas}
            id="game-canvas"
            width="320"
            height="400"></canvas>
        </div>
      </div>
    </section>
  );
};

export default Snake;
