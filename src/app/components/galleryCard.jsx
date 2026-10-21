export function GalleryCard({ imgSrc, name, type }) {
  return (
    <div className="group relative h-80 rounded-3xl overflow-hidden bg-zinc-900 shadow-md">
      <img
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        src={imgSrc}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <div>
          <p className="text-stone-200 font-semibold text-sm">{name}</p>
          <p className="text-amber-300 font-semibold text-xs">{type}</p>
        </div>
      </div>
    </div>
  );
}
