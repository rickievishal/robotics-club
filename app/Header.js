import React from 'react'
import LoginStatus from './components/Header-comps/LoginStatus'

const Header = () => {

  return (
    <nav className='fixed top-0 w-full h-[50px] bg-black/50 backdrop-blur-3xl z-40'>
       <ol className='w-full h-full max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-4'>
        <li className='text-xl font-bold tracking-[-1px] text-[var(--primary)]'>
          RoboticsClub.
        </li>
        <ol>
          <li>
            <LoginStatus/>
          </li>
        </ol>
       </ol>
    </nav>
  )
}

export default Header