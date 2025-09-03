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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background/50 to-primary/5 dark:from-background dark:via-background/80 dark:to-primary/10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/15 dark:to-blue-500/15 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating icons */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-8 text-primary/20 dark:text-primary/40 hidden lg:block"
      >
        <Code size={40} />
      </motion.div>
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-8 text-blue-500/20 dark:text-blue-500/40 hidden lg:block"
      >
        <Database size={35} />
      </motion.div>
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-8 text-green-500/20 dark:text-green-500/40 hidden lg:block"
      >
        <Brain size={32} />
      </motion.div>
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-16 right-1/3 text-purple-500/20 dark:text-purple-500/40 hidden lg:block"
      >
        <Sparkles size={28} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-lg text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-blue-500 dark:from-white dark:via-primary dark:to-blue-400 bg-clip-text text-transparent">
                Amit Panicker
              </h1>
            </motion.div>

            {/* Typewriter text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-16 flex items-center justify-center lg:justify-start"
            >
              <div className="relative">
                <span className="text-2xl sm:text-3xl typewriter bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent font-semibold" data-testid="typewriter-text">
                  {typewriterText}
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 blur-sm rounded-lg opacity-50"></div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Full-stack MERN developer and data analyst with a passion for creating{" "}
              <span className="text-primary font-medium">innovative web applications</span> and deriving{" "}
              <span className="text-blue-500 font-medium">actionable insights</span> from
              complex datasets.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 py-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary dark:text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-500 dark:text-blue-400">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-500 dark:text-green-400">8.5</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("#portfolio")}
                className="group relative bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 dark:from-primary dark:to-blue-400 dark:hover:from-primary/90 dark:hover:to-blue-400/90 text-white px-8 py-3 font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                data-testid="button-view-work"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                variant="outline"
                className="group relative border-2 border-primary/30 hover:border-primary dark:border-primary/50 dark:hover:border-primary text-foreground px-8 py-3 font-medium rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-background/50 hover:bg-primary/5 dark:bg-background/30 dark:hover:bg-primary/10"
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-primary/20 to-blue-500/20 dark:from-primary/30 dark:to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-purple-500/20 dark:from-green-400/30 dark:to-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-blue-500/30 dark:from-primary/40 dark:to-blue-400/40 p-2"
                >
                  <div className="w-full h-full rounded-full bg-background/10 dark:bg-background/20 backdrop-blur-sm"></div>
                </motion.div>
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/40 to-green-500/40 dark:from-blue-400/50 dark:to-green-400/50 p-2"
                >
                  <div className="w-full h-full rounded-full bg-background/10 dark:bg-background/20 backdrop-blur-sm"></div>
                </motion.div>

                {/* Profile image */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-8 rounded-full bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400 p-2 shadow-2xl dark:shadow-primary/20"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                    alt="Amit Panicker"
                    className="w-full h-full rounded-full object-cover shadow-xl"
                  />
                </motion.div>

                {/* Glowing orbs */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/4 -left-6 w-4 h-4 bg-primary dark:bg-primary rounded-full blur-sm"
                ></motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-1/4 -right-8 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full blur-sm"
                ></motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute top-3/4 left-0 w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full blur-sm"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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