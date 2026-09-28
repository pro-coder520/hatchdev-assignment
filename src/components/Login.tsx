import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email) {
      dispatch(setUser({ name, email }))
    }
  }


  return (
    <main className="login-screen"><div className="login-visual"><div className="visual-grid" /><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-copy"><p className="eyebrow">HATCHDEV / 01</p><h1>Make room for <em>better</em> work.</h1><p>A calmer home for ambitious ideas, thoughtful teams, and the details that make products matter.</p></div><span className="visual-caption">Built for the way you think.</span></div><div className="login-form-wrap"><div className="login-brand"><span>H</span><strong>hatchdev</strong></div><div className="login-copy"><p className="eyebrow coral-text">WELCOME BACK</p><h2>Let&apos;s get you in.</h2><p>Your workspace is waiting on the other side.</p></div><form onSubmit={handleSubmit} className="login-form"><label htmlFor="name">Full name<input id="name" name="name" value={name} type="text" onChange={(e) => setName(e.target.value)} required placeholder="e.g. Ada Lovelace" /></label><label htmlFor="email">Email address<input id="email" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="you@company.com" /></label><button type="submit" className="primary-button login-button">Enter workspace <span>→</span></button></form><p className="form-note">By continuing, you agree to keep making excellent things.</p></div></main>
  )
}

export default Login