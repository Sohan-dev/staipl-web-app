import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Radio,
  Bot,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const PRODUCTS = [
  {
    id: "edge-gw",
    category: "Ready Modules",
    title: "STAIPL-GW100 Industrial IoT Gateway",
    badge: "Flagship Hardware",
    desc: "DIN-rail mountable protocol converter bridging legacy RS485/Modbus PLCs directly to cloud MQTT/HTTPS brokers.",
    specs: [
      "2x Isolated RS485, 1x Ethernet, Wi-Fi/4G LTE",
      "Wide 9V–36V DC Industrial Power Input",
      "Onboard Flash Buffering (Up to 1M records)",
      "DIN-Rail IP40 Rugged Enclosure",
    ],
  },
  {
    id: "daq-node",
    category: "Ready Modules",
    title: "Multi-Channel Analog & Digital DAQ Node",
    badge: "Telemetry",
    desc: "High-precision data acquisition module for retrofitting older machinery with real-time sensor monitoring.",
    specs: [
      "8x Analog Inputs (4-20mA / 0-10V)",
      "8x Opto-isolated Digital Inputs & 4x Relay Outputs",
      "16-bit ADC Resolution at 1kHz Sampling",
      "Zero-code Web Configuration UI",
    ],
  },
  {
    id: "robo-ctrl",
    category: "Robotics & Motion",
    title: "Embedded Motion & Robotics Controller",
    badge: "Robotics",
    desc: "Deterministic multi-axis control board engineered for AGVs, robotic arms, and automated material handling.",
    specs: [
      "CANopen, EtherCAT & UART Interfaces",
      "Closed-loop PID Encoder Feedback",
      "Real-time Safety Interlock & E-Stop Circuitry",
      "Custom Kinematics Firmware Support",
    ],
  },
  {
    id: "custom-oem",
    category: "Custom Engineering",
    title: "Bespoke PCB & Embedded Firmware Design",
    badge: "Custom ODM",
    desc: "Need a tailored controller built around your exact product? We take your concept from schematic to batch production.",
    specs: [
      "Custom Multi-layer PCB Design & EMI/EMC Testing",
      "Bare-metal C/C++ & FreeRTOS Firmware",
      "Custom Mobile/Web Dashboard Integration",
      "Full IP Ownership & Production Support",
    ],
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Ready Modules",
    "Robotics & Motion",
    "Custom Engineering",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
          Hardware &amp; Solutions
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
          Ready Modules &amp; Custom Embedded Systems
        </h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Deploy our field-tested industrial IoT gateways immediately, or
          partner with our engineering team to build custom stand-alone embedded
          hardware tailored to your machinery.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === cat
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl bg-slate-900/50 border border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                  {product.badge}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {product.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                {product.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {product.desc}
              </p>

              <div className="space-y-2.5 border-t border-slate-800/80 pt-5 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  Key Specifications
                </p>
                {product.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white font-semibold text-sm transition-colors"
            >
              Request Datasheet &amp; Pricing{" "}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      {/* Custom Engineering Banner */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-500/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
            <Wrench className="w-4 h-4" /> Custom Turnkey Development
          </div>
          <h3 className="text-2xl font-bold text-white">
            Have a unique machine or legacy protocol?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl">
            We design custom stand-alone embedded controllers and interfaces
            from scratch to integrate seamlessly with your existing industrial
            setup.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shrink-0 transition-colors"
        >
          Discuss Your Requirement
        </Link>
      </div>
    </div>
  );
}
