import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const typewriterText = useTypewriter({
    phrases: [
      "MERN Stack Developer",
      "Data Analyst",
      "Full-Stack Engineer",
      "Problem Solver",
    ],
    speed: 100,
    deleteSpeed: 50,
    delay: 2000,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="animate-float mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-500 p-1 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
              alt="Amit Panicker" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-gradient">Amit Panicker</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl mb-8 h-16 flex items-center justify-center"
        >
          <span className="typewriter" data-testid="typewriter-text">
            {typewriterText}
          </span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Full-stack MERN developer and data analyst with a passion for creating 
          innovative web applications and deriving actionable insights from complex datasets.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("#portfolio")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-border hover:bg-accent text-foreground px-8 py-3 font-medium transition-all duration-300"
            data-testid="button-download-cv"
          >
            Download CV
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
