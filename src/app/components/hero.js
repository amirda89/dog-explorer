import HeroCard from "./heroCard";

export default function Hero() {
  const heroCard = [
    {
      title: "Friendliness",
      body: "10 / 10",
      d: "M8 14s1 3 4 3 4-3 4-3M8 9h.01M16 9h.01",
      w: "full",
      circle: true,
    },
    {
      title: "Energy Level",
      body: "Vibrant",
      d: "m13 2-9 12h7l-1 8 10-12h-7l1-8Z",
      w: "4/5",
    },
    {
      title: "Mood Boost",
      body: "Instant",
      d: "M12 3c1 5 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-7 0 3 1 4 2 4 2-3 1-6 1-9Z",
      w: "full",
    },
  ];
  return (
    <section
      className="bg-zinc-950 font-sans text-base text-stone-200 relative isolate w-full px-4 lg:px-8 pt-6 pb-10 overflow-hidden"
      id="discover"
    >
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-amber-300/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-orange-400/10 blur-3xl pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-800 text-amber-300 font-semibold text-xs shadow-sm">
            <span>🐾</span>
            <span>Daily Joy Feed</span>
          </div>
          <h1 className="font-extrabold text-4xl leading-tight sm:text-5xl tracking-tight text-stone-200">
            Meet a New
            <span className="text-amber-500 relative inline-block pl-2">
              Friend
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-amber-500"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 100 12"
              >
                <path
                  d="M0,8 Q50,0 100,8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={4}
                />
              </svg>
            </span>
          </h1>
          <p className="font-normal text-lg leading-7 text-stone-300 max-w-xl">
            Discover dogs from around the world, one adorable face at a time.
            Pure companionship, heart-melting grins, and gentle spirits.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              className="inline-flex items-center gap-1 px-10 py-4 rounded-full bg-amber-500 text-amber-950 font-semibold text-sm transition-transform hover:scale-105 active:scale-95 shadow-md"
              id="shuffleHeroBtn"
              type="button"
            >
              <svg
                aria-hidden="true"
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 14 4 4-4 4M18 2l4 4-4 4M2 18h2.5a6 6 0 0 0 5-2.7l5-7.6A6 6 0 0 1 19.5 5H22M2 6h2.5a6 6 0 0 1 5 2.7l5 7.6a6 6 0 0 0 5 2.7H22" />
              </svg>
              <span>Show Another</span>
            </button>
            <a
              className="inline-flex items-center gap-1 px-6 py-4 rounded-full bg-zinc-900 text-stone-200 font-semibold text-sm hover:bg-zinc-800 transition-colors"
              href="#breeds"
            >
              <span>Explore Breeds</span>
              <svg
                aria-hidden="true"
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 4v16m-6-6 6 6 6-6" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 w-full max-w-lg">
            {heroCard.map((card) => (
              <HeroCard
                title={card.title}
                d={card.d}
                w={card.w}
                body={card.body}
                circle={card.circle}
                key={card.title}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative bg-zinc-900 p-4 rounded-3xl shadow-xl overflow-hidden group">
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden bg-zinc-700">
              <img
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                src="https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg"
              />
              <div className="absolute top-4 left-4 flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-stone-200 font-semibold text-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Golden Retriever</span>
              </div>
              <div className="absolute top-4 right-4 px-4 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs shadow-sm">
                Gentle Giant
              </div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
              <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                <div>
                  <h3 className="font-bold text-2xl text-stone-200">
                    Sunny Cooper
                  </h3>
                  <p className="font-normal text-sm leading-5 text-stone-300">
                    Gentle companion • Loves afternoon park fetch
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-800/90 backdrop-blur-sm flex items-center justify-center text-amber-300 shadow-md">
                  <svg
                    aria-hidden="true"
                    className="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx={12} cy={16} rx={6} ry={4} />
                    <ellipse cx={5} cy={9} rx={2} ry={3} />
                    <ellipse cx={10} cy={5} rx={2} ry={3} />
                    <ellipse cx={16} cy={6} rx={2} ry={3} />
                    <ellipse cx={20} cy={11} rx={2} ry={3} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-1 flex items-center justify-between text-stone-300 font-semibold text-xs px-1">
              <span className="flex items-center gap-1">
                <svg
                  aria-hidden="true"
                  className="shrink-0 size-4 text-amber-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" />
                </svg>
                AKC Sporting Group
              </span>
              <span className="flex items-center gap-1">
                <svg
                  aria-hidden="true"
                  className="shrink-0 size-4 text-amber-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={9} />
                  <path d="M12 7v5l3 3" />
                </svg>
                10–12 Years
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
