import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import data from '../data/data.json';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-accent">Touch</span></h2>
          <div className="h-1.5 w-20 bg-accent rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-6 p-6 bg-secondary/20 border border-gray-800 rounded-2xl group hover:border-accent/30 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <a href={`mailto:${data.personal.email}`} className="text-lg font-medium hover:text-accent transition-colors">
                  {data.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-6 bg-secondary/20 border border-gray-800 rounded-2xl group hover:border-accent/30 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-lg font-medium">{data.personal.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-6 bg-secondary/20 border border-gray-800 rounded-2xl group hover:border-accent/30 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Location</p>
                <p className="text-lg font-medium">{data.personal.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0b0f1a] border border-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-6">Send Message</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-secondary/30 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-secondary/30 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none transition-all"
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  placeholder="Your Message" 
                  className="w-full bg-secondary/30 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-accent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 bg-accent text-primary font-bold rounded-lg hover:bg-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
