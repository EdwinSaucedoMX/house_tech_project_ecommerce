import {useState} from 'react';

import Button from 'react-bootstrap/Button';



const Counter = ({count}) => {
    const[value, setValue] = useState(1);

    const increase = () => {
        if(value + 1 > 10){
            return;
        }
        setValue(value + 1);
        count = value + 1;
    }

    const decrease = () => {
        if(value - 1 <= 0){
            return;
        }
        setValue(value - 1);
        count = value - 1;
    }


    return(
        <div className='counter'>
            <Button onClick={decrease}>-</Button>
            <div contentEditable>{value}</div>
            <Button onClick={increase}>+</Button>
        </div>

    )
}

export default Counter;