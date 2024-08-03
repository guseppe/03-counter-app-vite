import {useState} from 'react'
import PropTypes from 'prop-types'


// const handleAdd = (event)=>{   
//     console.log(event);
// }

export const CounterApp = ({value}) => {
    console.log('render');
    const [counter, setCounter] = useState(value);
    const handleAdd = (event)=>{
       setCounter(counter + 1);
       //setCounter((c) => c + 1);
    }
    const handleSubstract = (event) => setCounter(counter - 1);
    const handleReset = (event) => setCounter(value);
    // const handleAdd = (event, newValue)=>{   //onClick={(event) => handleAdd(event, 'Hola')}
    //     console.log(newValue);
    // }
    return (
        <>
            <h1>Counter App</h1>
            <h2> {counter} </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}