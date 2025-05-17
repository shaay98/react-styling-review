import React from 'react'

export default function Header() {
    return(
     <>
     <h1 className='flex justify-center text-xl font-bold'>Welcome to my site!</h1>
     <nav className='flex justify-between bg-amber-200 text-xl'>
        <a href='/'>Home</a>
        <a href='/funFacts'>Fun Facts</a>
        <a href='/contactMe'>Contact Me</a>
     </nav>
     <p className='mt-5 text-lg'>Hello, my name is Nijah Richardson. Welcome to my first project using React and Tailwaind styles for Responsive Design! This site is just the beginning of what I am currently learning, there is a lot more to come. Enjoy! </p>
        <button className='flex hover cursor-pointer justify-self-center hover:bg-sky-700 text-xl mt-10 outline-2 outline-offset-2 shadow-lg rounded-sm outline-2 '>About Me!</button>
     </>
    )
}