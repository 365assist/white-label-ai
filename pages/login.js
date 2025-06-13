import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'

export default function Login() {
  const supabase = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) router.push('/dashboard')
    })
    return () => subscription.unsubscribe()
  }, [])

  const signIn = async () => {
    await supabase.auth.signInWithOtp({ email: prompt('Enter your email') })
  }

  return <button onClick={signIn}>Login with Email</button>
}