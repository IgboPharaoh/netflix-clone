import React, { useEffect, useState } from "react";
import './Navbar.css'

const Navbar = () => {
  const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
          if(window.scrollY > 100){
            handleShow(true)
          }else{
            handleShow(false)
          }
        })
        return ()=>{
          window.removeEventListener('scroll');
        }

    },[])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://upload.wikipedia.org/wikipedia/commons/0/0f"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/124011999041155/0/0f"
        alt="Avatar Logo"
      />
    </div>
  );
};

export default Navbar;
