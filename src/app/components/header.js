import { NavItem } from "./navItem";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-zinc-900/90 backdrop-blur-xl shadow-[0_12px_32px_-8px_rgba(18,20,19,0.7)]">
      <div className="w-full px-4 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-2 sm:h-16 sm:py-0">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="text-2xl">
            🐾
          </span>
          <span className="font-bold text-xl text-stone-200 tracking-tight">
            Dog Explorer
          </span>
        </div>
        <nav className="flex items-center gap-2 md:gap-4">
          <NavItem title="Discover" href="#discover" active />
          <NavItem title="Breeds" href="#breeds" />
          <NavItem title="Gallery" href="#gallery" />
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle color mode"
            className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-amber-300 hover:bg-zinc-800 transition-colors"
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
              <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
