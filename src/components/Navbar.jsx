import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home as HomeIcon } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="relative z-40">
      <nav className="container-page flex items-center justify-between py-6">
        <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-8 h-8 rounded-full bg-charcoal text-gold">
            <HomeIcon size={16} strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">Marlowe &amp; Co.</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-9">
          {links.slice(0, -1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-body text-sm tracking-wide transition-colors ${
                  isActive ? 'text-charcoal font-semibold' : 'text-charcoal-soft hover:text-charcoal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gold px-6 py-2.5 font-body text-sm font-semibold text-charcoal hover:bg-gold-dark transition-colors"
        >
          Contact us
        </NavLink>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-charcoal/15"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page pb-6 flex flex-col gap-1 border-t border-charcoal/10 pt-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-body text-base py-3 border-b border-charcoal/5 ${
                  isActive ? 'text-charcoal font-semibold' : 'text-charcoal-soft'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
