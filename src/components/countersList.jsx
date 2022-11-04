import React from "react";
import { useState } from "react";
import Counter from "./counter";


const CountersList = () => {
    
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 3, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 3, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ]
    const [counters, setCounters] = useState(initialState)
    

    const handleDelete = (id) => {
        setCounters(counters.filter(count=>count.id !== id))
    }

    const handleReset  = () => {
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        let newValue = counters.map(counter => {
            if(counter.id === id) {
                counter.value = counter.value + 1
            }
            return counter
        })
        setCounters(newValue)
    }

    const handleDecrement = (id) => {
        let newValue = counters.map(counter => {
            if(counter.id === id) {
                counter.value = counter.value - 1
            }
            return counter
        })
        setCounters(newValue)
    }

    return (
        <>
        {counters.map(count =>
            <Counter 
                key={count.id}
                {...count}
                onIncrement = {handleIncrement}
                onDecrement ={handleDecrement} 
                onDelete = {handleDelete}
            />)}
        <button 
            className="btn btn-primary btn-sm m-2"
            onClick={handleReset}>
                Сброс
            </button>
        </>
    )    
}

export default CountersList