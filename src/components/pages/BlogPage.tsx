'use client';

import { useState } from 'react';
import Image from 'next/image';

type BlogPost = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  text: string;
};

export default function BlogPage() {
  const [modalPost, setModalPost] = useState<BlogPost | null>(null);
  const blogPosts = [
    {
      id: 1,
      title: "ChoiceIsYours 2024 - Semi-Finalist",
      category: "Hackathons",
      date: "Oct 16, 2024",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2Ff60c9553-a860-4afd-9636-7106b3f932d9%2Fimage.png?table=block&id=121e98c0-c946-8046-ad14-fb4022bdadf0&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=770&userId=&cache=v2",
      text: "ChoiceIsYours 2024 is a competition focused on solving social and environmental issues through innovative technology. The competition brings together teams from various backgrounds to develop solutions that contribute to a more sustainable future"
    },
    {
      id: 2,
      title: "Rethink-Restart Workshop 2024, KMUTTACT4S",
      category: "Organizer",
      date: "Aug 26, 2024",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2Ff530c78c-e564-40d9-91d6-3d7af181a193%2Fimage.png?table=block&id=121e98c0-c946-80f0-ba7b-f622c9579313&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=2000&userId=&cache=v2",
      text: "- Organize a workshop with collaboration with speakers from Adirek.co\n- Engaged in learning about Systematic Thinking and the IPO Model (Input-Process-Output)\n- Work as Organizer for this activity and be a staff in KMUTTACTS"
    },
    {
      id: 3,
      title: "KMUTT Startup Playground 2025",
      category: "Vice President",
      date: "June 12, 2024",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F27e8ff6d-854f-4f50-80f0-17a0f2022574%2FUntitled.png?table=block&id=9b0a626e-7554-4108-99f7-9b5eafe06840&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1420&userId=&cache=v2",
      text: "- Served as Vice President and Project Coordinator for the KMUTT Startup Playground event, a platform for business innovation and startup development.\n\nKey Activities:\n\n- Business Innovation: Facilitated hands-on activities for ideating innovative business solutions.\n- Investor Pitching: Arranged pitching sessions to impart effective presentation skills to investors.\n- Networking: Created opportunities for interactions with industry professionals to gain valuable insights."
    },
    {
      id: 4,
      title: "YesTalentCamp 2023",
      category: "Team Lead",
      date: "2023",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2Fadfe1ee9-39ed-45c9-8802-e52385c1d41a%2FUntitled.png?table=block&id=8de43c63-1990-4121-b051-2141b5dcca50&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1420&userId=&cache=v2",
      text: "Thrilled to have participated in the Yes Talent Camp Hackathon with Mitrphol, where I contributed for over 6 weeks. My role revolved around spearheading the Design Thinking process, from ideation to prototyping, culminating in impactful pitches to Mitrphol's leadership. Our team developed an innovative platform providing insights and guidance on sugarcane cultivation. 🌱 Excited to continue driving innovation at the intersection of agriculture and technology"
    },
    {
      id: 5,
      title: "SIT Helloworld Goose",
      category: "Speaker",
      date: "2023",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2Fc2883e20-9974-4631-8d2f-5fb487faa59e%2FUntitled.png?table=block&id=1336535b-87c8-4403-bb0f-32e6e3d89fba&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1420&userId=&cache=v2",
      text: "Proud to have presented as a DevOps speaker at HelloWorldGoose, where I delved into the intricacies of Git, Package Manager, and Docker. Explored efficient code management with Git, streamlined package management tools, and took a deep dive into Docker usage and processes. Excited to continue the conversation on optimizing development workflows and fostering innovation in the tech community"
    },
    {
      id: 6,
      title: "IT#29 Starterpack",
      category: "Speaker",
      date: "Oct 20, 2023",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F68c76a42-f828-4442-8c9a-a0e7594284ec%2FUntitled.png?table=block&id=0b3adeb1-3ae9-4174-b792-16967f5df980&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1420&userId=&cache=v2",
      text: "Delighted to share our success in organizing the \"IT Starterpack\" event from July 17th to July 27th, 2023, exclusively for first-year Information Technology students at our esteemed university.\n\nAs instructors for the Database course, my friend Miss Pacharanan Janthasiri (Mook) and I collaborated closely with friends and senior students to design the curriculum, prepare materials, and lead engaging sessions.\n\nWith over 105 active participants, we were thrilled to witness the enthusiasm and eagerness of our fellow students to learn and grow in the field of IT. It was truly inspiring to contribute to their solid foundation in Database and set them on a path to excel in their academic journey"
    },
    {
      id: 7,
      title: "Vice President of the Student Association , School of Information Technology",
      category: "Vice President",
      date: "2023",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F7b124b4e-eab7-47ef-84af-3565d1a599e8%2FUntitled.jpeg?table=block&id=04a79e3a-cc4e-41d7-be2e-34964569a675&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1420&userId=&cache=v2",
      text: "I am delighted to have been appointed as the Vice President of the Student Association , School of Information Technology at King Mongkut's University of Technology Thonburi. I am excited to be part of the team responsible for organizing various activities for the faculty. My strong determination is to drive initiatives that promote skills, knowledge, abilities, and participation among students in the School of Information Technology. My goal is to contribute to the university's reputation by nurturing competent personnel who can further enhance its standing. Looking forward to making a positive impact"
    },
    {
      id: 8,
      title: "Participated in CAI Club Hackathon",
      category: "Hackathon",
      date: "2023",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F05b9b636-bc9d-45da-955e-8d940ea62c69%2FUntitled.png?table=block&id=6df6eb4d-7b1e-46e2-b981-2fd269fecc3f&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1420&userId=&cache=v2",
      text: "I had the opportunity to participate in the CAI Club Hackathon, organized by CPALL. The theme of the hackathon was \"AI for Youth\", highlighting the application of Artificial Intelligence for the benefit of young people. Throughout the competition, I gained valuable insights into AI and Design Thinking. This competition required individual participation, which challenged me to adapt and collaborate with new people. This experience allowed me to showcase and enhance my product management abilities."
    },
    {
      id: 9,
      title: "Participated in Microsoft Thailand AI for Accessibility Hackathon 2023",
      category: "Hackathon",
      date: "2023",
      image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2Fcbe2a961-3dbb-4e28-85ff-e13b0156af56%2Fmicrosoft_AI.png?table=block&id=7ea18e16-7742-465e-975a-b5a4d5d21bd7&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1420&userId=&cache=v2",
      text: "I participated in the AI For Accessibility Hackathon, a competition focused on presenting ideas using AI and Cloud Technology to support individuals with disabilities, enhancing their abilities and improving their quality of life. Our team chose to focus on promoting employment opportunities, communication, and social participation. We proposed an idea for an audiobook library application for the visually impaired, using Microsoft technology to support both listeners and audiobook authors. The event took place on June 7, 2023."
    }
  ];

  return (
    <>
      <header>
        <h2 className="h2 article-title">Activity</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <button
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                onClick={() => setModalPost(post)}
              >
                <figure className="blog-banner-box">
                  <Image src={post.image} alt={post.title} width={300} height={200} />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.text}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {modalPost && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ background: '#222', borderRadius: 16, padding: 24, maxWidth: 600, width: '90vw', maxHeight: '90vh', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', color: '#fff' }}>
            <button onClick={() => setModalPost(null)} style={{ position: 'absolute',
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
          justifyContent: 'center'}}>×</button>
            <figure style={{marginBottom:16}}>
              <Image src={modalPost.image} alt={modalPost.title} width={600} height={300} style={{width:'100%', borderRadius:12, maxHeight:220, objectFit:'cover'}} />
            </figure>
            <h2 style={{marginBottom:8}}>{modalPost.title}</h2>
            <p style={{marginBottom:8, color:'#ffd700'}}>{modalPost.category}</p>
            <p style={{marginBottom:16}}>{modalPost.text}</p>
            <time style={{color:'#aaa'}}>{modalPost.date}</time>
          </div>
        </div>
      )}
    </>
  );
} 