
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-2xl"
          >
            <h3 className="text-3xl font-semibold mb-8 text-gradient text-center">Get In Touch</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="glass p-4 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-pink-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Vancouver, Canada</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="glass p-4 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Email</h4>
                <p className="text-gray-300">monzer.mourad@example.com</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="glass p-4 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Availability</h4>
                <p className="text-gray-300">Monday - Friday</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
