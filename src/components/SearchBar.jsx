import { Search } from 'lucide-react';

export default function SearchBar({ filters, setFilters, onSearch, options }) {
  const update = (key) => (e) => setFilters((f) => ({ ...f, [key]: e.target.value }));

  const fields = [
    { key: 'type', label: 'Building Type', values: options.types },
    { key: 'category', label: 'Category', values: options.categories },
    { key: 'location', label: 'Location', values: options.locations },
    { key: 'style', label: 'Style', values: options.styles },
  ];

  return (
    <div className="bg-white rounded-card shadow-[0_20px_60px_-15px_rgba(43,38,34,0.25)] px-6 py-6 md:px-8 md:py-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-5 items-end">
        {fields.map((field) => (
          <label key={field.key} className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-gold-dark">{field.label}</span>
            <select
              value={filters[field.key]}
              onChange={update(field.key)}
              className="appearance-none bg-transparent border-b border-charcoal/15 pb-2 pr-6 text-sm font-medium text-charcoal focus:outline-none focus:border-gold cursor-pointer"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%232B2622' stroke-width='1.5' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
              }}
            >
              <option value="">Any</option>
              {field.values.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </label>
        ))}

        <button
          onClick={onSearch}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 font-body text-sm font-semibold text-charcoal hover:bg-gold-dark transition-colors h-fit"
        >
          <Search size={15} strokeWidth={2.5} />
          Search
        </button>
      </div>
    </div>
  );
}
