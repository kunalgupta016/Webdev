import React from 'react'
import { useState, useEffect } from 'react';
import {motion,AnimatePresence} from 'motion/react'
import {ArrowUp} from 'lucide-react'
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBackToTop, setshowBackToTop] = useState(false)

    const scrollToSection = (id)=>{
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    }

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    };

  return (
    <>
    <motion.header
    initial={{y:-100}}
    animate={{y:0}}
    transition={{
        duration:0.5,
        ease: [0.22, 1, 0.36, 1]
    }}
    className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 '
    >
        <div className='container h-16 md:h-20 flex items-center justify-between mx-auto my-auto'>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5,delay:0.2}}
            className='font-medium text-xl '
            >
                <span className='font-bold'>Portfolio</span>
            
            </motion.div> 

            <motion.nav
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5 , delay:0.3}}
            className='hidden md:flex space-x-8 items-center '
            >
            <button
            onClick={()=>scrollToSection('hero')}
            className='relative w-fit block after:block after:contents-[""] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'
            
            >Home</button>

            <button 
            onClick={()=>scrollToSection('about')}
            className='relative  w-fit block after:block after:contents-[""] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'
            >About
            </button>
            <button
            onClick={()=>scrollToSection('projects')}
            className='relative  w-fit block after:block after:contents-[""] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'>Projects</button>
            <button
            onClick={()=>scrollToSection('contact')}
            className='relative  w-fit block after:block after:contents-[""] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'>Contact</button>
            </motion.nav>

            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden"
          >
            <button 
              onClick={() => scrollToSection('contact')} 
              className='relative text-white bg-[#0f172a] py-2 px-4 rounded hover:bg-[#0f172ad7] font-semibold'
            >
              Contact
            </button>
          </motion.div>
          
        
            
        </div>
    
    </motion.header>

    <AnimatePresence>
        {showBackToTop && (
            <motion.button
            initial={{opacity:0, scale:0.8}}
            animate={{opacity:1, scale:1}}
            exit={{opacity0,scale:0.8}}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-white text-white p-3 rounded-full shadow-sm"
            >
                <ArrowUp size={20}/>

            </motion.button>
        )}

    </AnimatePresence>

    </>
    
  )
}

export default Navbar
