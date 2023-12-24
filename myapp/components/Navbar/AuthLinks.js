import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LoginWithGoogle from '../Buttons/LoginWithGoogle'
import LogoutButton from '../Buttons/LogOut'
import { getServerSession } from 'next-auth'
import Link from 'next/link'



const AuthLinks =  async (  ) => {
    const session = await getServerSession(authOptions)

    return (
    <div className="flex items-center gap-2">
        {!!session && (
            <>
            <div className='flex items-center'>
            <Link 
            className='links'
            href={'/create'}>Create</Link>
            <LogoutButton />
            </div>

            </>
        )}
        {!session && (
            <>
            <LoginWithGoogle />
            </>
        )}
        
    </div>
  )
}

export default AuthLinks