"use client"

import { motion } from "framer-motion"
import { Code, Server, Palette, Database, Globe, Smartphone } from "lucide-react"

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="h-8 w-8" />,
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
    ],
  },
  {
    category: "Frontend",
    icon: <Code className="h-8 w-8" />,
    items: [
      { name: "HTML/CSS", level: 70 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 60 },
      { name: "Next.js", level: 50 },
      {name: "Typescript", level: 40},
      { name: "Tailwind CSS", level: 40 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8" />,
    items: [
      { name: "Node.js", level: 40 },
      { name: "Express", level: 20 },
      
    ],
  },
  
  {
    category: "Database",
    icon: <Database className="h-8 w-8" />,
    items: [
      { name: "MongoDB", level: 50 },
      { name: "Oracle SQL", level: 65 },
      { name: "Firebase", level: 30 },
    ],
  },
  {
    category: "Machine Learning",
    icon: <Database className="h-8 w-8" />,
    items: [
      { name: "NumPy", level: 50 },
      { name: "TensorFlow", level: 30 },
      { name: "Scikit-learn", level: 40 },
      { name: "Linear Algebra", level: 70 },

    ],
  },
  {
    category: "Other",
    icon: <Globe className="h-8 w-8" />,
    items: [
      { name: "Git", level: 80 },
      { name: "AWS", level: 65 },
    ],
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-primary h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

