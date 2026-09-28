import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

type UserProfileProps = { compact?: boolean }

const UserProfile = ({ compact = false }: UserProfileProps) => {
  const user = useSelector((state: RootState) => state.user)
  const initials = user.name ? user.name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() : '?'
  return (
    <div className={`user-profile ${compact ? 'user-profile-compact' : ''}`}>
      <span className="avatar">{initials}</span>
      <span className="user-copy"><strong>{user.name || 'Guest user'}</strong><small>{user.email || 'Not signed in'}</small></span>
      {compact && <span className="profile-chevron">⌄</span>}
    </div>
  )
}

export default UserProfile