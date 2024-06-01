import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { multiplyByTwo, addThree, subtractTwo, divideByThree, setOne } from './functions';
import './style.css';

const App = () => {
    const num = useSelector((state) => state.number.value); //Получение текущего значения
    const dispatch = useDispatch(); //Путь к функциям (действий Redux)
    const backgroundColor = num === 5 ? 'lightgreen' : 'white'; //Условие зелёной формы

    return (
        <div className="form" style={{ backgroundColor }}>
            <div className="number">{num}</div>
            <button className="button" onClick={() => dispatch(multiplyByTwo())}>Умножить на 2</button>
            <button className="button" onClick={() => dispatch(addThree())}>Прибавить 3</button>
            <button className="button" onClick={() => dispatch(subtractTwo())}>Отнять 2</button>
            <button className="button" onClick={() => dispatch(divideByThree())}>Разделить на 3</button>
            <button className="button" onClick={() => dispatch(setOne())}>Очистить</button>
        </div>
    ); //Вызов действий Redux в зависимости от нажатой кнопки
};

export default App;
