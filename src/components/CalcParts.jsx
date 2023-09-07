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
      <div id='ac' className='button clean' onClick={() => handleButtonAc()}>AC</div>
      <div id='del' className='button clean del' onClick={() => handleButtonDel()}>
        <DelIcon />
      </div>
      <div id='division' className='button operator' onClick={() => handleButtonClick('/')}>÷</div>
      <div id='seven' className='button' onClick={() => handleButtonClick('7')}>7</div>
      <div id='eight' className='button' onClick={() => handleButtonClick('8')}>8</div>
      <div id='nine' className='button' onClick={() => handleButtonClick('9')}>9</div>
      <div id='multiplication' className='button operator' onClick={() => handleButtonClick('*')}>×</div>
      <div id='four' className='button' onClick={() => handleButtonClick('4')}>4</div>
      <div id='five' className='button' onClick={() => handleButtonClick('5')}>5</div>
      <div id='six' className='button' onClick={() => handleButtonClick('6')}>6</div>
      <div id='minus' className='button operator' onClick={() => handleButtonClick('-')}>-</div>
      <div id='one' className='button' onClick={() => handleButtonClick('1')}>1</div>
      <div id='two' className='button' onClick={() => handleButtonClick('2')}>2</div>
      <div id='three' className='button' onClick={() => handleButtonClick('3')}>3</div>
      <div id='plus' className='button operator' onClick={() => handleButtonClick('+')}>+</div>
      <div id='zero' className='button' onClick={() => handleButtonClick('0')}>0</div>
      <div id='point' className='button' onClick={() => handleButtonClick('.')}>.</div>
      <div id='equal' className='button operator equals' onClick={() => handleCalculate()}> =</div>
    </div>
  )
}
