import { useState } from 'react'
import './App.css'

function App () {
  const [expression, setExpression] = useState('0')
  const [lastExpression, setLastExpression] = useState('')

  const handleButtonClick = (value) => {
    setExpression((prevValue) => (
      prevValue === '0' ? value : prevValue + value
    ))
  }

  const hadleCalculate = () => {
    try {
      const res = eval(expression)
      setLastExpression(expression)
      setExpression(res.toString())
    } catch (error) {
      setExpression('Syntax ERROR')
    }
  }

  const handleButtonDel = () => (
    setExpression(expression.slice(0, expression.length - 1))
  )

  const handlebuttonAc = () => (
    setExpression('0')
  )

  if (expression === '') setExpression('0')

  return (
    <>
      <header><h1>Simple Calculator</h1></header>
      <div className='calculator'>
        <div className='screen'>
          {expression}
          <div className='sub-screen'>{lastExpression}</div>
        </div>
        <div className='buttons'>
          <div className='button clean' onClick={() => handlebuttonAc()}>AC</div>
          <div className='button clean del' onClick={() => handleButtonDel()}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z' />
            </svg>
          </div>
          <div className='button operator' onClick={() => handleButtonClick('/')}>÷</div>
          <div className='button' onClick={() => handleButtonClick('7')}>7</div>
          <div className='button' onClick={() => handleButtonClick('8')}>8</div>
          <div className='button' onClick={() => handleButtonClick('9')}>9</div>
          <div className='button operator' onClick={() => handleButtonClick('*')}>×</div>
          <div className='button' onClick={() => handleButtonClick('4')}>4</div>
          <div className='button' onClick={() => handleButtonClick('5')}>5</div>
          <div className='button' onClick={() => handleButtonClick('6')}>6</div>
          <div className='button operator' onClick={() => handleButtonClick('-')}>-</div>
          <div className='button' onClick={() => handleButtonClick('1')}>1</div>
          <div className='button' onClick={() => handleButtonClick('2')}>2</div>
          <div className='button' onClick={() => handleButtonClick('3')}>3</div>
          <div className='button operator' onClick={() => handleButtonClick('+')}>+</div>
          <div className='button' onClick={() => handleButtonClick('0')}>0</div>
          <div className='button' onClick={() => handleButtonClick('.')}>.</div>
          <div className='button operator equals' onClick={() => hadleCalculate()}> =</div>
        </div>
      </div>
    </>
  )
}

export default App
