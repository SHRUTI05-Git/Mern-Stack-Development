import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { programs } from "../data";
import Icon from "../components/Icon";

export default function Academics() {
  return <>
    <PageHero title="Academics" text="Programmes, curriculum and academic resources for every stage of the CSE journey." />
    <section className="section"><div className="container"><SectionTitle eyebrow="Programmes" title="Choose your academic pathway" />
      <div className="cards-3">{programs.map(p => <article className="program-card large" key={p.title}><span className="tag">{p.type}</span><h3>{p.title}</h3><p>{p.description}</p><div className="details-grid"><span><b>Duration</b>{p.duration}</span><span><b>Intake</b>{p.intake}</span><span><b>Mode</b>Full Time</span></div><button className="btn outline">View Curriculum <Icon name="arrow" size={16}/></button></article>)}</div>
    </div></section>
    <section className="section soft-bg"><div className="container"><SectionTitle eyebrow="Academic Resources" title="Everything students need in one place" />
      <div className="resource-grid">{["Curriculum & Syllabus","Academic Calendar","Timetable","Examination & Results","Student Handbook","Forms & Downloads"].map((x,i)=><div className="resource-card" key={x}><div className="resource-icon">0{i+1}</div><div><h3>{x}</h3><p>Access department information and academic resources.</p></div><Icon name="external" size={17}/></div>)}</div>
    </div></section>
  </>;
}
