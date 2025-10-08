import React, { useState, useEffect } from 'react';
import { Code, Wallet, Blocks, Github, Linkedin, Mail, ExternalLink, ChevronDown, Briefcase } from 'lucide-react';

export default function Web3Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const project = {
    title: "Ardency",
    desc: "A comprehensive Web3 application showcasing modern blockchain integration, decentralized functionality, and seamless user experience",
    tech: ["React", "Web3.js", "Ethers.js", "TailwindCSS", "Smart Contracts"],
    features: [
      "Blockchain integration with multiple wallet providers",
      "Real-time transaction monitoring and updates",
      "Responsive design optimized for all devices",
      "Gas-efficient smart contract interactions"
    ],
    responsibilities: [
      "Led frontend architecture and component design",
      "Implemented Web3 wallet connection logic",
      "Optimized performance for blockchain data queries",
      "Collaborated with smart contract developers"
    ]
  };

  const skills = {
    "Web3 Technologies": ["Ethers.js", "Web3.js", "Wagmi", "Viem", "WalletConnect", "Rainbow Kit"],
    "Frontend": ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "React Query"],
    "Blockchain": ["Smart Contracts", "Solidity", "IPFS", "The Graph", "Hardhat"],
    "Tools": ["Git", "Vercel", "Docker", "Jest", "Cypress", "Figma"]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" 
             style={{top: '10%', left: '10%', animationDuration: '4s'}} />
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" 
             style={{bottom: '10%', right: '10%', animationDuration: '6s'}} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Blocks className="w-6 h-6 text-white" />
            <span className="font-bold text-xl">Web3 Developer</span>
          </div>
          <div className="flex gap-6">
            {['Project', 'Skills', 'Experience', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({behavior: 'smooth'})}
                className="hover:text-gray-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full border border-gray-700">
            <span className="text-gray-300">Available for opportunities</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            Frontend Developer
          </h1>
          <h2 className="text-4xl font-bold mb-6 text-gray-300">
            Specializing in Web3 & Blockchain
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building seamless, secure, and scalable decentralized applications with modern frontend technologies
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('project')?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Project
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 py-3 border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition-all"
            >
              Contact Me
            </button>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-gray-400" />
        </div>
      </section>

      {/* Current Role */}
      <section id="experience" className="relative py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Current Role</h2>
          <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
                <p className="text-xl text-gray-400 mb-4">Siemens · Full-time</p>
                <p className="text-gray-300 leading-relaxed">
                  Working on enterprise-level applications with modern frontend technologies. 
                  Due to confidentiality agreements, specific project details cannot be shared publicly.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 mt-6">
              <p className="text-sm text-gray-400 mb-3">Key Focus Areas:</p>
              <div className="flex flex-wrap gap-2">
                {["React Development", "Component Architecture", "Performance Optimization", "UI/UX Implementation"].map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Project</h2>
          <div className="max-w-4xl mx-auto">
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all">
              <div className="flex items-start justify-between mb-6">
                <Code className="w-10 h-10 text-white" />
                <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors cursor-pointer" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.desc}</p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-3">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6 mb-6">
                <p className="text-sm text-gray-400 mb-3">Key Features:</p>
                <ul className="text-gray-300 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <p className="text-sm text-gray-400 mb-3">My Responsibilities:</p>
                <ul className="text-gray-300 space-y-2">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Web3 */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Web3?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon: Wallet, title: "Wallet Integration", desc: "Expertise in connecting multiple wallet providers with seamless UX"},
              {icon: Blocks, title: "Smart Contract Integration", desc: "Direct experience interacting with on-chain data and transactions"},
              {icon: Code, title: "Modern Stack", desc: "Proficient in latest React patterns, TypeScript, and Web3 libraries"}
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all">
                <item.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-xl text-gray-400 mb-12">
            Interested in bringing innovative Web3 experiences to life? Let's connect!
          </p>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com"
               className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Web3 Frontend Developer. Built with React & TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
}