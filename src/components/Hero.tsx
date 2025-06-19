import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Zap, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon grid overlay */}
        <div className="absolute inset-0 cyberpunk-grid opacity-30"></div>
        
        {/* Floating neon orbs */}
        <div className="floating absolute top-20 left-10 w-3 h-3 rounded-full bg-gradient-to-r from-[#ff00cc] to-[#00fff7] glow-neon opacity-80"></div>
        <div className="floating-delay absolute top-40 right-20 w-4 h-4 rounded-full bg-gradient-to-r from-[#00fff7] to-[#3a86ff] glow-neon opacity-70"></div>
        <div className="floating absolute bottom-40 left-20 w-2 h-2 rounded-full bg-gradient-to-r from-[#3a86ff] to-[#ff00cc] glow-neon opacity-90"></div>
        <div className="floating-delay absolute bottom-20 right-10 w-5 h-5 rounded-full bg-gradient-to-r from-[#a259ff] to-[#00fff7] glow-neon opacity-60"></div>
        
        {/* Additional geometric shapes */}
        <div className="floating absolute top-1/3 left-1/4 w-6 h-6 border-2 border-[#ff00cc] rotate-45 glow-neon opacity-40"></div>
        <div className="floating-delay absolute top-2/3 right-1/4 w-4 h-4 border-2 border-[#00fff7] rounded-full glow-neon opacity-50"></div>
        
        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ff00cc] to-transparent opacity-50 animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          {/* Cyberpunk-style header */}
          <div className="mb-6">
            <motion.div 
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 neon-border"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Zap className="w-4 h-4 text-[#ff00cc]" />
              <span className="text-sm tracking-wider">FULL STACK DEVELOPER</span>
              <Code className="w-4 h-4 text-[#a259ff]" />
            </motion.div>
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
            <motion.span 
              className="text-gradient neon-flicker"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              MONZER
            </motion.span>
            <br />
            <motion.span 
              className="text-gradient neon-flicker"
              initial={{ rotateX: -90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              MOURAD
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting <span className="text-gradient font-semibold">digital experiences</span> with cutting-edge tech
            <br />
            <span className="text-[#00fff7] text-gradient neon-flicker">Vancouver, Canada</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <div className="flex justify-center gap-6 mb-10">
            <motion.a
              href="https://github.com/skorpios604"
              target="_blank"
              rel="noopener noreferrer"
              className="glass neon-border p-5 rounded-full hover:glow transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={28} className="group-hover:text-pink-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/monzermourad/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass neon-border p-5 rounded-full hover:glow transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={28} className="group-hover:text-purple-400 transition-colors" />
            </motion.a>
          </div>
          
          <motion.button
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-5 rounded-full text-lg font-bold tracking-wider uppercase hover:shadow-2xl transition-all duration-300 neon-border">
              Enter The Matrix
            </div>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* Removed SCROLL text and icon */}
        </motion.div>
      </div>
    </section>
  );
}
