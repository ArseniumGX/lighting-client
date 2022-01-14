import './utils/axios'
import './styles/global.scss'
import { Router } from './router'
import { AuthProvider } from './context/auth'
import { Footer, Header } from './components'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Router />
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
