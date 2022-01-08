import './config/axios.config'
import './styles/global.scss'
import { Footer, Header, Search } from './components'
import { Router } from './router'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Router />
      <Footer />
    </div>
  )
}

export default App
