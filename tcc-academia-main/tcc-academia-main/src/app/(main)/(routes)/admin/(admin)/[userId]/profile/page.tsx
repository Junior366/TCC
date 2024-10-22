"use client"
import Profile from '@/components/admin/profile/ProfileDetails'
import { useParams } from 'next/navigation'

export default function ProfileAdmin() {
  const { } = useParams()
  return (
    <>
      <Profile />
    </>
  )
}
