import { supabase } from '../lib/supabase'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      console.error('Login error:', error.message)
    } else {
      alert('Check your email for the login link!')
      router.push('/dashboard')
    }
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={signIn}>Login</button>
    </div>
  )
}
