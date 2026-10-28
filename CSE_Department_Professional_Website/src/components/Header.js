import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";
import { department } from "../data";

const nav = [
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Faculty", "/faculty"],
  ["Research", "/research"],
  ["Students", "/students"],
  ["Facilities", "/facilities"],
  ["Placements", "/placements"],
  ["News & Events", "/news"],
  ["Contact", "/contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <div className="top-contact">
            <span><Icon name="mail" size={14} /> {department.email}</span>
            <span><Icon name="phone" size={14} /> {department.phone}</span>
          </div>
          <div className="top-links">
            <Link to="/students">Student Portal</Link><span>|</span>
            <Link to="/alumni">Alumni</Link><span>|</span>
            <Link to="/contact">Careers</Link>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <div className="brand-mark">CSE</div>
            <div>
              <strong>{department.university}</strong>
              <span>Department of Computer Science & Engineering</span>
            </div>
          </Link>

          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Icon name={open ? "close" : "menu"} />
          </button>

          <nav className={`main-nav ${open ? "open" : ""}`}>
            {nav.map(([label, path]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)}
                className={({isActive}) => isActive ? "active" : ""}>
                {label}
              </NavLink>
            ))}
            <Link className="nav-search" to="/contact"><Icon name="search" size={19} /></Link>
          </nav>
        </div>
      </header>
    </>
  );
}
