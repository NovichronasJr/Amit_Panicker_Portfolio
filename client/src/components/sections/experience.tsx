import { motion } from "framer-motion";
import { Code, TrendingUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Led development of multiple MERN stack applications, implemented data analytics features, and mentored junior developers. Improved application performance by 40%.",
    icon: Code,
    iconBg: "bg-primary",
    iconColor: "text-primary-foreground",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "DataTech Analytics",
    period: "2020 - 2022",
    description: "Analyzed large datasets to drive business decisions, created automated reporting systems, and developed predictive models that improved forecasting accuracy by 25%.",
    icon: TrendingUp,
    iconBg: "bg-green-600",
    iconColor: "text-white",
  },
];

function ExperienceCard({ experience, index, isVisible }: {
  experience: typeof experiences[0];
  index: number;
  isVisible: boolean;
}) {
  const IconComponent = experience.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className="flex items-start space-x-6"
    >
      <div className={`flex-shrink-0 w-12 h-12 ${experience.iconBg} rounded-full flex items-center justify-center`}>
        <IconComponent className={`h-6 w-6 ${experience.iconColor}`} />
      </div>
      <div className="flex-1">
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
          <p className="text-primary font-medium mb-2">{experience.company}</p>
          <p className="text-muted-foreground text-sm mb-4">{experience.period}</p>
          <p className="text-muted-foreground">{experience.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isVisible={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
