import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'
function NavBar() {
  return (
    <header className='bg-red-600'>
        <div className='container mx-auto flex justify-between'>
            <nav className='flex'>
                <NavLink to="/"
                activeclassname='text-white'
                className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest
                active:text-white'>
                    Kapehe
                </NavLink>
                <NavLink to="/post"
                activeclassname='text-red-100 bg-red-700'
                className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                    Blogs Posts
                </NavLink>
                <NavLink to="/project"
                activeclassname='text-red-100 bg-red-700'
                className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                    Projects
                </NavLink>
                <NavLink to="/about"
                activeclassname='text-red-100 bg-red-700'
                className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                    About Me!
                </NavLink>
            </nav>
            <div>
                <SocialIcon url="https://linkedin.com" className="mr-4" target="_blank" frColor="#fff" style={{height:35, width:35}}/>
                <SocialIcon url="" className="mr-4" target="_blank" frColor="#fff" style={{height:35, width:35}}/>
                <SocialIcon url="" className="mr-4" target="_blank" frColor="#fff" style={{height:35, width:35}}/>
            </div>
        </div>
    </header>
  )
}

export default NavBar