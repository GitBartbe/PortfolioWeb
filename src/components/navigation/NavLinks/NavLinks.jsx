import React from 'react'
import './NavLinks.css'

  const menuItems = [
    {
      name: "Home",
      link: "./"
    },
    {
      name: "About me",
      link: "./#about"
    },
    {
      name: "Pojects",
      link: "./#projects"
    },
    {
      name: "Contact",
      link: "./#contact"
    }
  ];
  
  const NavLinks = (props) => {
    return (
     
      <ul className='links'  >
        {menuItems.map((menuItem, idx) => {
          return (
            <li key={idx} onClick={() => props.closeMobileMenu && props.closeMobileMenu()} >
              <a href={menuItem.link}>{menuItem.name}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  
  export default NavLinks;