'use client';

import { FaTrophy } from 'react-icons/fa';

export default function ActivityPage() {
  return (
    <article className="activity active">
      <header>
        <h2 className="h2 article-title">Extracurricular Activities</h2>
         <p style={{ marginTop: '10px' }} className="service-item-text">Leadership roles and achievements beyond the classroom.</p>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaTrophy />
          </div>
          <h3 className="h3">Activities & Achievements</h3>
        </div>

        <ol className="timeline-list">
      
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Vice President (SAMOSIT – School of Information Technology Student Association)</h4>
            <span>Jun 2023 - Jun 2024</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Served as a student representative and primary liaison with faculty and university student organizations</li>
              <li className="timeline-text">Led planning and execution of faculty-level activities, managing teams and timelines</li>
              <li className="timeline-text">Aligned budgets and resources to support key events such as IT3K, SIT Open House, IT Starterpack, and SIT HelloWorld</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">1st Runner-Up in Bangkok Climathon Environhack</h4>
            <span>Oct 2022</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Competed among 9 teams in the final round, conducted in-depth SWOT Analysis to address the challenge of augmenting green spaces in Bangkok. Assisted in operational planning for the project&apos;s seamless execution</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">1st Runner-Up in Charm Case Competition at Chulalongkorn University</h4>
            <span>Aug - Sep 2022</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Competed among 51 University teams, created a competitive strategy for the Chula Co-op Store business</li>
            </ul>
          </li>
        </ol>
      </section>
    </article>
  );
}