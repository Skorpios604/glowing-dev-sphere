
import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <ThreeBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; 2024 Monzer Mourad. Crafted with passion in Vancouver, Canada.</p>
      </footer>
    </div>
  );
};

export default Index;
