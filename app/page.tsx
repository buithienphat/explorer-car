import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h2 className="font-bold text-4xl">Car Catalogue</h2>
          <p>Explore out cars you might like</p>
        </div>
      </section>
    </main>
  );
}
