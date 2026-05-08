import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import BackgroundParticles from './components/BackgroundParticles';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white scroll-smooth relative">
      <ScrollProgress />
      <CursorGlow />
      <BackgroundParticles />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-secondary/10 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
                  <div className="h-1.5 w-20 bg-accent rounded-full" />
                </div>
                <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                  <p>
                    I am a Bachelor’s student in Computer Science with a strong focus on full-stack development and automation. 
                    I thrive on the intersection of clean code and creative problem-solving.
                  </p>
                  <p>
                    My experience ranges from developing instrumentation software for atmospheric research at 
                    <span className="text-accent"> ARIES</span> to building robust role-based business management systems. 
                    I'm constantly exploring new technologies like AI and machine learning to integrate into my development workflow.
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                 <div className="relative bg-[#0b0f1a] border border-gray-800 p-8 rounded-2xl">
                    <h3 className="font-mono text-accent mb-4 italic">// Current Focus</h3>
                    <ul className="space-y-4">
                       <li className="flex items-start">
                          <span className="text-accent mr-3">▹</span>
                          <span className="text-gray-300">Advanced React & Next.js Ecosystem</span>
                       </li>
                       <li className="flex items-start">
                          <span className="text-accent mr-3">▹</span>
                          <span className="text-gray-300">AI-driven Automation Workflows</span>
                       </li>
                       <li className="flex items-start">
                          <span className="text-accent mr-3">▹</span>
                          <span className="text-gray-300">Scalable System Architecture</span>
                       </li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        
        {/* GitHub Stats Section */}
        <section className="py-24 bg-primary relative">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">GitHub <span className="text-accent">Activity</span></h2>
              <div className="h-1.5 w-20 bg-accent rounded-full mx-auto" />
            </div>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
               <img 
                 src="https://github-readme-stats.vercel.app/api?username=mannuojha2003&show_icons=true&theme=dark&bg_color=0b0f1a&title_color=38bdf8&icon_color=38bdf8&text_color=9ca3af" 
                 alt="Mannu's GitHub Stats" 
                 className="rounded-xl border border-gray-800 shadow-2xl h-full"
               />
               <img 
                 src="https://github-readme-stats.vercel.app/api/top-langs/?username=mannuojha2003&layout=compact&theme=dark&bg_color=0b0f1a&title_color=38bdf8&text_color=9ca3af" 
                 alt="Top Languages" 
                 className="rounded-xl border border-gray-800 shadow-2xl h-full"
               />
            </div>
          </div>
        </section>

        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-gray-800 bg-[#0b0f1a] relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold text-accent tracking-tighter">
              Deploy<span className="text-white">OrCry</span>
            </a>
            <p className="text-gray-500 text-sm mt-2">Turning complex problems into elegant code.</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm mb-4 italic">"Driven by curiosity, powered by code."</p>
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Mannu Kumar Ojha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
