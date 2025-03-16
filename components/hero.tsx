"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, BookOpen, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background z-10" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-purple-500/5 via-background to-background blur-3xl opacity-30 z-0" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/5 via-background to-background blur-3xl opacity-30 z-0" />
      </div>

      {/* Main content container - perfectly centered */}
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Memoji image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-32 h-32 md:w-40 md:h-40 mb-2"
          >
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="Memoji"
              width={160}
              height={160}
              className="rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-1"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5 blur-xl -z-10" />
          </motion.div>

          {/* Name with chromium effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 
              inline-block transform transition-all duration-300 hover:scale-105 
              hover:from-gray-300 hover:via-white hover:to-gray-200
              filter drop-shadow-[0_5px_5px_rgba(255,255,255,0.1)]"
            >
              Jayashre K
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Aspiring Tamil Ponnu | Innovator | Problem Solver
          </h2>

          {/* Description */}
          <p className="max-w-[600px] text-muted-foreground">
            Building secure, scalable solutions with a focus on privacy and performance. Turning complex problems into
            elegant code.
          </p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 transition-all hover:text-primary hover:border-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 transition-all hover:text-primary hover:border-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 transition-all hover:text-primary hover:border-primary"
              >
                <BookOpen className="h-5 w-5" />
                <span className="sr-only">Google Scholar</span>
              </Button>
            </Link>
            <Link href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 transition-all hover:text-primary hover:border-primary"
              >
                <Code className="h-5 w-5" />
                <span className="sr-only">LeetCode</span>
              </Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 transition-all hover:text-primary hover:border-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="mt-2" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <Link
            href="#skills"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-1 h-1 bg-muted-foreground rounded-full"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

