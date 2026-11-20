import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowUpRight, Wrench } from "lucide-react";
import rockwellBadge from "../assets/rockwell-partner.png";

const SOLUTIONS = [
  {
    id: "rockwell-si",
    category: "PLC & SCADA Automation",
    title: "Rockwell Automation System Integration",
    badge: "Recognized System Integrator",
    desc: "End-to-end turnkey process automation as a Recognized Rockwell Automation System Integrator—covering architecture design, panel engineering, programming, and commissioning[cite: 5].",
    specs: [
      "ControlLogix, CompactLogix & Micro800 PLC Programming",
      "FactoryTalk View SE/ME HMI & Plant-Wide SCADA",
      "PowerFlex VFD Drives & Servo Motion Integration",
      "EtherNet/IP Industrial Network Architecture & Safety",
    ],
  },
  {
    id: "multi-plc",
    category: "PLC & SCADA Automation",
    title: "Siemens & L&T PLC, HMI & SCADA Solutions",
    badge: "Multi-Vendor Automation",
    desc: "Complete process automation and legacy system upgrades across Siemens and L&T (Larsen & Toubro) automation platforms tailored for manufacturing and infrastructure.",
    specs: [
      "Siemens SIMATIC S7-1200 / S7-1500 & TIA Portal Engineering",
      "L&T PLC & HMI Control Panel Design & Logic Development",
      "Custom SCADA Visualization, Alarm Management & Reporting",
      "Legacy Relay-to-PLC & Brownfield Plant Modernization",
    ],
  },
  {
    id: "instrumentation",
    category: "Instrumentation",
    title: "Industrial Field Instrumentation & Control",
    badge: "Process Instrumentation",
    desc: "Precision supply, calibration, loop checking, and integration of field instruments compatible with Rockwell, Siemens, and L&T control systems.",
    specs: [
      "Pressure, Temperature, Flow & Level Transmitters (4–20mA / HART)",
      "Control Valves, Actuators & Analytical Process Sensors",
      "Smart Energy Meters & Power Quality Analyzers",
      "Hazardous Area & Industrial-Grade Panel Wiring",
    ],
  },
  {
    id: "iot-embedded",
    category: "Embedded & IoT",
    title: "Ready & Custom Embedded IoT & Robotics Modules",
    badge: "IIoT & Embedded",
    desc: "Stand-alone embedded controllers and industrial IoT gateways that connect your PLCs and field instruments to real-time dashboards and cloud analytics.",
    specs: [
      "Modbus RTU/TCP, RS485 & EtherNet/IP to MQTT/Cloud Gateways",
      "Custom PCB Design, Firmware & Stand-Alone Embedded Systems",
      "High-Frequency Data Logging with Local Buffer Storage",
      "Robotics & Automated Material Handling Control Systems",
    ],
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "PLC & SCADA Automation",
    "Instrumentation",
    "Embedded & IoT",
  ];

  const filteredSolutions =
    selectedCategory === "All"
      ? SOLUTIONS
      : SOLUTIONS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header + Rockwell Partner Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
        <div className="max-w-3xl">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">
            Industrial Automation &amp; Embedded Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            PLC, HMI, SCADA, Instrumentation &amp; Smart IoT
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            From Recognized Rockwell Automation integration and Siemens/L&amp;T
            PLC-SCADA projects to field instrumentation and custom embedded IoT
            hardware, we deliver complete process automation[cite: 5].
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs shrink-0 self-start">
          <img
            src={rockwellBadge}
            alt="Recognized System Integrator - A Rockwell Automation Partner"
            className="h-14 object-contain"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === cat
                ? "bg-blue-700 text-white font-semibold shadow-sm"
                : "bg-white text-slate-700 border border-slate-300 hover:border-blue-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Solutions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSolutions.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                  {item.badge}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {item.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {item.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="space-y-2.5 border-t border-slate-100 pt-5 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Capabilities &amp; Platforms
                </p>
                {item.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-900 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
            >
              Request Technical Proposal <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      {/* Custom Engineering Banner */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-slate-50 border border-blue-200 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
            <Wrench className="w-4 h-4" /> Turnkey Process Automation &amp;
            Custom Hardware
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Planning a new PLC/SCADA line or IoT retrofit?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl">
            Whether you need Rockwell, Siemens, or L&amp;T automation
            integration or a custom embedded controller built from scratch, our
            engineers handle design through commissioning.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shrink-0 transition-colors shadow-sm"
        >
          Discuss Your Requirement
        </Link>
      </div>
    </div>
  );
}
