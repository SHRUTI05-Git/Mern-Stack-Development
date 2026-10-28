import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Stats from "../components/Stats";
import SectionTitle from "../components/SectionTitle";
import { news, programs, researchAreas, recruiters } from "../data";

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-shape shape-one"></div>
      <div className="hero-shape shape-two"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow light">Department of Computer Science & Engineering</span>
          <h1>Learn. Build. <span>Innovate.</span></h1>
          <p>Preparing the next generation of computing professionals, researchers and technology leaders through rigorous academics, hands-on learning and meaningful research.</p>
          <div className="hero-actions">
            <Link to="/academics" className="btn primary">Explore Programmes <Icon name="arrow" size={17}/></Link>
            <Link to="/about" className="btn ghost">Discover CSE</Link>
          </div>
          <div className="hero-mini">
            <span>NAAC / NBA aligned academics</span><span>•</span><span>Research & Innovation</span><span>•</span><span>Industry Connect</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="campus-art">
            <div className="campus-sky"></div>
            <div className="campus-building">
              <div className="building-sign">COMPUTER SCIENCE<br/>& ENGINEERING</div>
              <div className="windows">{Array.from({length: 18}).map((_,i)=><i key={i}></i>)}</div>
            </div>
            <div className="campus-ground"></div>
          </div>
          <div className="hero-card-footer"><span>Department of CSE</span><strong>Excellence in Computing Education</strong></div>
        </div>
      </div>
    </section>

    <Stats />

    <section className="section about-preview">
      <div className="container two-col">
        <div className="visual-panel">
          <div className="visual-label">CSE • EST. 2001</div>
          <div className="visual-title">Where ideas become technology.</div>
          <div className="visual-circles"><span></span><span></span><span></span></div>
        </div>
        <div>
          <SectionTitle eyebrow="About the Department" title="A place to learn, question and create." text="The Department of Computer Science & Engineering combines strong fundamentals with contemporary technology, research exposure and practical project experience." />
          <div className="feature-list">
            <div><b>01</b><span><strong>Academic Excellence</strong> Curriculum designed around foundations, problem solving and emerging technologies.</span></div>
            <div><b>02</b><span><strong>Research Culture</strong> Faculty and students work on real-world problems across multiple computing domains.</span></div>
            <div><b>03</b><span><strong>Industry Readiness</strong> Projects, internships, expert talks and industry collaboration prepare students for careers.</span></div>
          </div>
          <Link to="/about" className="text-link">Read department profile <Icon name="arrow" size={17}/></Link>
        </div>
      </div>
    </section>

    <section className="section soft-bg">
      <div className="container">
        <SectionTitle eyebrow="Academics" title="Programmes designed for the future" text="Choose a pathway for undergraduate learning, advanced study or research." />
        <div className="cards-3">
          {programs.map((p, i) => <article className="program-card" key={p.title}>
            <div className="card-number">0{i+1}</div>
            <span className="tag">{p.type}</span>
            <h3>{p.title}</h3><p>{p.description}</p>
            <div className="meta-row"><span>{p.duration}</span><span>Intake: {p.intake}</span></div>
            <Link to="/academics" className="text-link">Programme details <Icon name="arrow" size={16}/></Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Research & Innovation" title="Explore our research ecosystem" text="Interdisciplinary work across intelligent systems, secure computing, data, networks and scalable technologies." />
        <div className="research-grid">
          {researchAreas.map(([short, title, text]) => <div className="research-card" key={title}>
            <div className="research-icon">{short}</div><div><h3>{title}</h3><p>{text}</p></div><Icon name="arrow" size={17}/>
          </div>)}
        </div>
        <div className="center-link"><Link to="/research" className="btn outline">View Research Areas</Link></div>
      </div>
    </section>

    <section className="section soft-bg">
      <div className="container">
        <div className="section-head-row"><SectionTitle eyebrow="Latest Updates" title="News, events & announcements" /><Link to="/news" className="text-link">View all <Icon name="arrow" size={16}/></Link></div>
        <div className="news-grid">
          {news.slice(0,3).map(n => <article className="news-card" key={n.title}>
            <div className="news-date"><Icon name="calendar" size={15}/>{n.date}<span>{n.tag}</span></div>
            <h3>{n.title}</h3><p>{n.text}</p><Link to="/news" className="text-link">Read more <Icon name="arrow" size={15}/></Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="placement-banner">
      <div className="container placement-inner">
        <div><span className="eyebrow light">Career Outcomes</span><h2>Connect learning with opportunity.</h2><p>Our students build careers across software engineering, data, AI, security, consulting and research.</p></div>
        <div className="placement-numbers"><div><strong>₹52 LPA</strong><span>Highest package*</span></div><div><strong>₹9.8 LPA</strong><span>Average package*</span></div><div><strong>95%</strong><span>Placement rate*</span></div></div>
        <Link to="/placements" className="btn light-btn">Placement Details <Icon name="arrow" size={16}/></Link>
      </div>
    </section>

    <section className="section recruiters">
      <div className="container">
        <SectionTitle eyebrow="Industry Connect" title="Our students work with leading organisations" align="center" />
        <div className="logo-row">{recruiters.map(r => <div key={r}>{r}</div>)}</div>
      </div>
    </section>
  </>;
}
