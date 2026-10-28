import React, { useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Icon from "../components/Icon";
import { department } from "../data";

export default function Contact() {
  const [sent,setSent]=useState(false);
  const submit=(e)=>{e.preventDefault();setSent(true);e.target.reset();};
  return <>
    <PageHero title="Contact Us" text="Reach the Department of Computer Science & Engineering." />
    <section className="section"><div className="container contact-grid">
      <div><SectionTitle eyebrow="Get in touch" title="We would be happy to hear from you." /><div className="contact-list"><div><Icon name="location"/><span><b>Address</b>{department.address}</span></div><div><Icon name="phone"/><span><b>Phone</b>{department.phone}</span></div><div><Icon name="mail"/><span><b>Email</b>{department.email}</span></div></div><div className="map-placeholder"><span>MAP / CAMPUS LOCATION</span></div></div>
      <form className="contact-form" onSubmit={submit}><h2>Send an enquiry</h2><label>Name<input required placeholder="Your name"/></label><label>Email<input type="email" required placeholder="you@example.com"/></label><label>Subject<input required placeholder="How can we help?"/></label><label>Message<textarea required rows="6" placeholder="Write your message"></textarea></label><button className="btn primary" type="submit">Send Message <Icon name="arrow" size={16}/></button>{sent&&<div className="success">Thank you. Your enquiry has been recorded for demonstration.</div>}</form>
    </div></section>
  </>;
}
