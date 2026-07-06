import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Building2, Users, LineChart, ArrowRight } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import ServiceCard from '../components/ServiceCard';
import properties from '../data/properties.json';

const filterOptions = {
  types: [...new Set(properties.map((p) => p.type))],
  categories: [...new Set(properties.map((p) => p.category))],
  locations: [...new Set(properties.map((p) => p.location))],
  styles: [...new Set(properties.map((p) => p.style))],
};

const services = [
  {
    icon: Building2,
    number: '01',
    title: 'Property Rentals',
    description: 'An extensive selection of rental properties, furnished and unfurnished, across prime locations.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Property Management',
    description: 'Full-service management that takes the day-to-day stress out of owning a rental property.',
  },
  {
    icon: LineChart,
    number: '03',
    title: 'Investment Advice',
    description: 'Grounded guidance on where and when to invest, backed by local market knowledge.',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ type: '', category: '', location: '', style: '' });

  const featured = properties.filter((p) => p.featured).slice(0, 3);

  const handleSearch = () => {
    const params = new URLSearchParams(Object.entries(filters).filter(([, v]) => v));
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div>
      {/* Hero */}
      <section className="container-page pt-6 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl font-semibold text-charcoal tracking-tight">
              Find Your <span className="text-gold-dark">Perfect Match</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-charcoal-soft/75 max-w-md leading-relaxed">
              Whether you&rsquo;re buying, selling, or renting, our experienced team is here to guide you every step of the way.
            </p>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-1 flex flex-col gap-3 sm:gap-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80"
                alt="Timber-clad villa exterior"
                className="rounded-card object-cover w-full h-40 sm:h-52"
              />
            </div>
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80"
                alt="Modern home with large windows"
                className="rounded-card object-cover w-full h-56 sm:h-72"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-3 sm:gap-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&q=80"
                alt="Contemporary house facade"
                className="rounded-card object-cover w-full h-40 sm:h-52"
              />
            </div>
          </div>
        </div>

        {/* Search bar overlapping hero bottom edge */}
        <div className="mt-10 md:mt-14 md:-mb-16 relative z-10">
          <SearchBar filters={filters} setFilters={setFilters} onSearch={handleSearch} options={filterOptions} />
        </div>
      </section>

      {/* Handpicked Properties */}
      <section className="container-page pt-20 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">Handpicked<br className="hidden sm:block" /> Properties</h2>
          <p className="text-sm text-charcoal-soft/70 max-w-sm leading-relaxed">
            Browse our exclusive selection of top-rated properties. From modern apartments in the city to spacious family homes in the suburbs, we have something to suit every lifestyle and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal border-b-2 border-gold pb-1 hover:text-gold-dark transition-colors">
            View all properties <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Comprehensive Real Estate Solutions */}
      <section className="container-page pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal leading-tight max-w-sm">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="mt-5 text-sm text-charcoal-soft/70 leading-relaxed max-w-sm">
              From the first walk-through to the closing signature, our team stays close &mdash; so nothing about the process feels unfamiliar.
            </p>

            <div className="mt-8 rounded-card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=900&q=80"
                alt="Row of modern timber townhouses with a landscaped path"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>

          <div>
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}

            <div className="mt-8 flex items-center justify-between rounded-card bg-pine text-cream px-7 py-6">
              <p className="font-display text-lg leading-snug max-w-[220px]">Our friendly team is ready to assist you.</p>
              <a
                href="/contact"
                className="shrink-0 inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-gold-light transition-colors"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
