import HomePage from "./components/pages/Home/HomePage"
import LoginPage from "./components/pages/Login/LoginPage"
import { AuthProvider, useAuth } from "./context/authContext"
import { Router, Route, useLocation } from 'wouter'
import RegisterPage from "./components/pages/Login/RegisterPage"

function App() {

  const { token, setToken } = useAuth()
  const [location, setLocation] = useLocation()

  if (sessionStorage.getItem('token') !== null) {
    setToken(sessionStorage.getItem('token') || '')
  } else if (localStorage.getItem('token') !== null) {
    setToken(localStorage.getItem('token') || '')
  }
  
  return (
    <div className="App">
      <AuthProvider>
        <Router base="/">
          <Route path='login'>
            {token != null
              ?
              () => setLocation('/home')
              :
              <LoginPage />}
          </Route>
          <Route path='register'>
            {token != null
              ?
              () => setLocation('/home')
              :
              <RegisterPage />}
          </Route>
          <Route path='home'>
            {token != null
              ?
              <HomePage />
              :
              () => setLocation('/login')}
          </Route>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
