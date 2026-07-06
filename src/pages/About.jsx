import { Award, Users2, MapPinned } from 'lucide-react';

const stats = [
  { icon: Award, value: '12+', label: 'Years in business' },
  { icon: Users2, value: '640+', label: 'Families housed' },
  { icon: MapPinned, value: '18', label: 'Neighborhoods covered' },
];

export default function About() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-gold-dark">About Marlowe &amp; Co.</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal mt-3 leading-tight">
            Real estate, handled the way a neighbor would handle it.
          </h1>
          <p className="mt-6 text-charcoal-soft/75 leading-relaxed">
            Marlowe &amp; Co. started as a two-person office above a hardware store, helping local families buy their
            first homes. We&rsquo;re bigger now, but the approach hasn&rsquo;t changed: know the street before you list the house,
            answer the phone yourself, and never push a sale that isn&rsquo;t the right fit.
          </p>
          <p className="mt-4 text-charcoal-soft/75 leading-relaxed">
            Today our team works across rentals, sales, and property management &mdash; but every agent still walks
            every listing in person before it goes live.
          </p>
        </div>

        <div className="rounded-card overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
            alt="Team reviewing a property together"
            className="w-full h-72 sm:h-96 object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        {stats.map((s) => (
          <div key={s.label} className="rounded-card bg-white p-7 text-center shadow-[0_10px_30px_-15px_rgba(43,38,34,0.15)]">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-cream-deep text-gold-dark mx-auto mb-4">
              <s.icon size={18} />
            </span>
            <p className="font-display text-3xl font-semibold text-charcoal">{s.value}</p>
            <p className="text-sm text-charcoal-soft/60 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-card bg-pine text-cream px-8 py-10 md:px-12 md:py-14 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold max-w-xl mx-auto">
          Our values haven&rsquo;t changed since day one: honesty, patience, and knowing the neighborhood.
        </h2>
      </div>
    </div>
  );
}
