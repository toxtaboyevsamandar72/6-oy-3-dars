import './App.css'
import Counter from './components/Counter'

import Game from './components/Game';
import Card from './components/Card'
import ProgressBar from './components/ProgressBar'
function App() {

  return (
    <>
      <div className="container">
      <Counter/>  
      <Card/>
      <Game/>
      <ProgressBar/>
      </div>
    </>
  )
}

export default App
