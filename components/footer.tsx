"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <Link href="#home" className="text-2xl font-bold text-primary" onClick={(e) => handleNavClick(e, "#home")}>
              Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            <Link
              href="#home"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "#home")}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "#about")}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "#skills")}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "#projects")}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-foreground/60 text-sm"
        >
          
        </motion.div>
      </div>
    </footer>
  )
}

