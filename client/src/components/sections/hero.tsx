import { motion } from "framer-motion";
import { Code, Database, Brain } from "lucide-react";
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
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-background via-background/70 to-primary/10 dark:from-background dark:via-background/80 dark:to-primary/10"
    >
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div>
              <p className="text-lg text-primary font-medium">Hi, I’m</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Amit Panicker
              </h1>
            </div>

            {/* Typewriter */}
            <div className="h-12">
              <span className="text-2xl sm:text-3xl font-semibold text-primary">
                {typewriterText}
              </span>
            </div>

            {/* Short Description */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Full-stack MERN developer and data analyst passionate about
              building{" "}
              <span className="text-primary font-medium">
                scalable web apps
              </span>{" "}
              and turning{" "}
              <span className="text-blue-500 font-medium">complex data</span>{" "}
              into insights.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Learning
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-500">8.5</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection("#portfolio")}
                className="px-8 py-3 rounded-full font-medium"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Amit_Panicker_CV.pdf";
                  link.download = "Amit_Panicker_CV.pdf";
                  link.click();
                }}
                className="px-8 py-3 rounded-full font-medium"
              >
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Profile Image */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-full overflow-hidden shadow-2xl w-[400px] h-[600px]" 
                style={{ willChange: "transform" }}
              >
                <img
                  src="/Amit_Panicker.jpg"
                  alt="Amit Panicker"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("#about")}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-muted-foreground mt-2 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
