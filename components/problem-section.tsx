"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

interface FlipCardProps {
  title: string;
  description: string;
  stats: string;
  icon: React.ReactNode;
  gradient: string;
  delay: number;
}

function FlipCard({
  title,
  description,
  stats,
  icon,
  gradient,
  delay,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative h-80 w-full group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Card */}
        <Card
          className="absolute w-full h-full border border-white/10 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <CardContent
            className={`relative h-full p-0 rounded-lg overflow-hidden bg-gradient-to-br ${gradient} backdrop-blur-sm`}
          >
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-white/30 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-white/20 animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 animate-pulse delay-1000"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[length:30px_30px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center text-white">
              <motion.div
                className="mb-6 p-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 leading-tight drop-shadow-lg">
                {title}
              </h3>
              <p className="text-white/90 leading-relaxed drop-shadow-sm">
                {description}
              </p>
            </div>

            {/* Enhanced Hover Glow Effect */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded-lg"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/5 to-transparent transition-all duration-300"></div>
          </CardContent>
        </Card>

        {/* Enhanced Back Card */}
        <Card
          className="absolute w-full h-full border border-white/10 shadow-2xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <CardContent className="relative h-full p-0 rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[length:40px_40px]"></div>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full shadow-sm"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center text-white">
              <motion.div
                className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl"
                initial={{ scale: 0 }}
                animate={isFlipped ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                {stats}
              </motion.div>
              <motion.p
                className="text-white/90 text-lg font-medium drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFlipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.3 }}
              >
                Success Rate
              </motion.p>

              {/* Enhanced Pulsing Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-40 h-40 border border-white/20 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute w-32 h-32 border-2 border-white/30 rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute w-24 h-24 border border-white/40 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function ProblemSection() {
  const { t } = useLanguage();
  const [titleInView, setTitleInView] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardData = [
    {
      title: t("problem.ai.title") || "AI-Powered Solutions",
      description:
        t("problem.ai.description") ||
        "Leverage cutting-edge artificial intelligence to solve complex problems and automate workflows.",
      stats: t("problem.ai.stats") || "95%",
      gradient: "from-blue-600 to-cyan-500",
      icon: (
        <svg
          className="w-8 h-8 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M17.657 17.657l-.707-.707M12 21v-1m-6.364-.636l.707-.707M3 12h1m2.343-5.657l.707.707"
          />
        </svg>
      ),
    },
    {
      title: t("problem.federated.title") || "Federated Architecture",
      description:
        t("problem.federated.description") ||
        "Distributed systems that scale seamlessly while maintaining security and performance.",
      stats: t("problem.federated.stats") || "99.9%",
      gradient: "from-purple-600 to-pink-500",
      icon: (
        <svg
          className="w-8 h-8 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: t("problem.safeguards.title") || "Advanced Safeguards",
      description:
        t("problem.safeguards.description") ||
        "Multi-layered security protocols ensuring data integrity and user privacy protection.",
      stats: t("problem.safeguards.stats") || "100%",
      gradient: "from-emerald-600 to-teal-500",
      icon: (
        <svg
          className="w-8 h-8 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Enhanced Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.2)_1px,_transparent_0)] bg-[length:60px_60px]"></div>
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          <div
            className="absolute top-32 left-16 w-8 h-8 border border-blue-400/40 rotate-45 animate-spin"
            style={{ animationDuration: "15s" }}
          ></div>
          <div
            className="absolute bottom-24 right-24 w-6 h-6 border border-purple-400/40 rotate-12 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400/30 rotate-45 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Dynamic gradient lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse delay-500"></div>
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-pulse delay-1500"></div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400/40"></div>
          <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-blue-400/30"></div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32">
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/40"></div>
          <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-purple-400/30"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32">
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/40"></div>
          <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-cyan-400/30"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-indigo-400/40"></div>
          <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-indigo-400/30"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 py-20">
        {/* Enhanced Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full"
            initial={{ scale: 0 }}
            animate={titleInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
            {t("problem.title") || "The Future is Here"}
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed drop-shadow-lg">
              {t("problem.subtitle") ||
                "Transform your business with cutting-edge technology solutions designed for the modern era."}
            </p>
            <motion.p
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-xl"
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              {t("problem.solution") || "Experience Innovation at Scale"}
            </motion.p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cardData.map((card, index) => (
            <FlipCard
              key={index}
              title={card.title}
              description={card.description}
              stats={card.stats}
              icon={card.icon}
              gradient={card.gradient}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          
          <motion.button
            className="relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 drop-shadow-lg">
              {t("Consultant") || "Get Started Today"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
