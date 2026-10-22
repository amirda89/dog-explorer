export const NavItem = ({ item }) => {
  const activeClass = item.active
    ? "bg-amber-500 text-amber-950"
    : "text-stone-300 hover:text-stone-200";
  return (
    <a
      href={item.href}
      aria-current={item.active ? "page" : undefined}
      className={`font-semibold text-sm rounded-full px-4 py-1 transition-colors ${activeClass}`}
    >
      {item.title}
    </a>
  );
};
