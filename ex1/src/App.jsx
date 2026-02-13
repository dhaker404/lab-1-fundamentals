import Greeting from './components/Greeting.jsx'
import { BadComponent1, BadComponent2, BadComponent3 } from './exercises/JSXErrors.jsx'
import StatusBadge from './components/StatusBadge.jsx' 


import './App.css'

function App() {  
  return (
    <>
    
      <div className="Greeting">
        <Greeting />
      </div>
      <div className="BadComponent1">
        <BadComponent1 />
      </div>
      <div className="BadComponent2">
        <BadComponent2 />
      </div>
      <div className="BadComponent3">
        <BadComponent3 />
      </div>

      <div className='StatusBadge'>
        <StatusBadge/>
      </div>
    </>
  )
}

export default App

