import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { facilities } from "../data";

export default function Facilities() {
  return <>
    <PageHero title="Facilities & Laboratories" text="Purpose-built learning and research environments for modern computing." />
    <section className="section"><div className="container"><SectionTitle eyebrow="Infrastructure" title="Learn by doing" />
      <div className="facility-grid">{facilities.map(([title,text],i)=><article className="facility-card" key={title}><div className="facility-art"><span>LAB {String(i+1).padStart(2,"0")}</span></div><div className="facility-copy"><span className="eyebrow">Laboratory</span><h3>{title}</h3><p>{text}</p><button className="text-link">View facility →</button></div></article>)}</div>
    </div></section>
  </>;
}
