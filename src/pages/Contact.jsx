import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "Rockwell / Siemens / L&T PLC & SCADA",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Info */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
              Let&apos;s Engineer Your Next Automation &amp; IoT System
            </h1>
            <p className="text-slate-600 leading-relaxed">
              Looking for a Rockwell System Integrator, Siemens/L&amp;T
              PLC-SCADA programming, field instrumentation, or custom embedded
              IoT hardware? Reach out to our engineering team[cite: 5].
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold">Email Us</h3>
                <p className="text-slate-600 text-sm">info@staipl.co.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold">
                  Call Engineering
                </h3>
                <p className="text-slate-600 text-sm">+91 91477 16445</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold">Location</h3>
                <p className="text-slate-600 text-sm">
                  RAGHABPUR, BISHNUPUR, NEPALGUNJ, Raghabpur, South Twenty Four
                  Parganas, West Bengal, 700103
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-900">
                Inquiry Received
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you,{" "}
                <span className="text-slate-900 font-semibold">
                  {formData.name}
                </span>
                . One of our automation &amp; embedded engineers will review
                your requirement and respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-lg bg-slate-100 text-blue-700 text-sm font-semibold hover:bg-slate-200"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
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
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Company / Industry
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Precision Mfg Pvt Ltd"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
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
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Area of Interest
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                >
                  <option>Rockwell / Siemens / L&amp;T PLC &amp; SCADA</option>
                  <option>Industrial Field Instrumentation</option>
                  <option>Industrial IoT &amp; Data Logging</option>
                  <option>Ready &amp; Custom Embedded Modules</option>
                  <option>Robotics &amp; Process Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Project Details / Technical Specs *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your PLC/SCADA platform, field instruments, or IoT monitoring requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
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
