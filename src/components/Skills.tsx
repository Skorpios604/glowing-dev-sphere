
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'JavaScript', color: '#F7DF1E', icon: '🟨' },
  { name: 'TypeScript', color: '#3178C6', icon: '🔷' },
  { name: 'React', color: '#61DAFB', icon: '⚛️' },
  { name: 'Next.js', color: '#000000', icon: '▲' },
  { name: 'Node.js', color: '#339933', icon: '🟢' },
  { name: 'PostgreSQL', color: '#336791', icon: '🐘' },
  { name: 'MongoDB', color: '#47A248', icon: '🍃' },
  { name: 'Redis', color: '#DC382D', icon: '🔴' },
  { name: 'Docker', color: '#2496ED', icon: '🐳' },
  { name: 'Tailwind CSS', color: '#06B6D4', icon: '💨' },
  { name: 'Material UI', color: '#007FFF', icon: '🎨' },
  { name: 'Express', color: '#000000', icon: '🚀' },
  { name: 'Redux', color: '#764ABC', icon: '🔄' },
  { name: 'GitHub', color: '#181717', icon: '🐙' },
  { name: 'Figma', color: '#F24E1E', icon: '🎯' },
  { name: 'VS Code', color: '#007ACC', icon: '💻' }
];

function SkillCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="glass p-6 rounded-2xl text-center group hover:glow transition-all duration-300"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold" style={{ color: skill.color }}>
        {skill.name}
      </h3>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Technologies</span> I Love
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building modern web applications with cutting-edge technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
