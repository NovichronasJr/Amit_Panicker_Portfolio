import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Blogging Application",
    description: "Modern blogging platform built with Next.js featuring server-side rendering, React Query for data management, and optimized SEO performance.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Next.js", "React Query", "SSR"],
    category: "development",
    overlayColor: "bg-primary/80",
    techColor: "bg-primary/10 text-primary",
    linkColor: "text-primary hover:text-primary/80",
  },
  {
    id: 2,
    title: "House Price Prediction",
    description: "Machine learning model for predicting house prices using Python libraries with comprehensive data analysis and interactive Tableau dashboard for visualization.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "Machine Learning", "Tableau"],
    category: "analytics",
    overlayColor: "bg-green-600/80",
    techColor: "bg-green-600/10 text-green-600",
    linkColor: "text-green-600 hover:text-green-600/80",
  },
  {
    id: 3,
    title: "AI Powered Feedback System",
    description: "Intelligent feedback system integrating Google Gemini for agentic tasks, automatically generating and submitting feedback with user confirmation using full-stack technologies.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Next.js", "Google Gemini", "MongoDB", "Tailwind"],
    category: "fullstack",
    overlayColor: "bg-purple-600/80",
    techColor: "bg-purple-600/10 text-purple-600",
    linkColor: "text-purple-600 hover:text-purple-600/80",
  },
  {
    id: 4,
    title: "Face Detection System",
    description: "Advanced face detection application using OpenCV and DeepFace libraries for real-time facial recognition and analysis with high accuracy.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["OpenCV", "DeepFace", "Python"],
    category: "computer-vision",
    overlayColor: "bg-blue-600/80",
    techColor: "bg-blue-600/10 text-blue-600",
    linkColor: "text-blue-600 hover:text-blue-600/80",
  },
  {
    id: 5,
    title: "Netcat Clone",
    description: "Python implementation of the classic Netcat networking utility for creating TCP/UDP connections, port scanning, and data transfer across networks.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "Networking", "TCP/UDP"],
    category: "cybersecurity",
    overlayColor: "bg-red-600/80",
    techColor: "bg-red-600/10 text-red-600",
    linkColor: "text-red-600 hover:text-red-600/80",
  },
  {
    id: 6,
    title: "Port Scanner",
    description: "BASH script for automated network port scanning to identify open ports and running services on target systems for security assessment.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["BASH", "Networking", "Security"],
    category: "cybersecurity",
    overlayColor: "bg-orange-600/80",
    techColor: "bg-orange-600/10 text-orange-600",
    linkColor: "text-orange-600 hover:text-orange-600/80",
  },
];

function ProjectCard({ project, index, isVisible }: { 
  project: typeof projects[0]; 
  index: number; 
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="project-card bg-card rounded-xl shadow-lg overflow-hidden"
      data-testid={`project-card-${project.id}`}
    >
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <div className={`absolute inset-0 ${project.overlayColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
          <div className="text-center text-white">
            <ExternalLink className="h-8 w-8 mb-2 mx-auto" />
            <p className="font-semibold">View Project</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-3">{project.title}</h4>
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className={`${project.techColor} px-3 py-1 rounded-full text-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href="#" 
            className={`${project.linkColor} transition-colors duration-300`}
            data-testid={`link-code-${project.id}`}
          >
            <Github className="inline h-4 w-4 mr-1" /> Code
          </a>
          <a 
            href="#" 
            className={`${project.linkColor} transition-colors duration-300`}
            data-testid={`link-demo-${project.id}`}
          >
            <ExternalLink className="inline h-4 w-4 mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="portfolio" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development projects and data analysis work
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isVisible={isIntersecting} 
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-border hover:bg-accent text-foreground px-8 py-3 font-medium transition-all duration-300 hover:scale-105"
            data-testid="button-view-all-projects"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
