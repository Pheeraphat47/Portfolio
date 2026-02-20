'use client';

import { useState } from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "IT Bangmod Kradan Kanban",
      category: "web development",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F29ac087d-0260-45d9-aece-647ea06c448a%2Fimage.png?table=block&id=121e98c0-c946-805e-bf6a-e7dca267bf6a&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=720&userId=&cache=v2",
      link: "https://tattered-hardboard-505.notion.site/Portfolio-6ec0270e2b7e44b0b5f98abd67c68002?p=119e98c0c946805eb253e28fc4b1477a&pm=c"
    },
    {
      id: 2,
      title: "Yaktiow Application",
      category: "web development",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F3eef9c75-ef5c-4e61-a284-4dca2d6a0cac%2Fimage.png?table=block&id=102e98c0-c946-8053-a928-d1cb60534d38&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=720&userId=&cache=v2",
      link: "#"
    },
    {
      id: 3,
      title: "MOTTY",
      category: "web design",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F6008f386-c8a3-43ac-8fe0-3e564a560505%2FUntitled.png?table=block&id=f6f9ec22-1acc-4f8a-95cf-633fd1a8d885&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1400&userId=&cache=v2",
      link: "#"
    },
    {
      id: 4,
      title: "BeatBuddy",
      category: "applications",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F492d8d65-e9a2-40ca-bd1f-e2ecac60a347%2FScreenshot_2024-06-30_201310-min.png?table=block&id=119e98c0-c946-800d-8377-e2317044d326&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=720&userId=&cache=v2",
      link: "#"
    },
    {
      id: 5,
      title: "FINVER - Dating App Simulator",
      category: "web design",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F8742dfce-8fed-47de-9fee-dff539d3012d%2FScreenshot_2024-06-30_201619-min.png?table=block&id=132190fd-5af9-40b3-92c3-5a17bfba73eb&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=720&userId=&cache=v2",
      link: "#"
    },
    {
      id: 6,
      title: "Database for Car Showroom Management System",
      category: "web design",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F07083457-1a7d-4027-920b-ca3d2330ffb7%2FScreenshot_2024-06-30_201820-min.png?table=block&id=8e284c7e-debe-4857-ae94-7d5977d4e414&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=910&userId=&cache=v2",
      link: "#"
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All' },
    { id: 'web design', label: 'Web Design' },
    { id: 'applications', label: 'Applications' },
    { id: 'web development', label: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIsSelectOpen(false);
  };

  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="timeline" style={{ marginBottom: '30px' }}>
        <h3 className="h3">Featured Capstone Project</h3>
           <div className="timeline-item" style={{ marginTop: '20px', padding: '20px', background: 'var(--border-gradient-onyx)', borderRadius: '14px', border: '1px solid var(--jet)' }}>
            <h4 className="h4 timeline-item-title" style={{ fontSize: '1.25rem', color: 'var(--orange-yellow-crayola)' }}>Yakteaw (AI Travel Recommendation Platform)</h4>
            <span style={{ color: 'var(--vegas-gold)', fontWeight: 500 }}>Aug 2025 - Present</span>
            <ul style={{ marginLeft: '20px', marginTop: '10px', listStyleType: 'disc', color: 'var(--light-gray)' }}>
              <li className="timeline-text">Focused on solving user travel decision pain points through personalized recommendations</li>
              <li className="timeline-text">Evaluated AI output quality and iterated prompts to improve recommendation relevance</li>
              <li className="timeline-text"><strong>Techstack:</strong> Nuxt.js, Tailwind CSS, Golang, Langchain, GitLab CI/CD, Docker, Gemini and Google Maps API</li>
            </ul>
          </div>
      </section>

      <section className="projects">
        <ul className="filter-list">
          {filterCategories.map((category) => (
            <li key={category.id} className="filter-item">
              <button 
                className={activeFilter === category.id ? 'active' : ''}
                onClick={() => handleFilterChange(category.id)}
                data-filter-btn
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button 
            className={`filter-select ${isSelectOpen ? 'active' : ''}`} 
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            data-select
          >
            <div className="select-value" data-select-value>
              {filterCategories.find(cat => cat.id === activeFilter)?.label || 'Select Category'}
            </div>
            <div className="select-icon">
              ▼
            </div>
          </button>

          <ul className="select-list">
            {filterCategories.map((category) => (
              <li key={category.id} className="select-item">
                <button onClick={() => handleFilterChange(category.id)} data-select-item>
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
              <button
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                onClick={() => setModalProject(project)}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    👁️
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    style={{
                      width: '100%',
                      borderRadius: 12,
                      objectFit: 'cover'
                    }}
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{filterCategories.find(cat => cat.id === project.category)?.label}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {modalProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            background: '#222',
            borderRadius: 16,
            padding: 24,
            maxWidth: 600,
            width: '90vw',
            maxHeight: '90vh',
            position: 'relative',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            color: '#fff'
          }}>
            <button
              onClick={() => setModalProject(null)}
              style={{
                position: 'absolute',
          top: 12,
          right: 12,
          background: '#444',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 36,
          height: 36,
          fontSize: 20,
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
              }}
            >
              ×
            </button>
            <figure style={{ marginBottom: 16 }}>
              <Image
                src={modalProject.image}
                alt={modalProject.title}
                width={600}
                height={400}
                style={{
                  width: '100%',
                  borderRadius: 12,
                  objectFit: 'cover'
                }}
              />
            </figure>
            <h2 style={{ marginBottom: 8 }}>{modalProject.title}</h2>
            <p style={{ marginBottom: 8, color: '#ffd700' }}>
              {filterCategories.find(cat => cat.id === modalProject.category)?.label}
            </p>
            {modalProject.link !== "#" && (
              <a
                href={modalProject.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: '#007bff',
                  color: '#fff',
                  borderRadius: 8,
                  textDecoration: 'none',
                  marginTop: 16
                }}
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}