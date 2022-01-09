import './utils/axios'
import './styles/global.scss'
import { Footer, Header, Search } from './components'
import { Router } from './router'

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
