export const NavItem = ({ title, href, active }) => {
  return active ? (
    <a
      aria-current="page"
      className="transition-colors bg-amber-500 text-amber-950 font-semibold text-sm rounded-full px-4 py-1"
      href={href}
    >
      {title}
    </a>
  ) : (
    <a
      className="font-semibold text-sm text-stone-300 hover:text-stone-200 px-4 py-1 rounded-full transition-colors"
      href={href}
    >
      {title}
    </a>
  );
};
