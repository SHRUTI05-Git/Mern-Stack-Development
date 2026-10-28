import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { recruiters } from "../data";

export default function Placements() {
  return <>
    <PageHero title="Placements & Careers" text="Preparing students for meaningful careers in technology, research and entrepreneurship." />
    <section className="section"><div className="container"><div className="placement-stats-grid"><div><b>95%</b><span>Placement Rate*</span></div><div><b>₹52 LPA</b><span>Highest Package*</span></div><div><b>₹9.8 LPA</b><span>Average Package*</span></div><div><b>80+</b><span>Recruiting Organisations*</span></div></div></div></section>
    <section className="section soft-bg"><div className="container"><SectionTitle eyebrow="Recruiters" title="Industry connections" /><div className="logo-row large">{recruiters.map(r=><div key={r}>{r}</div>)}</div><p className="small-note">* Sample figures for website demonstration. Replace with official placement statistics before publishing.</p></div></section>
    <section className="section"><div className="container cards-3"><div className="metric-card"><b>Internships</b><span>Industry exposure through internships and live projects.</span></div><div className="metric-card"><b>Career Skills</b><span>Technical, communication and problem-solving preparation.</span></div><div className="metric-card"><b>Alumni Network</b><span>Connect with alumni working across technology domains.</span></div></div></section>
  </>;
}
