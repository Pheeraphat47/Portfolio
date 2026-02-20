import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Activities from '@/components/Activities';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Education />
      <Activities />
      <Experience />
      <Contact />
    </main>
  );
}
