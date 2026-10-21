export default function BreedsButton({ text, active }) {
  return active ? (
    <>
      <button
        className="px-4 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs whitespace-nowrap shadow-sm"
        type="button"
      >
        {text}
      </button>
    </>
  ) : (
    <>
      <button
        className="px-4 py-1 rounded-full bg-zinc-900 text-stone-300 hover:text-stone-200 hover:bg-zinc-800 font-semibold text-xs whitespace-nowrap transition-colors"
        type="button"
      >
        {text}
      </button>
    </>
  );
}
