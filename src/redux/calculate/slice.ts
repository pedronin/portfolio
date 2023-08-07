import { createSlice } from '@reduxjs/toolkit';
import { ICalculateSlice } from './type';

const initialState: ICalculateSlice = {
  // все опереции и числа хранятся в виде масива
  out: ['0'],
};

const calculateSlice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    calculate(state) {
      const arr = state.out;
      if (!arr.length) return;

      if (isNaN(Number(arr.at(-1)))) {
        arr.splice(arr.length - 1);
      }

      while (arr.length !== 1) {
        if (arr.includes('/') || arr.includes('*')) {
          const multiply = arr.indexOf('*') === -1 ? 1000 : arr.indexOf('*');
          const toShare = arr.indexOf('/') === -1 ? 1000 : arr.indexOf('/');
          const operIdx = Math.min(multiply, toShare);

          let res;

          if (operIdx === multiply) {
            res = Number(arr[operIdx - 1]) * Number(arr[operIdx + 1]);
          } else {
            res = Number(arr[operIdx - 1]) / Number(arr[operIdx + 1]);
          }
          arr.splice(operIdx - 1, 3, res.toString());
        } else {
          const [n1, operator, n2] = arr;
          let res;
          if (operator === '+') {
            res = Number(n1) + Number(n2);
          } else {
            res = Number(n1) - Number(n2);
          }
          arr.splice(0, 3, res.toString());
        }
        state.out = [Number(arr[0]).toFixed(2)];
      }
    },
    enteringNumber(state, action) {
      if (state.out.length === 1 && state.out[0] === '0') state.out = [];

      const lastEl = state.out.at(-1);

      // отмена лишних точек
      if (action.payload === '.' && lastEl?.includes('.')) {
        return;
      }

      // если введена просто '.' то вводим ее вместе с ноликом
      if (!lastEl && action.payload === '.') {
        state.out.push('0.');
        return;
      }

      // при переводе строки в число получим NaN / !!NaN === false
      if (!!Number(lastEl) || lastEl === '.' || lastEl?.includes('.')) {
        // если последний элемент в масиве число то сращиваем их
        // если нет то просто пушим
        state.out = [...state.out.splice(0, state.out.length - 1), lastEl + action.payload];
      } else {
        if (action.payload === '.') {
          state.out.push('0.');
          return;
        }
        state.out.push(action.payload);
      }
    },
    enteringOperator(state, action) {
      // отменна лишних операторов
      const lastEl = Number(state.out.at(-1));
      if (!lastEl || isNaN(lastEl)) {
        return;
      }
      state.out.push(action.payload);
    },
    deleteLastEl(state) {
      if (!state.out.length) return;
      const lastEl = state.out.at(-1);

      if (!!lastEl) {
        if (lastEl.length === 1) {
          state.out = [...state.out.splice(0, state.out.length - 1)];
        } else {
          state.out = [
            ...state.out.splice(0, state.out.length - 1),
            lastEl.substring(0, lastEl.length - 1),
          ];
        }
      } else {
        state.out = [...state.out.splice(0, state.out.length - 1)];
      }
      if (state.out.length === 0) state.out = ['0'];
    },
    clearOut(state) {
      state.out = [];
      if (state.out.length === 0) state.out = ['0'];
    },
  },
});

export const { calculate, enteringNumber, enteringOperator, deleteLastEl, clearOut } =
  calculateSlice.actions;
export default calculateSlice.reducer;
