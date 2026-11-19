import { Link } from "react-router-dom";
import { Cpu, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Summary */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5 text-white font-bold text-lg">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <span>STAIPL</span>
          </div>
          <p className="max-w-md leading-relaxed">
            Bridging the gap between legacy Industrial Automation and
            next-generation Embedded IoT &amp; Robotics. Engineered for smart
            control, telemetry, and real-time analytics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-cyan-400 transition-colors"
              >
                Products &amp; Hardware
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-cyan-400 transition-colors"
              >
                About Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact Engineering
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
            Connect
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>info@staipl.co.in</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>+91 (000) 000-0000</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900 py-6 px-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} STAIPL. All rights reserved.
        Industrial Automation &amp; Embedded Systems.
      </div>
    </footer>
  );
}
