import { useUser } from '@supabase/auth-helpers-react'

export default function Dashboard() {
  const user = useUser()
  return <p>Welcome {user?.email}</p>
}