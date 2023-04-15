import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './pages/Signup'
import MainScreen from './pages/MainScreen'

function App() {
// lembrar de alterar o MainScreen ali para o Signup (e provavelmente como tá vai bugar porque eu importo e não uso)
  return (
    <div className="App">

      <MainScreen />
    </div>
  )
}

export default App
