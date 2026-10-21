import { GalleryCard } from "./galleryCard";

export default function Gallery() {
  return (
    <section
      className="bg-zinc-950 font-sans text-base text-stone-200 w-full px-4 lg:px-8 py-10"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center">
        <div className="text-center flex flex-col items-center gap-1 max-w-xl">
          <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-800 text-amber-300 font-semibold text-xs">
            <span>📸</span>
            <span>Community Snaps</span>
          </div>
          <h2 className="font-bold text-3xl leading-tight text-stone-200 tracking-tight">
            More Dogs to Love
          </h2>
          <p className="font-normal text-base leading-6 text-stone-300">
            A lively collection of everyday wagging tails, sweet snouts, and
            happy smiles.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          <GalleryCard
            imgSrc="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
            name="Summer Garden Stroll"
            type="Corgi Companion"
          />
          <GalleryCard
            imgSrc="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
            name="Curious Head-tilt"
            type="French Bulldog"
          />
          <GalleryCard
            imgSrc="https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg"
            name="Sunlit Afternoon"
            type="Golden Retriever"
          />
          <GalleryCard
            imgSrc="https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg"
            name="Forest Wanderer"
            type="Aussie Shepherd"
          />
        </div>
        <div className="pt-4">
          <button
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-zinc-900 text-stone-200 font-semibold text-sm hover:bg-zinc-800 transition-transform active:scale-95 shadow-md"
            id="loadMoreBtn"
            type="button"
          >
            <span>🐾</span>
            <span>Show More Pups</span>
            <svg
              aria-hidden="true"
              className="shrink-0 size-5 text-amber-300"
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
              <path d="M20 7v5h-5M4 17v-5h5M6.1 6.1A8 8 0 0 1 20 12M4 12a8 8 0 0 0 13.9 5.9" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
