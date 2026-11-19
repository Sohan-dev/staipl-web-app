import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "Industrial IoT & Data Logging",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Note: Connect to Formspree, EmailJS, or your Hostinger PHP backend later
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Info */}
        <div className="space-y-8">
          <div>
            <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
              Let&apos;s Engineer Your Next Smart System
            </h1>
            <p className="text-slate-400 leading-relaxed">
              Looking to retrofit existing machines with IoT monitoring, source
              ready embedded modules, or build a custom controller from scratch?
              Reach out to our engineering team.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email Us</h3>
                <p className="text-slate-400 text-sm">info@staipl.co.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Call Engineering</h3>
                <p className="text-slate-400 text-sm">+91 (000) 000-0000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-slate-400 text-sm">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 md:p-10">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">
                Inquiry Received
              </h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Thank you,{" "}
                <span className="text-white font-semibold">
                  {formData.name}
                </span>
                . One of our automation &amp; embedded engineers will review
                your requirement and respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-lg bg-slate-800 text-cyan-400 text-sm font-medium hover:bg-slate-700"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Rajesh Kumar"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Company / Industry
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Precision Mfg Pvt Ltd"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="rajesh@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Area of Interest
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                >
                  <option>Industrial IoT &amp; Data Logging</option>
                  <option>Ready Embedded Modules / Gateways</option>
                  <option>Custom PCB &amp; Firmware Development</option>
                  <option>Robotics &amp; Motion Control</option>
                  <option>PLC / Legacy Machine Retrofitting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Project Details / Technical Specs *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about the machines, protocols (Modbus, CAN, etc.), or custom module requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
              >
                Send Technical Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
