import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-navy text-white pt-16 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Branding/gold logo.PNG`}
                alt="Norseman Yachts logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="font-inter text-sm text-slate-200/80 mb-6 max-w-sm">
              Crafting inshore, offshore and long‑range yachts that combine northern heritage, modern comfort and true self‑sufficiency at sea.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaInstagram size={18} />, url: '#' },
                { icon: <FaTwitter size={18} />, url: '#' },
                { icon: <FaFacebookF size={18} />, url: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-ocean-gold hover:border-ocean-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-[0.28em] uppercase text-slate-200 mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2 font-inter text-sm text-slate-200/80">
              {['Yachts', 'Story', 'Events', 'Network'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-ocean-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-[0.28em] uppercase text-slate-200 mb-4">
              CONTACT
            </h4>
            <div className="font-inter text-sm text-slate-200/80 space-y-2">
              <p>12 Marina Boulevard</p>
              <p>Monaco, MC 98000</p>
              <p>+377 98 76 54 32</p>
              <a
                href="mailto:inquiry@norsemanyachts.com"
                className="hover:text-ocean-gold transition-colors"
              >
                inquiry@norsemanyachts.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-[0.28em] uppercase text-slate-200 mb-4">
              STAY CONNECTED
            </h4>
            <p className="font-inter text-sm text-slate-200/80 mb-4">
              Receive the latest news regarding our fleet and events.
            </p>
            <form className="flex border-b border-white/20 pb-1 max-w-xs">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent border-none outline-none font-inter text-sm text-slate-100 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="font-inter text-xs tracking-[0.25em] uppercase text-ocean-gold hover:text-white transition-colors"
              >
                ↗
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-inter text-slate-400">
          <p>© {currentYear} Norseman Yachts. All rights reserved.</p>
          <div className="flex space-x-6">
            <button className="hover:text-ocean-gold transition-colors">Privacy Policy</button>
            <button className="hover:text-ocean-gold transition-colors">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
