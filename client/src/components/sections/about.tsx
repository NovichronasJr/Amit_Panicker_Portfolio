import { motion } from "framer-motion";
import { Code, TrendingUp, Linkedin, Github, Twitter } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gradient">Full-Stack Developer & Data Analyst</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in both web development and data analysis, I bridge the gap between 
              technical implementation and data-driven insights. My journey in technology has equipped 
              me with a unique perspective on building applications that not only function seamlessly 
              but also provide valuable analytics and user insights.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Code className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h4 className="font-semibold text-lg mb-2">MERN Stack</h4>
                <p className="text-muted-foreground text-sm">MongoDB, Express, React, Node.js</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <TrendingUp className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h4 className="font-semibold text-lg mb-2">Data Analysis</h4>
                <p className="text-muted-foreground text-sm">Python, SQL, Visualization</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/amit-panicker-a78474272/" 
                className="text-primary hover:text-primary/80 transition-colors duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/NovichronasJr" 
                className="text-primary hover:text-primary/80 transition-colors duration-300"
                data-testid="link-github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/WAREETHAHAR" 
                className="text-primary hover:text-primary/80 transition-colors duration-300"
                data-testid="link-twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
