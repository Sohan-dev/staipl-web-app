import { Award, Building2, Cpu, Eye, Target, Users } from "lucide-react";
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

export default function About() {
  const [storyRef, storyVisible] = useScrollReveal();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Engineers Built on a Decade of Industrial Automation &amp; Embedded
            Experience
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Startrack Automation India Private Limited was founded by a group of
            engineers with over 10 years of hands-on expertise across PLC, HMI,
            SCADA, field instrumentation, robotics, and modern Embedded IoT
            technologies.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs shrink-0 self-start">
          <img
            src={rockwellBadge}
            alt="Recognized System Integrator - A Rockwell Automation Partner"
            className="h-16 object-contain"
          />
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            To bridge the gap between traditional Industrial Automation and
            modern IoT. Because we understand both shop-floor PLC/SCADA systems
            and embedded electronics, we connect heavy machinery seamlessly to
            intelligent digital ecosystems.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            To deliver reliable process automation, Rockwell/Siemens/L&amp;T
            integration, precision instrumentation, and custom embedded systems
            that enable smart control, monitoring, data logging, and analysis
            for any industry.
          </p>
        </div>
      </div>

      {/* Engineering DNA */}
      <div
        ref={storyRef}
        className={`rounded-2xl bg-white border border-slate-200 p-8 md:p-12 shadow-xs transition-all duration-700 ${
          storyVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Why Industries Trust STAIPL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-700 font-bold">
              <Award className="w-5 h-5" /> Recognized System Integrator
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Backed by over a decade of commissioning control panels, Rockwell,
              Siemens, and L&amp;T PLCs, SCADA networks, and field
              instrumentation[cite: 5].
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-700 font-bold">
              <Cpu className="w-5 h-5" /> Ready &amp; Custom Embedded IoT
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              From stand-alone embedded controllers to cloud-connected IoT
              telemetry modules, we engineer hardware tailored to harsh
              industrial environments.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-700 font-bold">
              <Users className="w-5 h-5" /> Direct Engineering Execution
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              You collaborate directly with the automation and embedded
              engineers designing, programming, and commissioning your plant
              systems.
            </p>
          </div>
        </div>
      </div>

      {/* Client Roster */}
      <div className="space-y-6">
        <div>
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">
            Our Clients
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
            Organizations We Have Served
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-2xs"
            >
              <Building2 className="w-5 h-5 text-blue-700 shrink-0" />
              <span className="font-bold text-slate-800 text-xs md:text-sm leading-snug">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
