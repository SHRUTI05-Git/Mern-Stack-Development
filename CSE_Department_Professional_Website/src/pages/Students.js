import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Icon from "../components/Icon";

const items = ["Student Clubs & Chapters","Coding & Hackathons","Internships & Projects","Scholarships & Awards","Student Forms","Career Resources","Anti-Ragging Information","Grievance Redressal"];

export default function Students() {
  return <>
    <PageHero title="Student Corner" text="A central hub for student activities, opportunities, resources and support." />
    <section className="section"><div className="container"><SectionTitle eyebrow="Student Life" title="Learn beyond the classroom" />
      <div className="student-hero"><div><h2>Build. Compete. Collaborate.</h2><p>Join technical clubs, participate in hackathons, attend talks and workshops, and turn classroom knowledge into meaningful projects.</p></div><div className="student-badge">CSE<br/><span>STUDENT<br/>COMMUNITY</span></div></div>
    </div></section>
    <section className="section soft-bg"><div className="container"><SectionTitle eyebrow="Resources" title="Student services" /><div className="resource-grid">{items.map((x,i)=><div className="resource-card" key={x}><div className="resource-icon">{String(i+1).padStart(2,"0")}</div><div><h3>{x}</h3><p>Information, forms and department guidance.</p></div><Icon name="arrow" size={17}/></div>)}</div></div></section>
  </>;
}
