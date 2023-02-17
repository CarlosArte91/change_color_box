import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ColorBox from './components/color_box/color_box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ColorBox />
    </div>
  )
}

export default App
