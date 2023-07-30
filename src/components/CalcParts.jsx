import { DelIcon } from '../assets/DelIcon.jsx'

export const Screen = ({ expression, lastExpression }) => {
  return (
    <div className='screen'>
      {expression}
      <div className='sub-screen'>{lastExpression}</div>
    </div>
  )
}

export const Buttons = ({ handleButtonAc, handleButtonDel, handleButtonClick, handleCalculate }) => {
  return (
    <div className='buttons'>
      <div className='button clean' onClick={() => handleButtonAc()}>AC</div>
      <div className='button clean del' onClick={() => handleButtonDel()}>
        <DelIcon />
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
      <div className='button operator equals' onClick={() => handleCalculate()}> =</div>
    </div>
  )
}
