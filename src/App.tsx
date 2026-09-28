import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'
import type { RootState } from './redux/store'

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  if (!isLoggedIn) {
    return <Login />
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <UserPage />
      </main>
    </div>
  )
}

export default App