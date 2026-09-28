import UserProfile from './UserProfile'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <aside className="sidebar">
      <div className="brand-mark"><span>H</span><strong>hatchdev</strong></div>
      <div className="workspace-switcher"><span className="workspace-dot" /><span><small>WORKSPACE</small>Product studio</span><span className="chevron">⌄</span></div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        <p className="nav-label">Workspace</p>
        <a className="nav-item active" href="#overview"><span>◈</span>Overview</a>
        <a className="nav-item" href="#projects"><span>▦</span>Projects <b>4</b></a>
        <a className="nav-item" href="#activity"><span>↗</span>Activity</a>
        <p className="nav-label nav-label-spaced">Manage</p>
        <a className="nav-item" href="#team"><span>♧</span>Team</a>
        <a className="nav-item" href="#settings"><span>⚙</span>Settings</a>
      </nav>
      <div className="sidebar-footer"><UserProfile /><button onClick={handleLogout} className="logout-button"><span>↪</span>Log out</button></div>
    </aside>
  )
}

export default Sidebar