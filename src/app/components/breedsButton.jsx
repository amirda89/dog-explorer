export default function BreedsButton({ item }) {
  const activeButton = item.active
    ? "bg-amber-500 text-amber-950    shadow-sm"
    : "bg-zinc-900 text-stone-300 hover:text-stone-200 hover:bg-zinc-800    transition-colors";
  return (
    <>
      <button
        className={`px-4 py-1 rounded-full text-xs whitespace-nowrap font-semibold ${activeButton}`}
        type="button"
      >
        {item.text}
      </button>
    </>
  );
}
