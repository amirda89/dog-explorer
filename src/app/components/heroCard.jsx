export default function HeroCard(props) {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-3xl bg-zinc-900 shadow-sm">
      <div className="flex items-center justify-between text-stone-300 font-semibold text-xs">
        <span>{props.title}</span>
        <svg
          aria-hidden="true"
          className="shrink-0 text-amber-300 size-4"
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
          <path d={props.d} />
        </svg>
      </div>
      <span className="font-bold text-xl text-stone-200">{props.body}</span>
      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-1">
        <div className={`bg-amber-500 h-full w-${props.w} rounded-full`} />
      </div>
    </div>
  );
}
