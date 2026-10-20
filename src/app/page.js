import Header from "./components/header";
import Hero from "./components/hero";
import Breeds from "./components/breeds";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-zinc-950">
        <div className="flex flex-col w-full">
          <Hero />
          <Breeds />
          <Gallery />
        </div>
      </main>
      <Footer />
    </>
  );
}
