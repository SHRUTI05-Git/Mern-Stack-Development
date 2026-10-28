import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { department } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-about">
          <div className="footer-brand"><div className="brand-mark small">CSE</div><strong>{department.university}</strong></div>
          <p>Building future-ready computing professionals through quality education, research, innovation and industry collaboration.</p>
          <div className="socials"><span>in</span><span>f</span><span>𝕏</span><span>▶</span></div>
        </div>
        <div>
          <h4>Department</h4>
          <Link to="/about">About CSE</Link>
          <Link to="/faculty">Faculty</Link>
          <Link to="/research">Research</Link>
          <Link to="/facilities">Facilities</Link>
        </div>
        <div>
          <h4>Academics</h4>
          <Link to="/academics">Programmes</Link>
          <Link to="/academics">Curriculum</Link>
          <Link to="/academics">Academic Calendar</Link>
          <Link to="/students">Student Resources</Link>
        </div>
        <div>
          <h4>Information</h4>
          <Link to="/news">News & Events</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/students">Downloads</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p className="footer-contact"><Icon name="location" size={16} /> {department.address}</p>
          <p className="footer-contact"><Icon name="phone" size={16} /> {department.phone}</p>
          <p className="footer-contact"><Icon name="mail" size={16} /> {department.email}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Department of Computer Science & Engineering. All Rights Reserved.</span>
          <span>Designed for academic & professional use.</span>
        </div>
      </div>
    </footer>
  );
}
