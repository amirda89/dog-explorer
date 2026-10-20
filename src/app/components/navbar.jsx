export const NavBar = () => {
  return (
    <nav className="flex items-center gap-2 md:gap-4">
      <a
        aria-current="page"
        className="transition-colors bg-amber-500 text-amber-950 font-semibold text-sm rounded-full px-4 py-1"
        href="#discover"
      >
        Discover
      </a>
      <a
        className="font-semibold text-sm text-stone-300 hover:text-stone-200 px-4 py-1 rounded-full transition-colors"
        href="#breeds"
      >
        Breeds
      </a>
      <a
        className="font-semibold text-sm text-stone-300 hover:text-stone-200 px-4 py-1 rounded-full transition-colors"
        href="#gallery"
      >
        Gallery
      </a>
    </nav>
  );
};
