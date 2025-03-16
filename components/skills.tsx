"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Globe, Shield, Server, Cloud, Braces } from "lucide-react"
import Image from "next/image"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      name: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Next.js", icon: "/placeholder.svg?height=40&width=40" },
        { name: "TypeScript", icon: "/placeholder.svg?height=40&width=40" },
        { name: "TailwindCSS", icon: "/placeholder.svg?height=40&width=40" },
        { name: "HTML/CSS", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Express", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Python", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Django", icon: "/placeholder.svg?height=40&width=40" },
        { name: "FastAPI", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", icon: "/placeholder.svg?height=40&width=40" },
        { name: "PostgreSQL", icon: "/placeholder.svg?height=40&width=40" },
        { name: "MySQL", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Redis", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Firebase", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      name: "DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Docker", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Kubernetes", icon: "/placeholder.svg?height=40&width=40" },
        { name: "AWS", icon: "/placeholder.svg?height=40&width=40" },
        { name: "CI/CD", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Git", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      name: "Security",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Pen Testing", icon: "/placeholder.svg?height=40&width=40" },
        { name: "OWASP", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Encryption", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Auth Systems", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Security Audits", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      name: "Languages",
      icon: <Braces className="h-6 w-6" />,
      skills: [
        { name: "JavaScript", icon: "/placeholder.svg?height=40&width=40" },
        { name: "TypeScript", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Python", icon: "/placeholder.svg?height=40&width=40" },
        { name: "Java", icon: "/placeholder.svg?height=40&width=40" },
        { name: "C/C++", icon: "/placeholder.svg?height=40&width=40" },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            A comprehensive toolkit that enables me to build secure, scalable, and user-friendly applications.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center group">
                    <div className="relative w-10 h-10 mb-2 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

