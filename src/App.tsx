import React from 'react'
import MainInterface from './components/StartDisplayComponent/MainInterface'
import JoinRoomComponent from './components/JoinRoomComponent/JoinRoomComponent'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainInterface />} />
        <Route path='/join' element={<JoinRoomComponent />} />
      </Routes>
    </div>
  )
}

export default App
