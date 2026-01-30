
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Yachts', path: '/yachts' },
    { name: 'Story', path: '/story' },
    { name: 'Events', path: '/events' },
    { name: 'Network', path: '/network' },
    { name: 'Contact', path: '/contact' },
  ];

  const baseNavClasses =
    'fixed w-full z-50 transition-all duration-300 bg-ocean-navy text-white border-b border-white/5';

  return (
    <nav className={`${baseNavClasses} ${isScrolled ? 'shadow-lg/40 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/Branding/gold logo.PNG`}
              alt="Norseman Yachts logo"
              className="h-9 lg:h-10 w-auto"
            />
          </NavLink>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-inter text-xs tracking-[0.25em] uppercase transition-colors pb-1 border-b border-transparent ${
                    isActive
                      ? 'text-ocean-gold border-ocean-gold'
                      : 'text-slate-100 hover:text-ocean-gold'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-ocean-navy/98 border-t border-white/10">
            <div className="flex flex-col py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-6 py-3 text-sm tracking-[0.25em] uppercase font-inter transition-colors ${
                      isActive
                        ? 'bg-white/5 text-ocean-gold border-l-4 border-ocean-gold'
                        : 'text-slate-100 hover:bg-white/5 hover:text-ocean-gold'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
