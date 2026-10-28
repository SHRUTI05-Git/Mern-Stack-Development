import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return <>
    <PageHero title="About the Department" text="Learn about our academic vision, mission, values and leadership." />
    <section className="section"><div className="container two-col">
      <div><SectionTitle eyebrow="Who We Are" title="Computing education with purpose." />
        <p className="lead">The Department of Computer Science & Engineering is committed to creating an environment where students develop strong fundamentals, practical skills, research thinking and professional responsibility.</p>
        <p>Our academic programmes span computer science foundations, software engineering, data, artificial intelligence, cyber security, networks, cloud computing and emerging technologies. Students learn through lectures, laboratories, projects, internships, seminars and research activities.</p>
      </div>
      <div className="info-panel"><span className="eyebrow">Department at a glance</span><div className="glance"><b>25+</b><span>Years of academic excellence</span></div><div className="glance"><b>35+</b><span>Faculty & academic staff</span></div><div className="glance"><b>750+</b><span>Students across programmes</span></div></div>
    </div></section>
    <section className="section soft-bg"><div className="container cards-2">
      <div className="vision-card"><span className="eyebrow">Vision</span><h2>To be a centre of excellence in computing education, research and innovation.</h2></div>
      <div className="vision-card"><span className="eyebrow">Mission</span><ul><li>Deliver rigorous and relevant computing education.</li><li>Promote impactful research and innovation.</li><li>Develop ethical, adaptable and socially responsible professionals.</li><li>Build strong academic, industry and community partnerships.</li></ul></div>
    </div></section>
    <section className="section"><div className="container">
      <SectionTitle eyebrow="Message from the Head" title="Welcome to the Department of CSE" />
      <div className="hod-layout"><div className="portrait">RS</div><div><p className="lead">“Our goal is to create a learning environment where students are encouraged to ask difficult questions, experiment boldly and build technology that matters.”</p><p>We welcome students, researchers, alumni and industry partners to be part of our growing academic community.</p><strong>Dr. R. Sharma</strong><span className="role">Professor & Head, Department of CSE</span></div></div>
    </div></section>
  </>;
}
