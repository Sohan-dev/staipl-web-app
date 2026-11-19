import { Award, Cpu, Eye, Target, Users } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const [storyRef, storyVisible] = useScrollReveal();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
          Who We Are
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Engineers Built on a Decade of Shop-Floor &amp; Embedded Experience
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          STAIPL was founded by a dedicated group of engineers with over 10
          years of hands-on expertise spanning traditional Industrial
          Automation, Robotics, and modern Embedded IoT technologies.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            To bridge the critical gap between traditional Industrial Automation
            and modern IoT. Because we deeply understand both domains, we
            eliminate the friction of connecting heavy industrial machinery to
            intelligent digital ecosystems.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            To empower industries and innovators with reliable, ready-to-use and
            custom-engineered embedded systems—making smart control, real-time
            monitoring, data logging, and predictive analytics accessible for
            any system.
          </p>
        </div>
      </div>

      {/* Engineering DNA / Timeline */}
      <div
        ref={storyRef}
        className={`rounded-2xl bg-slate-900/40 border border-slate-800 p-8 md:p-12 transition-all duration-700 ${
          storyVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Why Industries Trust STAIPL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Award className="w-5 h-5" /> 10+ Years Domain Mastery
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              We have spent over a decade commissioning panels, programming
              PLCs, and designing ruggedized PCBs that survive high electrical
              noise and extreme temperatures.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Cpu className="w-5 h-5" /> Stand-Alone to Cloud-Connected
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Whether you need an offline, deterministic stand-alone embedded
              controller or a fleet of cloud-connected IoT telemetry modules, we
              architect the exact fit.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Users className="w-5 h-5" /> Direct Engineering Collaboration
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              You work directly with the hardware and firmware engineers
              building your solution—ensuring fast prototyping, transparent
              communication, and long-term support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
