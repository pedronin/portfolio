// import React from 'react';

// export const SnakeContext = React.createContext();

// export const SnakeProvider = ({ children }) => {
//   const [score, setScore] = React.useState();

//   const [positionX, setPositionX] = React.useState(160);
//   const [positiony, setPositionY] = React.useState(160);

//   const [dx, setDx] = React.useState(config.sizeCell);
//   const [dy, setDy] = React.useState(0);

//   //   // счет очков
//   //   let scoreBlock;
//   //   let score = 0;

//   // настройки игры
//   const config = {
//     step: 0,
//     maxStep: 5,
//     sizeCell: 16,
//     sizeBerry: 16 / 4,
//   };

//   // характеристики змеи
//   const snake = {
//     x: 160,
//     y: 160,
//     dx: config.sizeCell,
//     dy: 0,
//     tails: [],
//     currentTails: 3,
//   };

//   const berry = {
//     x: 0,
//     y: 0,
//   };

//   const canvas = document.querySelector('#game-canvas');
//   const context = canvas.getContext('2d');
//   //   scoreBlock = document.querySelector('.game-score .score-count');
//   //   drawScore();

//   React.useLayoutEffect(() => {
//     let timerId;
//     function gameLoop() {
//       timerId = requestAnimationFrame(gameLoop);

//       // уменьшаем кол-во обновлений в maxStep раз
//       if (++config.step < config.maxStep) {
//         return;
//       }
//       config.step = 0;

//       context.clearRect(0, 0, canvas.width, canvas.height);

//       drawBerry();
//       drawSnake();
//     }
//     timerId = requestAnimationFrame(gameLoop);
//     return () => cancelAnimationFrame(timerId);
//   }, []);

//   function drawSnake() {
//     snake.x += snake.dx;
//     snake.y += snake.dy;

//     collisionBorder();

//     // добавляем на новые кооринаты, новую ячейку змейки
//     snake.tails.unshift({ x: snake.x, y: snake.y });

//     // если не съел фрукт, удаляем из конца ячейку змейки
//     if (snake.tails.length > snake.currentTails) {
//       snake.tails.pop();
//     }

//     // рисуем
//     snake.tails.forEach(function (el, index) {
//       if (index == 0) {
//         context.fillStyle = '#FA0556';
//       } else {
//         context.fillStyle = '#A00034';
//       }
//       context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

//       if (el.x === berry.x && el.y === berry.y) {
//         snake.currentTails++;
//         // incScore();
//         setScore((prev) => prev++);
//         randomPositionBerry();
//       }

//       // укусил себя за хвост
//       for (let i = index + 1; i < snake.tails.length; i++) {
//         if (el.x == snake.tails[i].x && el.y == snake.tails[i].y) {
//           refreshGame();
//         }
//       }
//     });
//   }

//   // пресек стену - появляешься с другой стороны
//   function collisionBorder() {
//     if (snake.x < 0) {
//       snake.x = canvas.width - config.sizeCell;
//     } else if (snake.x >= canvas.width) {
//       snake.x = 0;
//     }

//     if (snake.y < 0) {
//       snake.y = canvas.height - config.sizeCell;
//     } else if (snake.y >= canvas.height) {
//       snake.y = 0;
//     }
//   }

//   // конец игры, все по нулям
//   function refreshGame() {
//     // score = 0;
//     // drawScore();
//     setScore(0);

//     snake.x = 160;
//     snake.y = 160;
//     snake.tails = [];
//     snake.currentTails = 3;
//     snake.dx = config.sizeCell;
//     snake.dy = 0;

//     randomPositionBerry();
//   }

//   // рисуем ягоду
//   function drawBerry() {
//     context.beginPath();
//     context.fillStyle = '#A00034';
//     context.arc(
//       berry.x + config.sizeCell / 2,
//       berry.y + config.sizeCell / 2,
//       config.sizeBerry,
//       0,
//       2 * Math.PI,
//     );
//     context.fill();
//   }

//   // новая позиция ягоды
//   function randomPositionBerry() {
//     berry.x = randomNumber(0, canvas.width / config.sizeCell) * config.sizeCell;
//     berry.y = randomNumber(0, canvas.height / config.sizeCell) * config.sizeCell;
//   }

//   // рандомное число (для ягоды)
//   function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }

//   // управление
//   React.useEffect(() => {
//     function handler(e) {
//       if (e.code == 'ArrowUp') {
//         snake.dy = -config.sizeCell;
//         snake.dx = 0;
//       } else if (e.code == 'ArrowLeft') {
//         snake.dx = -config.sizeCell;
//         snake.dy = 0;
//       } else if (e.code == 'ArrowDown') {
//         snake.dy = config.sizeCell;
//         snake.dx = 0;
//       } else if (e.code == 'ArrowRight') {
//         snake.dx = config.sizeCell;
//         snake.dy = 0;
//       }
//     }
//     document.addEventListener('keydown', handler);

//     return () => document.removeEventListener('keydown', handler);
//   });

//   return (
//     <SnakeContext.Provider
//       value={{
//         score,
//       }}>
//       {children}
//     </SnakeContext.Provider>
//   );
// };


export {}