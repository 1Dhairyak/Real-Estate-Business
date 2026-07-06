import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/properties.json';

const filterOptions = {
  types: [...new Set(properties.map((p) => p.type))],
  categories: [...new Set(properties.map((p) => p.category))],
  locations: [...new Set(properties.map((p) => p.location))],
  styles: [...new Set(properties.map((p) => p.style))],
};

export default function Properties() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || '',
    category: searchParams.get('category') || '',
    location: searchParams.get('location') || '',
    style: searchParams.get('style') || '',
  });
  const [applied, setApplied] = useState(filters);

  const results = useMemo(() => {
    return properties.filter((p) => {
      return (
        (!applied.type || p.type === applied.type) &&
        (!applied.category || p.category === applied.category) &&
        (!applied.location || p.location === applied.location) &&
        (!applied.style || p.style === applied.style)
      );
    });
  }, [applied]);

  return (
    <div className="container-page py-14 md:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-gold-dark">All listings</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal mt-3">Properties</h1>
        <p className="mt-4 text-charcoal-soft/70 leading-relaxed">
          Filter by building type, category, location, or style to find a place that fits how you actually want to live.
        </p>
      </div>

      <div className="mt-10">
        <SearchBar filters={filters} setFilters={setFilters} onSearch={() => setApplied(filters)} options={filterOptions} />
      </div>

      <p className="mt-10 mb-6 text-sm text-charcoal-soft/60">
        {results.length} {results.length === 1 ? 'property' : 'properties'} found
      </p>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-card bg-white/60">
          <p className="font-display text-xl text-charcoal">No properties match those filters.</p>
          <p className="text-sm text-charcoal-soft/60 mt-2">Try clearing a filter or choosing a different combination.</p>
        </div>
      )}
    </div>
  );
}
