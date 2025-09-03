import { motion } from "framer-motion";
import { Code, TrendingUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    id: 1,
    title: "Data Analyst Intern",
    company: "Academor",
    period: "July 2024 - August 2024",
    description: "Worked with large datasets and developed a machine learning model to predict outcomes. Also performed data cleaning, feature extraction, and evaluation. Used Tableau to represent graphical insights from data and to plot confusion matrix.",
    icon: TrendingUp,
    iconBg: "bg-green-600",
    iconColor: "text-white",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Teachnook",
    period: "March 2023 - April 2023",
    description: "Developed dynamic websites using HTML, CSS and Javascript DOM manipulation concept. Integrated API's to fetch realtime data. Implemented Rest API's for real time interaction and dynamic updates.",
    icon: Code,
    iconBg: "bg-primary",
    iconColor: "text-primary-foreground",
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
