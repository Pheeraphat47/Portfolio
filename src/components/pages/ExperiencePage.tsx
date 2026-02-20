'use client';

import Image from 'next/image';
import innovasive from "../../../public/innovasive.png"
import uxasso from "../../../public/uxasso.jpg"

export default function ExperiencePage() {
  return (
    <article className="experience active">
      <header>
        <h2 className="h2 article-title">Work Experience</h2>
        <p style={{ marginTop: '10px' }} className="service-item-text">My professional journey in the tech industry.</p>
      </header>

      <section className="timeline">

        <ol className="timeline-list">
          
          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }}>
                    <Image 
                        src="https://www.infoquest.co.th/dxt-content/uploads/2020/03/20200323_PRG_SCB_FC_AbbreviatedLogo_Horizontal_PurpleBG-scaled.jpg" 
                        alt="SCB" 
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div>
                  <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>QA Automation Engineer (Contract)</h4>
                  <span style={{ fontSize: '14px', color: '#666' }}>Siam Commercial Bank Public Company Limited</span>
                </div>
            </div>
            <span className="timeline-date">Sep – Feb 2025</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Developed automated test scripts to validate core banking modules, improving test efficiency and regression coverage</li>
              <li className="timeline-text">Performed API and backend testing to ensure data integrity and system reliability</li>
            </ul>
          </li>

          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }}>
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_znZ5Zxs5H0Ujjg3RnuH_P_ZsY3iZ4TjIdA&s" 
                        alt="Skooldio" 
                        fill
                        style={{ objectFit: 'contain', background: 'white' }}
                    />
                </div>
                 <div>
                  <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>Business Development Intern</h4>
                  <span style={{ fontSize: '14px', color: '#666' }}>Skooldio Company Limited</span>
                </div>
            </div>
            <span className="timeline-date">Jun - Aug 2025</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Built n8n automation workflows to optimize internal BD processes, reducing manual workload by 20% (Work on Skooldio Hackathon)</li>
              <li className="timeline-text">Analyzed market and product performance data to identify growth opportunities</li>
              <li className="timeline-text">Translated data insights into actionable recommendations to support decision-making for internal stakeholders</li>
            </ul>
          </li>

          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }}>
                   <Image 
                        src={innovasive} 
                        alt="Innovasive" 
                        fill
                        style={{ objectFit: 'contain', background: 'white' }}
                    />
                </div>
                 <div>
                  <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>Product Owner Cooperative Intern</h4>
                  <span style={{ fontSize: '14px', color: '#666' }}>Innovasive Company Limited</span>
                </div>
            </div>
            <span className="timeline-date">Jan - May 2025</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Translated stakeholder and user needs into clear user stories and acceptance criteria</li>
              <li className="timeline-text">Prioritized product backlog based on user impact, feasibility, and business goals</li>
              <li className="timeline-text">Worked closely with UX and engineering teams to iterate features through feedback and testing</li>
              <li className="timeline-text">Supported feature launches from discovery to release, including post-launch evaluation and improvement</li>
            </ul>
          </li>

          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }}>
                    <Image 
                        src={uxasso} 
                        alt="ADIREK & CO" 
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div>
                  <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>UX Researcher Intern</h4>
                  <span style={{ fontSize: '14px', color: '#666' }}>ADIREK & CO Company Limited</span>
                </div>
            </div>
            <span className="timeline-date">Jun - Jul 2024</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Conducted usability testing and synthesized user feedback into actionable insights</li>
              <li className="timeline-text">Collaborated with product and design teams to inform UI improvements and product decisions</li>
            </ul>
          </li>

          <li className="timeline-item">
             <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }}>
                    <Image 
                        src={innovasive} 
                        alt="Innovasive" 
                        fill
                        style={{ objectFit: 'contain', background: 'white' }}
                    />
                </div>
                <div>
                  <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>Frontend Developer Intern</h4>
                  <span style={{ fontSize: '14px', color: '#666' }}>Innovasive Company Limited</span>
                </div>
            </div>
            <span className="timeline-date">Jun - Jul 2023</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Built responsive web interfaces and collaborated with designers and product teams to implement user requirements</li>
            </ul>
          </li>

        </ol>
      </section>
    </article>
  );
}