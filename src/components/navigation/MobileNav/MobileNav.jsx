import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

import "./MobileNav.css";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const Close = (
    <HiMenuAlt3
      className="menu-bars"
      size={20}
      onClick={() => setOpen(!open)}
    />
  );

  const Open = (
    <AiOutlineCloseCircle
      className="menu-close"
      size={20}
      onClick={() => setOpen(!open)}
    />
  );

 const closeMobileMenu = () => {
     setOpen(false);
 }

  return (
    <div className="mobile-nav">
      {open && <NavLinks isMobile={true}  closeMobileMenu={closeMobileMenu} />}
      {open ? Open : Close}
    </div>
  );
};
