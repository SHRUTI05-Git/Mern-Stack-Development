import React, { useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { news } from "../data";
import Icon from "../components/Icon";

export default function News() {
  const [filter,setFilter]=useState("All");
  const tags=["All","Workshop","Achievement","Research","Seminar"];
  const shown=filter==="All"?news:news.filter(n=>n.tag===filter);
  return <>
    <PageHero title="News & Events" text="Department announcements, events, achievements, seminars and research updates." />
    <section className="section"><div className="container"><div className="section-head-row"><SectionTitle eyebrow="Updates" title="What's happening at CSE?" /><div className="filters">{tags.map(t=><button className={filter===t?"selected":""} key={t} onClick={()=>setFilter(t)}>{t}</button>)}</div></div><div className="news-grid large">{shown.map(n=><article className="news-card" key={n.title}><div className="news-date"><Icon name="calendar" size={15}/>{n.date}<span>{n.tag}</span></div><h3>{n.title}</h3><p>{n.text}</p><button className="text-link">Read full update <Icon name="arrow" size={15}/></button></article>)}</div></div></section>
  </>;
}
