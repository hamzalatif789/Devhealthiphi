"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

interface FlipCardProps {
  title: string
  description: string
  stats: string
}

function FlipCard({ title, description, stats }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-64 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <Card className="absolute w-full h-full backface-hidden bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-slate-200">{description}</p>
          </CardContent>
        </Card>

        {/* Back */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-600/30 border-blue-400/30 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
            <p className="text-2xl font-bold text-white">{stats}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export function ProblemSection() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t("problem.title")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-xl text-slate-200">{t("problem.subtitle")}</p>
          <p className="text-2xl font-bold mt-4 text-white">{t("problem.solution")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <FlipCard
            title={t("problem.ai.title")}
            description={t("problem.ai.description")}
            stats={t("problem.ai.stats")}
          />
          <FlipCard
            title={t("problem.federated.title")}
            description={t("problem.federated.description")}
            stats={t("problem.federated.stats")}
          />
          <FlipCard
            title={t("problem.safeguards.title")}
            description={t("problem.safeguards.description")}
            stats={t("problem.safeguards.stats")}
          />
        </motion.div>
      </div>
    </section>
  )
}