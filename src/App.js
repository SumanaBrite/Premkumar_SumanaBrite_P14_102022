import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListEmployees from './Pages/ListEmployees/ListEmployees'
import CreateEmployee from './Pages/CreateEmployee/CreateEmployee'
import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/listEmployee" element={<ListEmployees />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
