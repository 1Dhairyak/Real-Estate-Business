export default function ServiceCard({ icon: Icon, number, title, description }) {
  return (
    <div className="flex gap-5 py-7 border-b border-charcoal/10 last:border-b-0">
      <span className="grid place-items-center w-11 h-11 rounded-full bg-cream-deep text-gold-dark shrink-0">
        <Icon size={18} strokeWidth={2} />
      </span>
      <div>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-gold-dark">{number}</span>
          <h3 className="font-display text-lg font-semibold text-charcoal">{title}</h3>
        </div>
        <p className="text-sm text-charcoal-soft/75 leading-relaxed mt-2 max-w-md">{description}</p>
      </div>
    </div>
  );
}
