"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "DataVeilAPI",
      description:
        "A secure API gateway with advanced encryption and authentication mechanisms for protecting sensitive data in transit.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "Express", "JWT", "Encryption", "API Gateway"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "SecuScan",
      description:
        "An automated security scanning tool that identifies vulnerabilities in web applications and provides remediation recommendations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Django", "OWASP", "Security", "Automation"],
      github: "https://github.com",
      // No demo link
    },
    {
      title: "WebShield",
      description:
        "A comprehensive web application firewall that protects against common attack vectors like XSS, CSRF, and SQL injection.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Go", "Security", "Firewall", "Real-time Protection"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "SecureDash",
      description:
        "A dashboard for monitoring security metrics and visualizing potential threats in real-time with customizable alerts.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "D3.js", "WebSockets", "Analytics", "Dashboard"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "AirPic",
      description:
        "A secure cloud-based image sharing platform with end-to-end encryption and granular access controls.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "AWS S3", "Encryption", "Authentication", "Cloud"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "PenGUIn",
      description:
        "A GUI-based penetration testing toolkit designed for security professionals to streamline vulnerability assessments.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Electron", "Security", "Penetration Testing"],
      github: "https://github.com",
      demo: "https://example.com",
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            A showcase of my technical expertise and problem-solving abilities through real-world applications.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 bg-card/50 backdrop-blur-sm">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

