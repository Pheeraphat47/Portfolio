import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Education from '@/components/Education';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Timeline />
      <CaseStudies />
      <Gallery />
      <Contact />
    </main>
  );
}
