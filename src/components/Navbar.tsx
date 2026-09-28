import UserProfile from './UserProfile'

const Navbar = () => {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">MONDAY, 28 SEPTEMBER 2026</p>
        <h1>Good morning, let&apos;s make something useful.</h1>
      </div>
      <div className="topbar-actions">
        <button className="icon-button" aria-label="Open notifications" title="Notifications">◎</button>
        <span className="topbar-divider" />
        <UserProfile compact />
      </div>
    </header>
  )
}

export default Navbar