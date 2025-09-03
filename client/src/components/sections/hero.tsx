import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Code, Database, Brain } from "lucide-react";
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingIconVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/50 to-primary/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating icons */}
      <motion.div
        variants={floatingIconVariants}
        animate="animate"
        className="absolute top-1/4 left-10 text-primary/20"
      >
        <Code size={40} />
      </motion.div>
      <motion.div
        variants={floatingIconVariants}
        animate="animate"
        className="absolute top-1/3 right-16 text-blue-500/20"
        style={{ animationDelay: "1s" }}
      >
        <Database size={35} />
      </motion.div>
      <motion.div
        variants={floatingIconVariants}
        animate="animate"
        className="absolute bottom-1/3 left-16 text-green-500/20"
        style={{ animationDelay: "2s" }}
      >
        <Brain size={32} />
      </motion.div>
      <motion.div
        variants={floatingIconVariants}
        animate="animate"
        className="absolute top-16 right-1/4 text-purple-500/20"
        style={{ animationDelay: "0.5s" }}
      >
        <Sparkles size={28} />
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with enhanced styling */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <div className="relative w-40 h-40 mx-auto">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-500 animate-spin-slow opacity-20"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 animate-spin-reverse opacity-30"></div>
            
            {/* Profile image */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary to-blue-500 p-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                alt="Amit Panicker"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl animate-pulse"></div>
          </div>
        </motion.div>

        {/* Name with modern typography */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Amit Panicker
          </span>
        </motion.h1>

        {/* Typewriter text with enhanced styling */}
        <motion.div
          variants={itemVariants}
          className="text-2xl sm:text-3xl mb-8 h-20 flex items-center justify-center"
        >
          <div className="relative">
            <span className="typewriter bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent font-semibold" data-testid="typewriter-text">
              {typewriterText}
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-sm rounded-lg opacity-30"></div>
          </div>
        </motion.div>

        {/* Description with modern styling */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Full-stack MERN developer and data analyst with a passion for creating{" "}
          <span className="text-primary font-medium">innovative web applications</span> and deriving{" "}
          <span className="text-blue-500 font-medium">actionable insights</span> from
          complex datasets.
        </motion.p>

        {/* Enhanced buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("#portfolio")}
            className="group relative bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white px-10 py-4 font-medium text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            data-testid="button-view-work"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button
            variant="outline"
            className="group relative border-2 border-primary/30 hover:border-primary text-foreground px-10 py-4 font-medium text-lg rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-background/50 hover:bg-primary/5"
            data-testid="button-download-cv"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Amit_Panicker_CV.pdf';
              link.download = 'Amit_Panicker_CV.pdf';
              link.click();
            }}
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection("#about")}
        >
          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
            Scroll down
          </span>
          <div className="w-6 h-10 border-2 border-muted-foreground group-hover:border-primary rounded-full flex justify-center transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground group-hover:bg-primary rounded-full mt-2 transition-colors"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}