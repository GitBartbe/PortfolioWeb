import { useEffect, useRef } from "react";

import NavLinks from '../NavLinks/NavLinks'

import './Navbar.css'

export const Navbar = () => {

    const headerRef = useRef(null);

    useEffect(() => {
    
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        }

        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        }
    },[])

    return (
        <nav ref={headerRef} className='desktop'>
           <NavLinks /> 
       </nav>
    )
}
