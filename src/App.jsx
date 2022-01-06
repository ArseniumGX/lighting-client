import './config/axios.config'
import './styles/global.scss'
import { Footer, Header } from './components'
import { Router } from './router'

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
