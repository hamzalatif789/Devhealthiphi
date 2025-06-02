"use client";


import { Button } from "@/components/ui/button";
import { PodcastPlayer } from "./podcast-player";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { useState, useEffect } from "react";

export function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Store particle positions initialized on client only
  const [particles, setParticles] = useState<
    | {
        left: string;
        top: string;
        animationDelay: string;
        animationDuration: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    // Set client state first
    setIsClient(true);

    // Small delay to ensure proper hydration
    const timer = setTimeout(() => {
      setIsVisible(true);

      // Generate stable random positions for particles after mount
      const generatedParticles = [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }));
      setParticles(generatedParticles);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pb-[100px] pt-5"
        suppressHydrationWarning
      >
        {/* Animated Background */}
        <div className="absolute inset-0" suppressHydrationWarning>
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>

          {/* Floating Particles - Only render after client hydration */}
          <div className="absolute inset-0" suppressHydrationWarning>
            {particles &&
              particles.map((p, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                  style={{
                    left: p.left,
                    top: p.top,
                    animationDelay: p.animationDelay,
                    animationDuration: p.animationDuration,
                  }}
                ></div>
              ))}
          </div>

          {/* Interactive Glow Effect - Only render after client hydration */}
          {isClient && (
            <div
              className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
              }}
              suppressHydrationWarning
            ></div>
          )}
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10 pt-[50px]">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Main Heading */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight max-w-5xl">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  {t("hero.title") || "Transform Your"}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  {t("hero.cta") || "Digital Future"}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
                {t("hero.subtitle") ||
                  "Join thousands of innovators building the next generation of digital experiences. Start your journey today."}
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className={`transform transition-all duration-1000 delay-900 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  asChild
                >
                  <Link
                    href="/apply"
                    className="relative z-10 flex items-center justify-center"
                  >
                    <span className="mr-2">
                      {t("hero.joinTeam") || "Join Our Team"}
                    </span>
                    <svg
                      className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                </Button>

                <Button
                  size="lg"
                  className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  asChild
                >
                  <Link
                    href="/founder"
                    className="relative z-10 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2 group-hover:animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                      />
                    </svg>
                    <span>{t("hero.backLaunch") || "Back Our Launch"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Podcast Player */}
            <div
              className={`transform transition-all duration-1000 delay-1300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="mt-12 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <PodcastPlayer />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="w-[1000px] h-[1000px] rounded-full border-[2px] border-white/20 animate-spin-slow"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full border-[1px] border-white/10 animate-spin-reverse"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full border-[1px] border-white/5 animate-spin"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
          @keyframes gradient-x {
            0%,
            100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-spin-reverse {
            animation: spin-reverse 15s linear infinite;
          }
          .animate-gradient-x {
            animation: gradient-x 3s ease infinite;
          }
        `}</style>
      </section>
    </>
  );
}
