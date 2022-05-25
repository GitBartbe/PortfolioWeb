import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

import "./MobileNav.scss";

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

  return (
    <div className="mobile-nav-container">
      <div className={open ? "mobile-nav" : "mobile-nav mobile-nav-close"}>
        <NavLinks closeMobileMenu={setOpen} />
      </div>
      <div className="mobile-icon-container">{open ? Open : Close}</div>
    </div>
  );
};
