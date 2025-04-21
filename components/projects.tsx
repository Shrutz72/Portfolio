"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Amazon Website Clone",
    category: "Web",
    image: "/amazon.png?height=400&width=600",
    description: "A frontend e-commerce platform built with HTML and CSS",
    technologies: ["HTML", "CSS"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Expense Tracker App - TREX",
    category: "Web",
    image: "/expense.png?height=400&width=600",
    description: "An expense tracker app",
    technologies: ["Java"],
    githubLink: "https://github.com/Shrutz72/TREX",
  },
  {
    id: 3,
    title: "Attendance Management System - AMS",
    category: "Web",
    image: "/ams.png?height=400&width=600",
    description: "A website for attendance management for faculties",
    technologies: ["Python", "SQLite", "Flask"],
    demoLink: "#",
    githubLink: "https://github.com/Shrutz72/AMS",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web",
    image: "/portfolio.png?height=400&width=600",
    description: "A responsive portfolio website with dark mode support",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Nodemailer", "Typescript"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "CommUnity",
    category: "Fullstack",
    image: "/commUnity.jpg?height=400&width=600",
    description: "A community app to upload and upvote your inconveniences",
    technologies: ["Next.js", "TailwindCSS", "Typescript", "Node.js", "MongoDB"],
    demoLink: "#",
    githubLink: "https://github.com/Shrutz72/Hackathon",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 
                  <Button size="icon" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{project.category}</span>
                </div>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

