"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Trophy, Star, Medal, BadgeIcon as Certificate, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements = [
    {
      title: "Best Paper Award",
      description:
        "Received the Best Paper Award at the International Conference on Cybersecurity for the research on 'Advanced Threat Detection Mechanisms'.",
      icon: <Trophy className="h-8 w-8" />,
      year: "2023",
    },
    {
      title: "Hackathon Winner",
      description:
        "First place at the National Security Hackathon for developing an innovative solution to detect and prevent phishing attacks.",
      icon: <Award className="h-8 w-8" />,
      year: "2022",
    },
    {
      title: "Research Grant",
      description:
        "Secured a $50,000 research grant for developing novel approaches to secure cloud infrastructure against emerging threats.",
      icon: <Lightbulb className="h-8 w-8" />,
      year: "2022",
    },
    {
      title: "Top Contributor",
      description:
        "Recognized as a top contributor to the open-source security community with over 500 contributions to various projects.",
      icon: <Star className="h-8 w-8" />,
      year: "2021",
    },
    {
      title: "Certification Excellence",
      description: "Achieved perfect scores in advanced cybersecurity certifications, placing in the top 1% globally.",
      icon: <Certificate className="h-8 w-8" />,
      year: "2021",
    },
    {
      title: "Academic Distinction",
      description: "Graduated with highest honors in Computer Science with a specialization in Cybersecurity.",
      icon: <Medal className="h-8 w-8" />,
      year: "2020",
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
    <section id="achievements" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Achievements</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Recognition and milestones that highlight my commitment to excellence and innovation.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 bg-card/50 backdrop-blur-sm overflow-hidden group">
                <div className="absolute top-0 right-0 bg-primary/10 text-primary px-3 py-1 text-sm rounded-bl-lg">
                  {achievement.year}
                </div>
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

