import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Index from './Components/Index'
import Home from './Components/Home'

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
      </Routes>
        </Router>
     
    </>
  )
}

export default App
