import './utils/axios'
import './styles/global.scss'
import { Footer, Header } from './components'
import { Router } from './router'
import { AuthProvider } from './context/auth'

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
