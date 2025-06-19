import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative neon-cyberpunk">
      <ThreeBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Contact />
        
        {/* Footer */}
        <footer className="py-12 text-center text-gray-400 mt-20">
          <div className="container mx-auto px-6">
            <p className="text-lg">
              &copy; 2025 <span className="text-gradient font-semibold">Monzer Mourad</span>
            </p>
            <p className="text-sm mt-2 opacity-70">
              Crafted with passion in <span className="text-pink-400">Vancouver, Canada</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
