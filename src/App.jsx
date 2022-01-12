import './utils/axios'
import './styles/global.scss'
import { Footer, Header, Search } from './components'
import { Router } from './router'
import { AuthProvider } from './context/auth'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Search />
        <Router />
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
