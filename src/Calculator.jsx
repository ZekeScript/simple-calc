import { useState } from 'react'
import { Buttons, Screen } from './components/CalcParts'
import './Calculator.css'

function App () {
  const [expression, setExpression] = useState('0')
  const [lastExpression, setLastExpression] = useState('')

  const handleButtonClick = (value) => {
    setExpression((prevValue) => (
      prevValue === '0' ? value : prevValue + value
    ))
  }

  const handleCalculate = () => {
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

  const handleButtonAc = () => (
    setExpression('0')
  )

  if (expression === '') setExpression('0')

  return (
    <>
      <header><h1>Simple Calculator</h1></header>
      <div className='calculator'>
        <Screen
          expression={expression}
          lastExpression={lastExpression}
        />
        <Buttons
          handleButtonAc={handleButtonAc}
          handleButtonDel={handleButtonDel}
          handleButtonClick={handleButtonClick}
          handleCalculate={handleCalculate}
        />
      </div>
      <footer>
        <div className='signature'>
          <p>Developed by <span className='signature__author'>ZekeScript</span></p>
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
