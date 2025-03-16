"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Simulate visitor count - in a real app, this would be fetched from an API
    const storedCount = localStorage.getItem("visitorCount") || "0"
    const newCount = Number.parseInt(storedCount) + 1
    localStorage.setItem("visitorCount", newCount.toString())
    setVisitorCount(newCount)
  }, [])

  return (
    <footer className="border-t py-6 md:py-8 bg-gradient-to-t from-muted/30 to-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="#home" className="font-bold">
            Jayashre K
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-muted/50 backdrop-blur-sm">
            Visitors: {visitorCount.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Discord className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link
            href="mailto:contact@example.com"
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

