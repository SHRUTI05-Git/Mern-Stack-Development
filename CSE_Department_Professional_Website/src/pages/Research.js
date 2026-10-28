import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { researchAreas } from "../data";

export default function Research() {
  return <>
    <PageHero title="Research & Innovation" text="Research that connects computing theory with real-world impact." />
    <section className="section"><div className="container"><SectionTitle eyebrow="Research Areas" title="Explore our areas of expertise" />
      <div className="research-grid large">{researchAreas.map(([short,title,text])=><article className="research-card" key={title}><div className="research-icon">{short}</div><div><h3>{title}</h3><p>{text}</p><span className="text-link">Explore area →</span></div></article>)}</div>
    </div></section>
    <section className="section soft-bg"><div className="container cards-3"><div className="metric-card"><b>150+</b><span>Research publications</span></div><div className="metric-card"><b>20+</b><span>Funded projects</span></div><div className="metric-card"><b>30+</b><span>Research scholars</span></div></div></section>
    <section className="section"><div className="container"><SectionTitle eyebrow="Research Culture" title="From laboratory ideas to measurable impact." text="Students can participate in faculty-led projects, undergraduate research, competitions, innovation activities and interdisciplinary collaborations." /><div className="timeline"><div><b>01</b><span>Identify a problem</span></div><div><b>02</b><span>Build & experiment</span></div><div><b>03</b><span>Publish & present</span></div><div><b>04</b><span>Translate to impact</span></div></div></div></section>
  </>;
}
