import React from 'react';
import VideoList from './VideoList';

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">LEARN TOGETHER</p>
        <h1>Ideas worth<br /><em>sharing.</em></h1>
        <p>Discover lessons, demos, and useful ideas from the Learner Space community.</p>
        <a className="primary-button hero-button" href="/upload">Share a video <span>&#8599;</span></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="art-play">&#9654;</div>
        <span className="art-star star-one">&#10033;</span><span className="art-star star-two">&#10033;</span><span className="art-dot" />
      </div>
    </section>
    <section className="videos-section">
      <div className="section-heading"><div><p className="eyebrow">COMMUNITY LIBRARY</p><h2>Recent videos</h2></div><span className="section-caption">Fresh ideas, shared by learners</span></div>
      <VideoList />
    </section>
  </>;
}
