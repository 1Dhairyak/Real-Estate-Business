import { Building2, Users, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Building2,
    number: '01',
    title: 'Property Rentals',
    description:
      'We offer an extensive selection of rental properties, furnished and unfurnished, across prime locations. Our team helps match tenants to a place that suits how they actually live, not just what fits a budget.',
    points: ['Tenant screening & matching', 'Lease drafting & renewals', 'Furnished & unfurnished options'],
  },
  {
    icon: Users,
    number: '02',
    title: 'Property Management',
    description:
      'Marlowe offers comprehensive property management services to take the stress out of property ownership. From maintenance requests to rent collection, we handle the day-to-day so owners don\u2019t have to.',
    points: ['Maintenance coordination', 'Rent collection & reporting', 'Tenant communication'],
  },
  {
    icon: LineChart,
    number: '03',
    title: 'Investment Advice',
    description:
      'The real estate market offers numerous opportunities, but understanding where and when to invest can be challenging. Our advisors bring local data and years of on-the-ground experience to every recommendation.',
    points: ['Market & neighborhood analysis', 'Portfolio planning', 'Buy-to-let strategy'],
  },
];

export default function Services() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-wider text-gold-dark">What we do</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal mt-3">Services</h1>
        <p className="mt-5 text-charcoal-soft/75 leading-relaxed">
          Three ways we work with you &mdash; whichever one fits where you are right now.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-6">
        {services.map((s) => (
          <div key={s.number} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 rounded-card bg-white p-7 md:p-9 shadow-[0_10px_30px_-15px_rgba(43,38,34,0.15)]">
            <span className="grid place-items-center w-14 h-14 rounded-full bg-cream-deep text-gold-dark shrink-0">
              <s.icon size={22} />
            </span>
            <div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-gold-dark">{s.number}</span>
                <h2 className="font-display text-2xl font-semibold text-charcoal">{s.title}</h2>
              </div>
              <p className="mt-3 text-charcoal-soft/75 leading-relaxed max-w-2xl">{s.description}</p>
              <ul className="flex flex-wrap gap-3 mt-5">
                {s.points.map((p) => (
                  <li key={p} className="text-xs font-mono uppercase tracking-wide text-charcoal-soft/60 bg-cream-deep rounded-full px-3 py-1.5">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-between rounded-card bg-pine text-cream px-7 py-8 md:px-10 md:py-10 flex-col sm:flex-row gap-5 text-center sm:text-left">
        <p className="font-display text-xl leading-snug max-w-sm">Not sure which service fits? Let&rsquo;s talk it through.</p>
        <Link
          to="/contact"
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal hover:bg-gold-light transition-colors"
        >
          Contact us <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
