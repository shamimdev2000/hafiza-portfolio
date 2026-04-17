/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download,
  ChevronRight,
  Code,
  Palette,
  Globe,
  User,
  Briefcase,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleDownloadCV = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const resumeContent = (
    <div className="mt-8 space-y-10 p-8 md:p-12 rounded-2xl bg-white text-slate-900 text-left shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-b-2 border-slate-100 pb-10">
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">HAFIZA SULTANA</h1>
          <p className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">Front-End Developer</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> sultanahafiza123@gmail.com</span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Dhaka, Bangladesh</span>
          </div>
        </div>
        <div className="flex gap-3 no-print">
          <a href="https://github.com/Hafiza1212" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
            <Github className="h-4 w-4 text-slate-700" />
          </a>
          <a href="https://www.linkedin.com/jobs" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
            <Linkedin className="h-4 w-4 text-slate-700" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-blue-600 rounded-full" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Professional Summary</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-[13px]">
              Dedicated and highly motivated Front-End Developer with a strong foundation in B.Sc. in CSE. Passionate about creating responsive, high-performance web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks like React. Committed to continuous learning and contributing to organizational growth through technical excellence.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-blue-600 rounded-full" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-slate-100">
                <div className="absolute top-0 left-[-4.5px] h-2 w-2 rounded-full bg-blue-600" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm text-slate-900">B.Sc. in CSE</h4>
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full font-bold">2019 - 2023</span>
                </div>
                <p className="text-xs text-blue-600 font-semibold italic">Eastern University</p>
                <p className="text-[11px] text-slate-500 mt-1">CGPA: 2.74</p>
              </div>
              <div className="relative pl-6 border-l border-slate-100">
                <div className="absolute top-0 left-[-4.5px] h-2 w-2 rounded-full bg-slate-200" />
                <h4 className="font-bold text-sm text-slate-900">HSC (Science)</h4>
                <p className="text-xs text-slate-500 italic">Dhaka Emperial College | GPA: 4.90</p>
              </div>
              <div className="relative pl-6 border-l border-slate-100">
                <div className="absolute top-0 left-[-4.5px] h-2 w-2 rounded-full bg-slate-200" />
                <h4 className="font-bold text-sm text-slate-900">SSC (Science)</h4>
                <p className="text-xs text-slate-500 italic">Agarani School and College | GPA: 4.94</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-blue-600 rounded-full" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Certifications</h3>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Front-End Development</h4>
                  <p className="text-[11px] text-slate-500">Creative IT Institute</p>
                </div>
                <Badge variant="outline" className="text-[9px] border-blue-200 text-blue-600 bg-blue-50">Industrial Training</Badge>
              </div>
            </div>
          </section>
        </div>

        <div className="md:col-span-4 space-y-12">
          <section>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6 border-b border-slate-100 pb-2">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'Git'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-lg border border-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6 border-b border-slate-100 pb-2">Soft Skills</h3>
            <ul className="space-y-3">
              {['Logical Thinking', 'Problem Solving', 'Teamwork', 'Quick Learner'].map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-[11px] text-slate-600">
                  <div className="h-1 w-1 bg-blue-400 rounded-full" /> {skill}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6 border-b border-slate-100 pb-2">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-bold mb-1">
                  <span>BANGLA</span>
                  <span className="text-blue-600">NATIVE</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[100%] bg-blue-600" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-bold mb-1">
                  <span>ENGLISH</span>
                  <span className="text-blue-600">PROFESSIONAL</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-blue-600" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex justify-center pt-8 no-print border-t border-slate-100">
        <Button className="rounded-xl px-12 py-7 bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20 text-sm font-bold" onClick={handleDownloadCV}>
          <Download className="mr-3 h-5 w-5" /> Download Professional CV
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-foreground font-sans selection:bg-primary/30 relative overflow-hidden bg-particles">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="#" className="text-3xl font-heading font-black tracking-tighter text-gradient leading-none">
              HS.
            </a>
          </motion.div>
          
          <div className="flex items-center gap-4 md:gap-10">
            <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-primary transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <Dialog>
              <DialogTrigger render={<Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5 px-6" />}>
                Get Resume <Download className="ml-2 h-4 w-4" />
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass border-white/10 no-print">
                <DialogHeader>
                  <DialogTitle className="text-4xl font-heading text-gradient">Resume Preview</DialogTitle>
                  <DialogDescription className="text-muted-foreground/60">
                    My professional background and qualifications.
                  </DialogDescription>
                </DialogHeader>
                {resumeContent}
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1.5 w-6">
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-20 left-0 w-full bg-[#020617] border-b border-white/5 p-6 space-y-4 shadow-2xl z-40"
            >
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary px-4 py-2"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold">Hello, It's Me</h3>
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-gradient leading-[1.1] md:leading-none">
                    HAFIZA <br /> SULTANA
                  </h1>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                    And I'm a <span className="text-blue-500">Front-End Web</span> <br className="hidden md:block" />
                    <span className="text-blue-500">Developer</span>
                  </h2>
                  <p className="text-lg md:text-xl font-medium text-blue-400">
                    I'm a Student Of Creative It Instute.
                  </p>
                </div>

                <p className="text-muted-foreground/80 max-w-xl text-lg font-light leading-relaxed">
                  I specialize in creating pixel-perfect, high-performance Website & web applications using modern technologies like HTML, CSS, Bootstrap, Tailwind, React & Javascript.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Dialog>
                    <DialogTrigger render={
                      <Button 
                        size="lg" 
                        className="rounded-xl px-10 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 w-full sm:w-auto"
                      />
                    }>
                      <Download className="mr-2 h-5 w-5" /> Get My Resume
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass border-white/10">
                      <DialogHeader>
                        <DialogTitle className="text-4xl font-heading text-gradient">Resume Preview</DialogTitle>
                        <DialogDescription className="text-muted-foreground/60">
                          My professional background and qualifications.
                        </DialogDescription>
                      </DialogHeader>
                      {resumeContent}
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex gap-4 pt-6">
                  {[
                    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Hafiza1212?tab=repositories" },
                    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/jobs" },
                    { icon: <Mail className="h-5 w-5" />, href: `mailto:sultanahafiza123@gmail.com` }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href} 
                      className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-muted-foreground hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:col-span-5 flex justify-center lg:justify-end"
              >
                <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] group">
                  {/* Glowing Ring */}
                  <div className="absolute inset-0 neon-ring">
                    <div className="absolute inset-[2px] bg-[#020617] rounded-full z-10" />
                  </div>
                  <div className="absolute inset-0 rounded-full overflow-hidden z-20 shadow-2xl border-2 border-white/5">
                    <img 
                      src="/hafiza.png" 
                      alt="Hafiza Sultana" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000";
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group order-2 lg:order-1"
              >
                <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 glass shadow-2xl">
                  <img 
                    src="/hafiza.png" 
                    alt="HAFIZA SULTANA" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000";
                      e.currentTarget.onerror = null;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-48 md:h-48 glass rounded-3xl p-6 flex flex-col justify-center animate-float hidden md:flex">
                  <span className="text-3xl font-heading font-bold text-primary">01+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Years of Experience</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10 order-1 lg:order-2"
              >
                <div className="space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Biography</h2>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">A Front-end developer with a passion for <span className="italic opacity-70">clean code</span>.</h3>
                </div>
                
                <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed font-light">
                  I thrive on analytical thinking and problem-solving to support system efficiency and manage operational challenges. My goal is to contribute to an organization's sustainable growth while continuously enhancing my technical skills.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-2">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Email</p>
                    <p className="text-sm font-medium hover:text-primary transition-colors cursor-pointer truncate">sultanahafiza123@gmail.com</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Location</p>
                    <p className="text-sm font-medium">Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex gap-6 pt-4">
                  {[
                    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/jobs" },
                    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Hafiza1212?tab=repositories" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-1"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500">Portfolio</h2>
                <h3 className="text-5xl font-heading font-bold">Featured Projects</h3>
              </div>
              <p className="text-muted-foreground/60 max-w-md text-sm font-light">
                A selection of my recent works where design meets code to create impactful digital solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Socla Platform", 
                  desc: "A modern interactive web application built with high-performance features.", 
                  tags: ["React", "Vercel"],
                  link: "https://new-socla.vercel.app/"
                },
                { 
                  title: "Personal Web Portal", 
                  desc: "A sophisticated personal web portal showcasing advanced front-end capabilities.", 
                  tags: ["React", "Modern UI"],
                  link: "https://hafiza22-pwmb.vercel.app/"
                },
                { 
                  title: "SaaS Dashboard", 
                  desc: "Complex data visualization and management system for modern enterprises.", 
                  tags: ["Next.js", "D3.js"],
                  link: "#"
                }
              ].map((p, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative glass rounded-[2rem] overflow-hidden border-white/5 hover:border-blue-500/50 transition-all duration-500"
                >
                  <div className="aspect-video bg-white/5 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${p.title}/800/450`} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(t => <Badge key={t} variant="secondary" className="bg-blue-600/10 text-blue-400 border-none text-[8px] uppercase tracking-widest">{t}</Badge>)}
                    </div>
                    <h4 className="text-2xl font-heading font-bold">{p.title}</h4>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed font-light">{p.desc}</p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="link" className="p-0 text-blue-400 group-hover:text-blue-300 transition-colors">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - Bento Grid */}
        <section id="skills" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Expertise</h2>
                <h3 className="text-5xl font-heading font-bold">Technical Arsenal</h3>
              </div>
              <p className="text-muted-foreground/60 max-w-md text-sm font-light">
                A curated selection of technologies and tools I use to bring digital visions to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div variants={fadeIn} className="md:col-span-2 md:row-span-2 glass p-10 rounded-[2.5rem] flex flex-col justify-between group hover:border-primary/30 transition-colors">
                <Code className="h-10 w-10 text-primary mb-10 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-2xl font-heading font-bold mb-4">Core Development</h4>
                  <div className="flex flex-wrap gap-3">
                    {["React", "Next.js", "TypeScript", "JavaScript", "Node.js"].map(s => (
                      <Badge key={s} variant="secondary" className="bg-white/5 border-white/5 px-4 py-1 rounded-full text-[10px]">{s}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="md:col-span-2 glass p-10 rounded-[2.5rem] hover:border-primary/30 transition-colors">
                <Palette className="h-8 w-8 text-primary mb-6" />
                <h4 className="text-xl font-heading font-bold mb-4">Styling & UI</h4>
                <div className="flex flex-wrap gap-3">
                  {["TailwindCSS", "Bootstrap", "Framer Motion", "Shadcn UI"].map(s => (
                    <Badge key={s} variant="secondary" className="bg-white/5 border-white/5 px-4 py-1 rounded-full text-[10px]">{s}</Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="glass p-10 rounded-[2.5rem] hover:border-primary/30 transition-colors">
                <Briefcase className="h-8 w-8 text-primary mb-6" />
                <h4 className="text-xl font-heading font-bold mb-2">Tools</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Git, Github, VS Code</p>
              </motion.div>

              <motion.div variants={fadeIn} className="glass p-10 rounded-[2.5rem] hover:border-primary/30 transition-colors">
                <Globe className="h-8 w-8 text-primary mb-6" />
                <h4 className="text-xl font-heading font-bold mb-2">Languages</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Bangla, English</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 md:mb-20 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Timeline</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold">Professional Path</h3>
            </div>
            
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  role: "Front-End Developer",
                  company: "Creative IT Institute",
                  period: "Present",
                  type: "Experience",
                  desc: "Developing responsive and user-friendly web interfaces using modern frameworks."
                },
                {
                  degree: "CSE, Bachelor of Science",
                  school: "Eastern University",
                  period: "2020 - 2024",
                  type: "Education",
                  desc: "Focused on core computer science principles and software engineering."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 md:p-12 rounded-[2.5rem] relative group hover:bg-white/[0.07] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-[9px] uppercase tracking-widest border-primary/30 text-primary mb-2">{item.type}</Badge>
                      <h4 className="text-2xl font-heading font-bold">{"role" in item ? item.role : item.degree}</h4>
                      <p className="text-primary/70 font-medium">{"company" in item ? item.company : item.school}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-white/5 px-4 py-2 rounded-full border border-white/5">{item.period}</span>
                  </div>
                  <p className="text-muted-foreground/70 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-[2rem] md:rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-20 space-y-10 md:space-y-12 bg-primary/5">
                <div className="space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Contact</h2>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-none">Let's start <br /> something <span className="italic opacity-60">new</span>.</h3>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Email Me</p>
                      <p className="text-sm md:text-lg font-medium truncate">sultanahafiza123@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Visit Me</p>
                      <p className="text-sm md:text-lg font-medium">Azimpur, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 md:p-20">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                        <Send className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-3xl font-heading font-bold">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                      <Button 
                        variant="outline" 
                        className="rounded-full mt-4"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                          <Input 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe" 
                            className={`bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:ring-primary/50 transition-all ${
                              errors.name ? "border-destructive focus:ring-destructive/50" : ""
                            }`} 
                          />
                          {errors.name && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[10px] text-destructive ml-1"
                            >
                              {errors.name}
                            </motion.p>
                          )}
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Email</label>
                          <Input 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com" 
                            className={`bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:ring-primary/50 transition-all ${
                              errors.email ? "border-destructive focus:ring-destructive/50" : ""
                            }`} 
                          />
                          {errors.email && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[10px] text-destructive ml-1"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project..." 
                          className={`bg-white/5 border-white/10 rounded-2xl min-h-[180px] p-6 focus:ring-primary/50 transition-all ${
                            errors.message ? "border-destructive focus:ring-destructive/50" : ""
                          }`} 
                        />
                        {errors.message && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] text-destructive ml-1"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>
                      <Button 
                        disabled={isSubmitting}
                        className="w-full rounded-2xl h-16 text-lg font-bold bg-primary text-primary-foreground hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            Sending... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message <Send className="ml-3 h-5 w-5" />
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-3xl font-heading font-bold tracking-tighter text-gradient">HS.</span>
            <p className="text-xs text-muted-foreground/40 uppercase tracking-[0.3em]">Built with Passion & Code</p>
          </div>
          
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <a href="https://github.com/Hafiza1212?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Github</a>
            <a href="https://www.linkedin.com/jobs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
          
          <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">
            © {new Date().getFullYear()} HAFIZA SULTANA
          </p>
        </div>
      </footer>

      {/* Hidden printable resume section */}
      <div id="resume-print" className="invisible print:visible fixed inset-0 bg-white p-10 z-[9999]">
        {resumeContent}
      </div>
    </div>
  );
}

