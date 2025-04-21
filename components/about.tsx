"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image src="/about2.jpg?height=400&width=400" alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm <span className="text-primary">Shrutee Saha</span>, a Machine Learning and Web Development Enthusiast
            </h3>
            <p className="text-foreground/80 mb-6">
            I am currently doing a Bachelor's degree in Computer Science specialization in AI&ML and alongside have worked with various technologies including React,
              Node.js, and Next.js. I'm constantly learning and adapting to new technologies to stay at the forefront of Machine Learning
              Web Development.
              
            </p>
            <p className="text-foreground/80 mb-6">
            I have a strong passion for Machine Learning, driven by my desire to explore the potential of AI to solve complex problems.
             With a deep curiosity about data and algorithms, I'm eager to expand my knowledge and skills in this field. I am excited about the opportunity to 
             leverage machine learning to create innovative solutions and contribute to advancements in technology.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold">Name:</p>
                <p className="text-foreground/80">Shrutee Saha</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-foreground/80">Sahakumkum27@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p className="text-foreground/80">Chennai, India</p>
              </div>
              <div>
                <p className="font-semibold">Availability:</p>
                <p className="text-foreground/80">Freelance/Internships</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

