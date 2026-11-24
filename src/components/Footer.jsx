import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import rockwellBadge from "../assets/rockwell-partner.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Summary & Rockwell Badge */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-lg">
            <img
              src={logo}
              alt="STAIPL Logo"
              className="w-7 h-7 object-contain"
            />
            <span>Startrack Automation India Private Limited</span>
          </div>
          <p className="max-w-md leading-relaxed text-slate-600">
            Recognized Rockwell Automation System Integrator bridging legacy
            Industrial Automation (PLC, HMI, SCADA, Instrumentation) with
            next-generation Embedded IoT &amp; Robotics.
          </p>
          <div className="pt-2">
            <img
              src={rockwellBadge}
              alt="Recognized System Integrator - A Rockwell Automation Partner"
              className="h-12 object-contain"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/" className="hover:text-blue-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-blue-700 transition-colors"
              >
                Solutions &amp; Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-700 transition-colors"
              >
                About Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-700 transition-colors"
              >
                Contact Engineering
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">
            Connect
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <span>info@staipl.co.in</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <span>+91 91477 16445</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <span>
                RAGHABPUR, BISHNUPUR, NEPALGUNJ, Raghabpur, South Twenty Four
                Parganas, West Bengal, 700103
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 py-6 px-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Startrack Automation India Private
        Limited. All rights reserved.
      </div>
    </footer>
  );
}
