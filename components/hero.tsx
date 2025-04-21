"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0

    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Create grid points
    const gridSize = 30
    const points: { x: number; y: number; baseX: number; baseY: number }[] = []

    const initPoints = () => {
      points.length = 0
      const { width, height } = canvas
      const numX = Math.ceil(width / gridSize)
      const numY = Math.ceil(height / gridSize)

      for (let j = 0; j < numY; j++) {
        for (let i = 0; i < numX; i++) {
          const x = i * gridSize
          const y = j * gridSize
          points.push({ x, y, baseX: x, baseY: y })
        }
      }
    }

    initPoints()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      points.forEach((point) => {
        const dx = mouseX - point.baseX
        const dy = mouseY - point.baseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 15
          point.x = point.baseX - (dx / distance) * force
          point.y = point.baseY - (dy / distance) * force
        } else {
          point.x = point.baseX
          point.y = point.baseY
        }
      })

      // Draw grid
      ctx.strokeStyle =
        getComputedStyle(document.documentElement).getPropertyValue("--grid-color").trim() || "rgba(139, 92, 246, 0.15)"
      ctx.lineWidth = 1

      for (let i = 0; i < points.length; i++) {
        const point = points[i]

        // Connect to right neighbor
        if ((i + 1) % Math.ceil(canvas.width / gridSize) !== 0) {
          const rightNeighbor = points[i + 1]
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(rightNeighbor.x, rightNeighbor.y)
          ctx.stroke()
        }

        // Connect to bottom neighbor
        const bottomIndex = i + Math.ceil(canvas.width / gridSize)
        if (bottomIndex < points.length) {
          const bottomNeighbor = points[bottomIndex]
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(bottomNeighbor.x, bottomNeighbor.y)
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleScroll = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Interactive background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-700/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center">
          {/* Main content with diagonal split */}
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80 backdrop-blur-sm z-10"></div>

            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            {/* Diagonal divider */}
            <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-primary/10 dark:bg-primary/5 clip-diagonal z-0"></div>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-12">
              {/* Left content (3 columns) */}
              <div className="lg:col-span-3 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-medium text-primary">Machine Learning Enthusiast</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    I'm{" "}
                    <span className="text-primary relative">
                      Shrutee Saha
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 -z-10"></span>
                    </span>
                  </h1>

                  <p className="text-lg text-foreground/70 mb-8 max-w-lg">
                    Creating digital experiences that blend innovation with functionality. I transform ideas into
                    elegant, user-focused solutions.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button onClick={() => handleScroll("#projects")} className="group relative overflow-hidden">
                      <span className="relative z-10">View Projects</span>
                      <span className="absolute inset-0 bg-white/20 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => handleScroll("#contact")}
                      className="group relative overflow-hidden"
                    >
                      <span className="relative z-10">Get In Touch</span>
                      <span className="absolute inset-0 bg-primary/10 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right content (2 columns) - Profile image */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-purple-400/20 to-primary/30 animate-slow-spin"></div>
                  <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background">
                    <Image src="/hero.jpg?height=400&width=400" alt="Shrutee Saha" fill className="object-cover" />
                  </div>

                  {/* Status indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-card px-4 py-2 rounded-full shadow-lg border border-border">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-sm">Available for work</span>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
                    <a
                      href="https://github.com/Shrutz72"
                      className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-md hover:bg-primary/10 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                
                    <a
                      href="https://www.linkedin.com/in/shrutee-saha-59a24a312/"
                      className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-md hover:bg-primary/10 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

