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
            className='text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-4 hover:text-orange-200 rounded-full'
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