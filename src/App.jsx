import './App.css'

function App () {
  return (
    <>
      <header><h1>Simple Calculator</h1></header>
      <div class='calculator'>
        <div class='screen'>0</div>
        <div class='buttons'>
          <div class='button'>7</div>
          <div class='button'>8</div>
          <div class='button'>9</div>
          <div class='button operator'>÷</div>
          <div class='button'>4</div>
          <div class='button'>5</div>
          <div class='button'>6</div>
          <div class='button operator'>×</div>
          <div class='button'>1</div>
          <div class='button'>2</div>
          <div class='button'>3</div>
          <div class='button operator'>-</div>
          <div class='button'>0</div>
          <div class='button'>.</div>
          <div class='button operator'>+</div>
          <div class='button operator equals'>=</div>
        </div>
      </div>
    </>
  )
}

export default App
