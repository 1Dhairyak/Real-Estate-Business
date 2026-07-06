import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Check } from 'lucide-react';
import properties from '../data/properties.json';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-charcoal">Property not found</h1>
        <p className="text-charcoal-soft/70 mt-3">It may have been sold or the listing removed.</p>
        <button
          onClick={() => navigate('/properties')}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-charcoal hover:bg-gold-dark transition-colors"
        >
          Back to properties
        </button>
      </div>
    );
  }

  const priceLabel = property.category === 'Rent'
    ? `$${property.price.toLocaleString()}/mo`
    : `$${property.price.toLocaleString()}`;

  return (
    <div className="container-page py-10 md:py-14">
      <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-soft/70 hover:text-charcoal mb-8">
        <ArrowLeft size={15} /> Back to properties
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
        <div>
          <div className="rounded-card overflow-hidden aspect-[16/10]">
            <img src={property.images[activeImage]} alt={property.title} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {property.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`rounded-lg overflow-hidden aspect-[4/3] ring-2 transition-all ${
                  activeImage === i ? 'ring-gold' : 'ring-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-charcoal mb-3">About this property</h2>
            <p className="text-charcoal-soft/75 leading-relaxed">{property.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-semibold text-charcoal mb-4">Amenities</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-charcoal-soft/80">
                  <Check size={14} className="text-gold-dark shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-8 h-fit rounded-card bg-white shadow-[0_10px_40px_-15px_rgba(43,38,34,0.2)] p-7">
          <span className="font-mono text-xs uppercase tracking-wider text-gold-dark">{property.category === 'Rent' ? 'For rent' : 'For sale'}</span>
          <h1 className="font-display text-2xl font-semibold text-charcoal mt-2">{property.title}</h1>
          <p className="flex items-center gap-1.5 text-sm text-charcoal-soft/70 mt-2">
            <MapPin size={14} className="text-gold" /> {property.location}
          </p>

          <p className="font-mono text-2xl text-charcoal mt-6">{priceLabel}</p>

          <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-charcoal/10 text-center">
            <div>
              <p className="font-display text-lg font-semibold text-charcoal">{property.beds}</p>
              <p className="text-[11px] uppercase tracking-wide text-charcoal-soft/60 font-mono">Beds</p>
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-charcoal">{property.baths}</p>
              <p className="text-[11px] uppercase tracking-wide text-charcoal-soft/60 font-mono">Baths</p>
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-charcoal">{property.sqft.toLocaleString()}</p>
              <p className="text-[11px] uppercase tracking-wide text-charcoal-soft/60 font-mono">Sqft</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="mt-7 w-full inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal hover:bg-gold-dark transition-colors"
          >
            Inquire about this property
          </Link>
        </aside>
      </div>
    </div>
  );
}
