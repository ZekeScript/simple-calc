import { useState } from 'react'
import './App.css'

function App () {
  const [displayValue, setDisplayValue] = useState('0')

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => {
      if (prevValue === '0') {
        return value
      } else {
        return prevValue + value
      }
    })
  }

  return (
    <>
      <header><h1>Simple Calculator</h1></header>
      <div className='calculator'>
        <div className='screen'>{displayValue}</div>
        <div className='buttons'>
          <div className='button' onClick={() => handleButtonClick('7')}>7</div>
          <div className='button' onClick={() => handleButtonClick('8')}>8</div>
          <div className='button' onClick={() => handleButtonClick('9')}>9</div>
          <div className='button clean'>DEL</div>
          <div className='button clean'>AC</div>
          <div className='button' onClick={() => handleButtonClick('4')}>4</div>
          <div className='button' onClick={() => handleButtonClick('5')}>5</div>
          <div className='button' onClick={() => handleButtonClick('6')}>6</div>
          <div className='button operator'>×</div>
          <div className='button operator'>÷</div>
          <div className='button' onClick={() => handleButtonClick('1')}>1</div>
          <div className='button' onClick={() => handleButtonClick('2')}>2</div>
          <div className='button' onClick={() => handleButtonClick('3')}>3</div>
          <div className='button operator'>+</div>
          <div className='button operator'>-</div>
          <div className='button' onClick={() => handleButtonClick('0')}>0</div>
          <div className='button' onClick={() => handleButtonClick('.')}>.</div>
          <div className='button operator equals'>=</div>
        </div>
      </div>
    </>
  )
}

export default App
