'use client';

import { FaBook, FaBriefcase, FaCode, FaTrophy, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import innovasive from "../../../public/innovasive.png"
import uxasso from "../../../public/uxasso.jpg"

export default function AboutPage() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>I&apos;m passionate about Product Management, Business Development, Quality Assurance, and UX Research.</p>
        <p>As the former vice president of SAMO SIT, I have experience working with cross-functional teams and organizing activities for SIT KMUTT students. I recently completed the Google Project Management Career Certificate,</p>
        <p>which covers traditional and Agile project management. My intern roles as a software developer and UX researcher have refined my technical and user-centered design skills. Additionally, participating in Hackathons and Startup Competitions has enhanced my creativity, solution development, and product creation abilities</p>
      </section>

      {/* EDUCATION */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBook />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">King Mongkut’s University of Technology Thonburi, Bangkok, Thailand</h4>
            <span>2022 – Present</span>
            <p className="timeline-text">Bachelor of Science in Information Technology, Recipient of Saed Lueng Rueng Rung and Chiaranaiphet Scholarship</p>
            <p className="timeline-text" style={{ marginTop: '10px' }}><strong>Honors:</strong> SIT KMUTT Student Hall of Fame, Certificate of Recognition for Outstanding Student Activities</p>
            <p className="timeline-text"><strong>Certifications:</strong> Google Project Management Certificate (Coursera), Product Management Bootcamp (8th) from Skooldio (Both Discovery and Delivery phase)</p>
          </li>
        </ol>
      </section>

      {/* SKILLS */}
      <section className="service">
        <h3 className="h3 service-title">Skills & Proficiencies</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <FaCode size={40} style={{ color: '#06C755' }} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Hard Skills</h4>
              <p className="service-item-text">Market Research, Competitive Analysis, Agile & Scrum Methodology, Data Analysis and Technical Understanding</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FaBriefcase size={40} style={{ color: '#06C755' }} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Soft Skills</h4>
              <p className="service-item-text">Leadership, Adaptability, Communication, Collaboration, Analytical thinking and Problem-Solving</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FaCheckCircle size={40} style={{ color: '#06C755' }} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Tools</h4>
              <p className="service-item-text">Jira, Miro, Trello, Figma, Power BI, Google Sheets, Google Slides and Microsoft Office</p>
            </div>
          </li>
        </ul>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBriefcase />
          </div>
          <h3 className="h3">Work Experiences</h3>
        </div>

        <ol className="timeline-list">
          
          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                    <Image 
                        src="https://www.infoquest.co.th/dxt-content/uploads/2020/03/20200323_PRG_SCB_FC_AbbreviatedLogo_Horizontal_PurpleBG-scaled.jpg" 
                        alt="SCB" 
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>QA Automation Engineer (Contract) - Siam Commercial Bank Public Company Limited</h4>
            </div>
            <span>Sep – Feb 2025</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Developed automated test scripts to validate core banking modules, improving test efficiency and regression coverage</li>
              <li className="timeline-text">Performed API and backend testing to ensure data integrity and system reliability</li>
            </ul>
          </li>

          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                    <Image 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_znZ5Zxs5H0Ujjg3RnuH_P_ZsY3iZ4TjIdA&s" 
                        alt="Skooldio" 
                        fill
                        style={{ objectFit: 'contain', background: 'white' }}
                    />
                </div>
                <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>Business Development Intern – Skooldio Company Limited</h4>
            </div>
            <span>Jun - Aug 2025</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Built n8n automation workflows to optimize internal BD processes, reducing manual workload by 20% (Work on Skooldio Hackathon)</li>
              <li className="timeline-text">Analyzed market and product performance data to identify growth opportunities</li>
              <li className="timeline-text">Translated data insights into actionable recommendations to support decision-making for internal stakeholders</li>
            </ul>
          </li>

          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                    <Image 
                        src={innovasive} 
                        alt="Innovasive" 
                        fill
                        style={{ objectFit: 'contain', background: 'white' }}
                    />
                </div>
                <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>Product Owner Cooperative Intern - Innovasive Company Limited</h4>
            </div>
            <span>Jan - May 2025</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Translated stakeholder and user needs into clear user stories and acceptance criteria</li>
              <li className="timeline-text">Prioritized product backlog based on user impact, feasibility, and business goals</li>
              <li className="timeline-text">Worked closely with UX and engineering teams to iterate features through feedback and testing</li>
              <li className="timeline-text">Supported feature launches from discovery to release, including post-launch evaluation and improvement</li>
            </ul>
          </li>

          <li className="timeline-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                    <Image 
                        src={uxasso} 
                        alt="ADIREK & CO" 
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>UX Researcher Intern - ADIREK & CO Company Limited</h4>
            </div>
            <span>Jun - Jul 2024</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Conducted usability testing and synthesized user feedback into actionable insights</li>
              <li className="timeline-text">Collaborated with product and design teams to inform UI improvements and product decisions</li>
            </ul>
          </li>

          <li className="timeline-item">
             <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                    <Image 
                        src={innovasive} 
                        alt="Innovasive" 
                        fill
                        style={{ objectFit: 'contain', background: 'white' }}
                    />
                </div>
                <h4 className="h4 timeline-item-title" style={{ marginBottom: 0 }}>Frontend Developer Intern - Innovasive Company Limited</h4>
            </div>
            <span>Jun - Jul 2023</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Built responsive web interfaces and collaborated with designers and product teams to implement user requirements</li>
            </ul>
          </li>

        </ol>
      </section>

      {/* EXTRACURRICULAR */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaTrophy />
          </div>
          <h3 className="h3">Extracurricular Activities & Achievement</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Capstone Project, Yakteaw (AI Travel Recommendation Platform)</h4>
            <span>Aug 2025 - Present</span>
            <ul style={{ marginLeft: '20px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Focused on solving user travel decision pain points through personalized recommendations</li>
              <li className="timeline-text">Evaluated AI output quality and iterated prompts to improve recommendation relevance</li>
              <li className="timeline-text"><strong>Techstack:</strong> Nuxt.js, Tailwind CSS, Golang, Langchain, GitLab CI/CD, Docker, Gemini and Google Maps API</li>
            </ul>
          </li>

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