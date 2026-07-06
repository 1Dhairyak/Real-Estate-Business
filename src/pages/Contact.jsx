import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Swap this for your Formspree endpoint (https://formspree.io) or Web3Forms endpoint.
// Formspree example: https://formspree.io/f/your-form-id
const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="container-page py-14 md:py-20">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-wider text-gold-dark">Get in touch</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal mt-3">Contact</h1>
        <p className="mt-5 text-charcoal-soft/75 leading-relaxed">
          Have a property in mind, or just starting to look? Send a message and someone from the team will get back
          to you within a business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 mt-12">
        <div className="flex flex-col gap-5">
          {[
            { icon: Phone, label: 'Call us', value: '+1 (555) 019-4482' },
            { icon: Mail, label: 'Email us', value: 'hello@marloweandco.example' },
            { icon: MapPin, label: 'Visit us', value: '14 Sunset Road, Coastal City' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-card bg-white p-5 shadow-[0_10px_30px_-15px_rgba(43,38,34,0.15)]">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-cream-deep text-gold-dark shrink-0">
                <item.icon size={17} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wide font-mono text-charcoal-soft/50">{item.label}</p>
                <p className="text-sm font-semibold text-charcoal">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="rounded-card bg-white p-7 md:p-9 shadow-[0_10px_30px_-15px_rgba(43,38,34,0.15)] flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-mono uppercase tracking-wide text-charcoal-soft/60">Name</span>
              <input name="name" required type="text" className="rounded-lg border border-charcoal/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-mono uppercase tracking-wide text-charcoal-soft/60">Email</span>
              <input name="email" required type="email" className="rounded-lg border border-charcoal/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-mono uppercase tracking-wide text-charcoal-soft/60">Phone (optional)</span>
            <input name="phone" type="tel" className="rounded-lg border border-charcoal/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-mono uppercase tracking-wide text-charcoal-soft/60">Message</span>
            <textarea name="message" required rows={5} className="rounded-lg border border-charcoal/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-charcoal hover:bg-gold-dark transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-pine font-semibold">Thanks — your message is on its way to us.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 font-semibold">
              Something went wrong. Double-check the form endpoint is set up, then try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
