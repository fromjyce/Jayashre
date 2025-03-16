"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      role: "Software Developer Intern",
      company: "OneTrust",
      period: "May 2023 - Aug 2023",
      location: "Atlanta, GA",
      description:
        "Developed and maintained privacy management solutions, focusing on data security and compliance. Implemented new features for the privacy platform using React and Node.js.",
      achievements: [
        "Optimized database queries resulting in 30% faster data retrieval",
        "Contributed to the development of a new user authentication system",
        "Collaborated with cross-functional teams to implement GDPR compliance features",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
      role: "Summer Research Fellow",
      company: "IAS-INSA-NAS",
      period: "Jun 2022 - Aug 2022",
      location: "Remote",
      description:
        "Conducted research on cybersecurity vulnerabilities in web applications. Developed tools for automated security testing and vulnerability assessment.",
      achievements: [
        "Created an automated tool for detecting XSS vulnerabilities",
        "Published a research paper on web application security best practices",
        "Presented findings at the annual security conference",
      ],
      technologies: ["Python", "Django", "Penetration Testing", "OWASP", "Machine Learning"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Professional journey that has shaped my skills and expertise in software development and cybersecurity.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="relative space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12 md:pr-6" : "md:pr-12 md:pl-6"} pl-8 md:pl-0`}>
                  <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-primary">{exp.company}</h4>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="mt-4">{exp.description}</p>

                    <div className="mt-4">
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

