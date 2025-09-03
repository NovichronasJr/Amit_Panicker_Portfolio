import { motion } from "framer-motion";
import { Code, BarChart3 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiJavascript, 
  SiAmazon, 
  SiDocker, 
  SiGit,
  SiLinux,
  SiGnubash,
  SiRedis,
  SiNextdotjs,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiTableau,
  SiC,
  SiCplusplus,
  SiFirebase,
  SiOpenai,
  SiLangchain,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiVercel
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const developmentSkills = [
  { name: "React.js", percentage: 90 },
  { name: "Node.js", percentage: 85 },
  { name: "MongoDB", percentage: 80 },
  { name: "Express.js", percentage: 88 },
];

const analyticsSkills = [
  { name: "Python", percentage: 92 },
  { name: "SQL", percentage: 88 },
  { name: "Pandas/NumPy", percentage: 85 },
  { name: "Tableau", percentage: 80 },
];

const technologies = [
  { icon: SiReact, name: "React", color: "text-blue-500" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
  { icon: SiPython, name: "Python", color: "text-blue-600" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800" },
  { icon: SiExpress, name: "Express.js", color: "text-gray-600" },
  { icon: SiVite, name: "Vite", color: "text-purple-500" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" },
  { icon: SiHtml5, name: "HTML5", color: "text-orange-600" },
  { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
  { icon: SiC, name: "C", color: "text-blue-700" },
  { icon: SiCplusplus, name: "C++", color: "text-blue-600" },
  { icon: FaJava, name: "Java", color: "text-red-600" },
  { icon: SiFirebase, name: "Firebase", color: "text-yellow-600" },
  { icon: SiTableau, name: "Tableau", color: "text-blue-600" },
  { icon: SiLinux, name: "Linux", color: "text-yellow-500" },
  { icon: SiGnubash, name: "Bash", color: "text-gray-700" },
  { icon: SiRedis, name: "Redis", color: "text-red-600" },
  { icon: SiAmazon, name: "AWS", color: "text-orange-500" },
  { icon: SiDocker, name: "Docker", color: "text-blue-400" },
  { icon: SiGit, name: "Git", color: "text-orange-600" },
  { icon: SiOpenai, name: "OpenAI", color: "text-green-600" },
  { icon: SiLangchain, name: "LangChain", color: "text-purple-600" },
  { icon: SiPostman, name: "Postman", color: "text-orange-500" },
  { icon: SiVercel, name: "Vercel", color: "text-gray-900" },
];

function SkillBar({ skill, index, isVisible }: { 
  skill: { name: string; percentage: number }; 
  index: number; 
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="skill-item"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
          className="skill-bar bg-gradient-to-r from-primary to-blue-500 h-3 rounded-full"
        />
      </div>
    </motion.div>
  );
}

function AnalyticsSkillBar({ skill, index, isVisible }: { 
  skill: { name: string; percentage: number }; 
  index: number; 
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="skill-item"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
          className="skill-bar bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web development and advanced data analysis
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              <Code className="inline h-8 w-8 text-primary mr-3" />
              Development
            </h3>
            
            <div className="space-y-6">
              {developmentSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={index} 
                  isVisible={isIntersecting} 
                />
              ))}
            </div>
          </motion.div>
          
          {/* Data Analysis Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              <BarChart3 className="inline h-8 w-8 text-primary mr-3" />
              Data Analysis
            </h3>
            
            <div className="space-y-6">
              {analyticsSkills.map((skill, index) => (
                <AnalyticsSkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={index} 
                  isVisible={isIntersecting} 
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Technologies & Tools</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 items-center justify-items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center hover:scale-110 transition-transform duration-300"
                data-testid={`tech-${tech.name.toLowerCase()}`}
              >
                <tech.icon className={`text-4xl ${tech.color} mb-2 mx-auto`} />
                <p className="text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
