import { ArrowRight } from "lucide-react";
import logo from "@/assets/richard-portrait.png";
import { Reveal } from "@/components/Reveal";

export function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-glow/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-glow/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal variant="fade">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs tracking-[0.3em] text-cyan-glow uppercase">
              Senior Software Engineer · Analytics · Full Stack
            </span>
          </Reveal>
          <Reveal variant="rise" delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="text-gradient glow-text">Richard Martinez.</span>
            </h1>
          </Reveal>
          <Reveal variant="thread" delay={0.25}>
            <p className="mt-4 text-2xl md:text-3xl text-foreground/90">
              I build <span className="text-cyan-glow">analytics-driven platforms</span> that move metrics.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={0.4}>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              10+ years engineering full stack apps, ETL pipelines, KPI dashboards, and AI-assisted
              BI workflows for enterprise and healthcare turning ambiguous questions into reliable decisions.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={0.55}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-glow hover:shadow-cyan transition-all">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center px-7 py-3.5 rounded-full border border-primary/40 text-cyan-glow hover:bg-primary/10 transition-colors">
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="spinner" delay={0.2}>
          <div className="relative flex items-center justify-center mx-auto" style={{ width: 440, height: 440, maxWidth: "90vw" }}>
            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-3xl animate-pulse-ring" />
            <div className="absolute inset-4 rounded-full border border-cyan-glow/30 animate-spin-slow" />
            <div className="absolute inset-10 rounded-full border border-blue-glow/40 animate-spin-reverse" />
            <div className="absolute inset-2 rounded-full" style={{
              background: "conic-gradient(from 0deg, transparent, oklch(0.85 0.15 200 / 0.4), transparent, oklch(0.65 0.22 245 / 0.5), transparent)",
              filter: "blur(8px)",
            }} />
            {/* Image */}
            <div className="relative w-[78%] h-[78%] rounded-full overflow-hidden shadow-cyan animate-float-orb"
              style={{
                boxShadow: "0 0 80px oklch(0.85 0.15 200 / 0.6), 0 0 140px oklch(0.65 0.22 245 / 0.5), inset 0 0 40px oklch(0.65 0.22 245 / 0.3)",
                border: "2px solid oklch(0.85 0.15 200 / 0.6)",
              }}>
              <img src={logo} alt="Richard Martinez - Senior Software Engineer" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-glow/20 via-transparent to-cyan-glow/20" />
            </div>
            {/* Orbiting dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <div key={i} className="absolute inset-0 animate-spin-slow" style={{ animationDuration: `${10 + i * 2}s`, transform: `rotate(${deg}deg)` }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-glow shadow-[0_0_20px_oklch(0.85_0.15_200)]" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
