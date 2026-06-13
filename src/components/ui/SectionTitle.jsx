export default function SectionTitle({ eyebrow, title, subtitle, light = false, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-gold font-inter font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-playfair font-bold text-3xl md:text-4xl leading-tight mb-4 ${light ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-inter text-base md:text-lg ${light ? 'text-gray-300' : 'text-gray-light'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
