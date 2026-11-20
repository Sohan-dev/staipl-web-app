import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Building2,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import rockwellBadge from "../assets/rockwell-partner.png";

const CLIENTS = [
  "HINDALCO INDUSTRIES LIMITED",
  "EMAMI AGROTECH LIMITED",
  "EXIDE INDUSTRIES LIMITED",
  "GARDEN REACH SHIPBUILDERS & ENGINEERS",
  "INDORAMA ELEME PETROCHEMICALS LIMITED",
  "ION EXCHANGE INDIA LIMITED",
  "MUNITIONS INDIA LIMITED",
  "LARSEN & TOUBRO CONSTRUCTION",
];

export default function Home() {
  const [bridgeRef, bridgeVisible] = useScrollReveal();
  const [clientsRef, clientsVisible] = useScrollReveal();
  const [pillarsRef, pillarsVisible] = useScrollReveal();

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-28 px-6 bg-gradient-to-b from-blue-50/80 via-white to-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            10+ YEARS IN INDUSTRIAL AUTOMATION, PLC/SCADA &amp; EMBEDDED IOT
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Bridging the Gap Between{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
              Industrial Automation
            </span>{" "}
            and Smart IoT
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We automate industrial processes with Rockwell, Siemens, and L&amp;T
            PLC, HMI, SCADA, and field instrumentation—paired with ready and
            custom embedded IoT modules for real-time monitoring and control.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="px-7 py-3.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-700/20"
            >
              Explore Solutions &amp; Hardware{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold transition-all shadow-xs"
            >
              Consult Our Engineers
            </Link>
          </div>

          {/* Rockwell Partner Recognition Strip */}
          <div className="pt-8 flex flex-col items-center justify-center">
            <div className="px-8 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm inline-flex flex-col sm:flex-row items-center gap-4">
              <img
                src={rockwellBadge}
                alt="Recognized System Integrator - A Rockwell Automation Partner"
                className="h-14 object-contain"
              />
              <div className="hidden sm:block h-10 w-px bg-slate-200" />
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xs text-center sm:text-left">
                Certified expertise in Rockwell Automation architectures,
                multi-vendor PLCs, and process instrumentation.
              </p>
            </div>
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
        <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              We Master Both Shop-Floor &amp; Cloud
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Most IT firms don&apos;t understand PLCs and harsh factory
              instrumentation. Most automation vendors struggle with modern edge
              computing. We engineer both seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Node */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">
                PLC, HMI, SCADA &amp; Field
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rockwell, Siemens, and L&amp;T PLCs, HMI panels, SCADA systems,
                VFDs, Modbus RTU/TCP, and industrial process instrumentation.
              </p>
            </div>

            {/* Center Bridge */}
            <div className="p-6 rounded-xl bg-gradient-to-b from-blue-50 to-white border-2 border-blue-600 text-center space-y-3 shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-blue-900 text-lg">
                STAIPL Edge &amp; Embedded
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Ready and custom stand-alone embedded controllers, protocol
                gateways, local edge buffering, and deterministic control.
              </p>
            </div>

            {/* Right Node */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">
                Smart IoT &amp; Analytics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                MQTT, REST APIs, real-time OEE dashboards, automated fault
                alerts, and plant-wide historical data logging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTEEMED CLIENTS SECTION */}
      <section
        ref={clientsRef}
        className={`bg-white border-y border-slate-200 py-20 px-6 transition-all duration-700 ${
          clientsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">
              Proven Industrial Track Record
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Trusted by Leading Enterprises &amp; Infrastructure Giants
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Delivering mission-critical process automation, instrumentation,
              and smart monitoring across heavy manufacturing, defense, energy,
              and construction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all flex items-center gap-3.5 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-700 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-800 text-xs md:text-sm leading-snug">
                  {client}
                </span>
              </div>
            ))}
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
          <h2 className="text-3xl font-bold text-slate-900">
            End-to-End System Intelligence
          </h2>
          <p className="text-slate-600 mt-2">
            Four core functions built into every industrial system we deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Smart Control",
              desc: "Closed-loop automated process control on Rockwell, Siemens, L&T PLCs, and industrial embedded controllers.",
            },
            {
              icon: Activity,
              title: "Live Monitoring",
              desc: "24/7 SCADA and web-based visibility into machine health, power consumption, process variables, and cycle times.",
            },
            {
              icon: Database,
              title: "Data Logging",
              desc: "High-frequency local and cloud time-series logging with zero data loss during network interruptions.",
            },
            {
              icon: Cpu,
              title: "System Analysis",
              desc: "Actionable OEE metrics, anomaly detection, and historical trend reporting to maximize plant uptime.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <item.icon className="w-8 h-8 text-blue-700 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
