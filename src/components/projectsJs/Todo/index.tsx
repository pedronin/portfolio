import React from 'react';

import styles from './Todo.module.scss';
import { useAppDispatch, useAppSelector } from '../../../Hook/redux';
import { addTodo, todoClearCmpltd } from '../../../redux/todo/slice';
import TodoItem from './TodoItem';
import { EActiveList } from '../../../redux/todo/type';
import ButtonToGitHub from '../../ButtonToGitHub';

const Todo = () => {
  const [outValue, setOutValue] = React.useState('');
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.todo);

  const [activeList, setActiveList] = React.useState<EActiveList>(EActiveList.ALL);

  const onClickAddTodo = () => {
    dispatch(addTodo(outValue));
    setOutValue('');
    if (activeList === EActiveList.COMPLETED) {
      setActiveList(EActiveList.ALL);
    }
  };

  const onClickClear = () => {
    dispatch(todoClearCmpltd());
    setActiveList(EActiveList.ALL);
  };

  React.useEffect(() => {
    function handlerEnter(e: KeyboardEvent) {
      if (e.code === 'Enter') {
        onClickAddTodo();
      }
    }
    document.addEventListener('keydown', handlerEnter);
    return () => document.removeEventListener('keydown', handlerEnter);
  }, [outValue]);

  const onChangeOutValue = (e: React.ChangeEvent<HTMLInputElement>) => setOutValue(e.target.value);

  return (
    <div className={styles.wrapper}>
      <div className="flex_wrap">
        <h2>Заметки</h2>
        <ButtonToGitHub
          gitHubUrl={
            'https://github.com/pedronin/portfolio/tree/main/src/components/projectsJs/Todo'
          }
        />
      </div>
      <div className={styles.todo}>
        <div className={styles.todo__input}>
          <input
            onChange={onChangeOutValue}
            value={outValue}
            className={styles.todo__out}
            type="text"
            placeholder="What needs to be done"
          />
          <button onClick={onClickAddTodo} className={`${styles.todo__add} ${styles.btn}`}>
            +
          </button>
        </div>
        <div className={styles.todo_wrapper}>
          <ul className={styles.todo__list}>
            {activeList === EActiveList.ALL
              ? items.map((item) => <TodoItem item={item} key={item.text} />)
              : ''}

            {activeList === EActiveList.ACTIVE
              ? items
                  .filter((item) => item.completed === false)
                  .map((item) => <TodoItem item={item} key={item.text} />)
              : ''}

            {activeList === EActiveList.COMPLETED
              ? items
                  .filter((item) => item.completed === true)
                  .map((item) => <TodoItem item={item} key={item.text} />)
              : ''}
          </ul>
        </div>
        <div className={styles.todo__bottom}>
          <div className={styles.todo__items_left}>items left</div>
          <div className={styles.todo__bottom_wrapper}>
            <button
              onClick={() => setActiveList(EActiveList.ALL)}
              className={`${styles.todo__all_btn} ${styles.btn_bottom}`}>
              All
            </button>
            <button
              onClick={() => setActiveList(EActiveList.ACTIVE)}
              className={`${styles.todo__active_btn} ${styles.btn_bottom}`}>
              Active
            </button>
            <button
              onClick={() => setActiveList(EActiveList.COMPLETED)}
              className={`${styles.todo__completed_btn} ${styles.btn_bottom}`}>
              Completed
            </button>
          </div>
          <button
            onClick={onClickClear}
            className={`${styles.todo__clear_btn} ${styles.btn_bottom}`}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
