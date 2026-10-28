import React, { useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { faculty } from "../data";
import Icon from "../components/Icon";

export default function Faculty() {
  const [filter, setFilter] = useState("All");
  const roles = ["All","Professor","Associate Professor","Assistant Professor"];
  const shown = faculty.filter(f => filter === "All" || f.role === filter);
  return <>
    <PageHero title="Faculty & Staff" text="Meet the academic community guiding teaching, research and innovation." />
    <section className="section"><div className="container">
      <div className="section-head-row"><SectionTitle eyebrow="Academic Community" title="Faculty directory" /><div className="filters">{roles.map(r=><button className={filter===r?"selected":""} key={r} onClick={()=>setFilter(r)}>{r}</button>)}</div></div>
      <div className="faculty-grid">{shown.map(f=><article className="faculty-card" key={f.email}><div className="faculty-photo">{f.initials}</div><div><span className="tag">{f.role}</span><h3>{f.name}</h3><p>{f.area}</p><a href={`mailto:${f.email}`}><Icon name="mail" size={15}/> {f.email}</a><button className="text-link">View profile <Icon name="arrow" size={15}/></button></div></article>)}</div>
    </div></section>
  </>;
}
