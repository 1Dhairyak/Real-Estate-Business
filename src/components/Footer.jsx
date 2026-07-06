import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

// lucide-react no longer ships brand/social logos, so these are small inline outlines.
const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
  </svg>
);
const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M20 5.5c-.7.4-1.5.6-2.3.8a3.3 3.3 0 0 0-5.6 3v.7A7.8 7.8 0 0 1 5.8 6.9s-2.7 6 3 8.7a8.5 8.5 0 0 1-5 1.4c6.3 3.6 14 0 14-8.1 0-.2 0-.4 0-.6.7-.5 1.3-1.1 1.8-1.8z" />
  </svg>
);
const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
    <circle cx="7.5" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
    <path d="M11.5 16.5v-3.5c0-1.5 1-2.5 2.3-2.5s2.2 1 2.2 2.5v3.5" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-charcoal text-cream-soft mt-24">
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-gold text-charcoal">
              <HomeIcon size={16} strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-semibold text-cream">Marlowe &amp; Co.</span>
          </Link>
          <p className="text-sm text-cream-soft/70 max-w-xs leading-relaxed">
            Considered real estate for buyers, sellers, and renters &mdash; built on local knowledge, not listings volume.
          </p>
        </div>

        <div>
          <h4 className="font-body font-semibold text-cream mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm text-cream-soft/70">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About us</Link></li>
            <li><Link to="/properties" className="hover:text-gold transition-colors">Properties</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body font-semibold text-cream mb-4 text-sm tracking-wide uppercase">Find Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center w-9 h-9 rounded-full border border-cream-soft/20 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon width={15} height={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body font-semibold text-cream mb-4 text-sm tracking-wide uppercase">Newsletter Signup</h4>
          <p className="text-sm text-cream-soft/70 mb-4">Stay updated with the latest listings and news from Marlowe. Sign up for our newsletter.</p>
          {submitted ? (
            <p className="text-sm text-gold font-semibold">You&rsquo;re on the list.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 rounded-full bg-cream/10 border border-cream-soft/20 px-4 py-2.5 text-sm text-cream placeholder:text-cream-soft/40 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-charcoal hover:bg-gold-dark transition-colors shrink-0"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-cream-soft/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-soft/50">
          <p>&copy; {new Date().getFullYear()} Marlowe &amp; Co. All rights reserved.</p>
          <p>Built with care, no cookies tracked.</p>
        </div>
      </div>
    </footer>
  );
}
