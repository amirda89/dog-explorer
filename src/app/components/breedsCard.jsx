export function BreedsCard({ breed }) {
  return (
    <div className="group flex flex-col bg-zinc-900 rounded-3xl p-4 shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="relative w-full h-64 rounded-3xl overflow-hidden bg-zinc-700">
        <img
          alt="img"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={breed.imgSrc}
        />
        <div className="absolute top-2 left-2 px-4 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-stone-200 font-semibold text-xs">
          {breed.type}
        </div>
      </div>
      <div className="flex flex-col gap-1 pt-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-xl text-stone-200">{breed.name}</h4>
          <span className="text-amber-300 font-semibold text-xs">
            {breed.age} Old
          </span>
        </div>
        <p className="font-normal text-sm leading-5 text-stone-300">
          {breed.desc}
        </p>
        <div className="flex flex-wrap gap-1 pt-1">
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
            {breed.character[1]}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
            {breed.character[2]}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
            {breed.character[3]}
          </span>
        </div>
      </div>
    </div>
  );
}
