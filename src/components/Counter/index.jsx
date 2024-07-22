import './index.css'
import { useState } from 'react';

function Counter() {
    const[counterState, setcounterState] = useState(0);

    let counter = 0;

    function handleIncrement() {
        setcounterState(counterState+1);
    }
    function handleDecrement() {
        setcounterState(counterState-1);
    }

  return (
    <div className='counter'>
        <h5 className='misol'>1-Misol</h5>
        <div className="button">
        <button className='incre' onClick={handleIncrement}>Increment</button>
        <button className='decre' onClick={handleDecrement}>Decrement</button>
        </div>
        <h1 className='counterState'>{counterState}</h1>
    </div>
  )
}

export default Counter
