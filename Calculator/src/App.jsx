import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Calculator from './Calculator.jsx'
import SciCalculator from './SciCalculator.jsx'

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Calculator/>}></Route>
      <Route path='/scientific-calculator' element={<SciCalculator/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
