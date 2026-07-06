import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

function formatPrice(property) {
  const amount = property.category === 'Rent'
    ? `$${property.price.toLocaleString()}/mo`
    : `$${property.price.toLocaleString()}`;
  return amount;
}

export default function PropertyCard({ property }) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="group block rounded-card bg-white overflow-hidden shadow-[0_10px_30px_-12px_rgba(43,38,34,0.18)] hover:shadow-[0_20px_45px_-15px_rgba(43,38,34,0.28)] transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Signature: mono "for-sale placard" price tag, referencing yard-sign signage */}
        <div className="absolute top-4 right-4 bg-charcoal/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
          <span className="font-mono text-xs tracking-wide text-gold">{formatPrice(property)}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal leading-snug">{property.title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-charcoal-soft/70 mt-1.5">
          <MapPin size={13} className="text-gold shrink-0" />
          {property.location}
        </p>

        <div className="flex items-center gap-4 mt-4 font-mono text-[11px] text-charcoal-soft/60 uppercase tracking-wide">
          <span>{property.beds} bd</span>
          <span aria-hidden="true">&middot;</span>
          <span>{property.baths} ba</span>
          <span aria-hidden="true">&middot;</span>
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>

        <div className="mt-5 inline-flex items-center rounded-full bg-cream-deep px-5 py-2 text-sm font-semibold text-charcoal group-hover:bg-gold transition-colors">
          Details
        </div>
      </div>
    </Link>
  );
}
