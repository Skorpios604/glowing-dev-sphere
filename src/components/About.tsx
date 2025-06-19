
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Expertise in modern web technologies, from frontend React applications to backend Node.js services.'
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Building lightning-fast applications with optimized code and best practices for scalability.'
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'Strong believer in Agile methodology and seamless team collaboration to deliver exceptional results.'
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Passionate about tackling complex challenges and creating innovative solutions that make a difference.'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer based in beautiful Vancouver, Canada. 
            I specialize in maintaining and enhancing web applications using modern technologies 
            like JavaScript, TypeScript, Next.js, Node.js, and more. With a strong foundation 
            in both frontend and backend development, I create seamless digital experiences 
            that users love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl text-center group hover:glow transition-all duration-300"
            >
              <div className="mb-6">
                <feature.icon className="w-12 h-12 mx-auto text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
