import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Home() {
  const [bridgeRef, bridgeVisible] = useScrollReveal();
  const [pillarsRef, pillarsVisible] = useScrollReveal();

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10" />

        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            10+ YEARS IN INDUSTRIAL AUTOMATION &amp; EMBEDDED IOT
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Bridging the Gap Between{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Industrial Automation
            </span>{" "}
            and Smart IoT
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We engineer ready-to-deploy and custom embedded hardware, robotics
            controllers, and cloud telemetry modules to monitor, log, and
            automate any industrial system.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
            >
              Explore Hardware &amp; Modules <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold transition-all"
            >
              Consult Our Engineers
            </Link>
          </div>
        </div>
      </section>

      {/* THE ARCHITECTURE BRIDGE VISUAL */}
      <section
        ref={bridgeRef}
        className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-700 ${
          bridgeVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              We Speak Both Shop-Floor &amp; Cloud
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Most IT firms don&apos;t understand PLCs and harsh factory floors.
              Most automation vendors struggle with modern edge computing. We
              master both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Node */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">
                Legacy &amp; Shop-Floor OT
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                PLCs, Modbus RTU/TCP, RS485, 4-20mA sensors, VFD drives, CNC
                machines, and heavy industrial machinery.
              </p>
            </div>

            {/* Center Bridge */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-cyan-950/60 to-slate-950 border border-cyan-500/50 text-center space-y-3 shadow-xl shadow-cyan-500/10">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-cyan-300 text-lg">
                STAIPL Edge Gateways
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Custom firmware, protocol translation, local edge buffering, and
                deterministic real-time control.
              </p>
            </div>

            {/* Right Node */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg">
                Smart IoT &amp; Analytics
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                MQTT, REST APIs, predictive maintenance dashboards, automated
                alerts, and enterprise ERP integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE CAPABILITIES */}
      <section
        ref={pillarsRef}
        className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-700 ${
          pillarsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">
            End-to-End System Intelligence
          </h2>
          <p className="text-slate-400 mt-2">
            Four core functions built into every system we deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Smart Control",
              desc: "Closed-loop automated control logic running reliably on industrial-grade embedded controllers.",
            },
            {
              icon: Activity,
              title: "Live Monitoring",
              desc: "24/7 real-time visibility into machine health, power consumption, temperature, and cycle times.",
            },
            {
              icon: Database,
              title: "Data Logging",
              desc: "High-frequency local and cloud time-series logging with zero data loss during network drops.",
            },
            {
              icon: Cpu,
              title: "System Analysis",
              desc: "Actionable OEE metrics, anomaly detection, and historical trend reporting to cut downtime.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all group"
            >
              <item.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
