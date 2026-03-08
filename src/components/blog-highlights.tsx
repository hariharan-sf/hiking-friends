import Link from "next/link";

const posts = [
  {
    title: "What to Do in Hatton Sri Lanka",
    description: "A simple guide to the best places and activities in Hatton.",
  },
  {
    title: "Best Hiking Trails in Hatton",
    description: "Discover the top trails with the best views.",
  },
  {
    title: "Adam's Peak Hiking Guide",
    description: "Everything you need to know before climbing Adam's Peak.",
  },
  {
    title: "Hidden Waterfalls in Hatton",
    description: "Explore some of the most beautiful waterfalls in the area.",
  },
];

export default function BlogHighlights() {
  return (
    <section className="bg-emerald-950 py-16 text-white lg:py-24">
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">Travel Tips</p>
        <h2 className="font-luxury mt-3 text-3xl sm:text-4xl">Hiking Guides and Travel Tips</h2>
        <p className="mt-3 max-w-2xl text-white/85">Read our guides to learn more about Hatton and hiking in Sri Lanka.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-luxury text-2xl">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{post.description}</p>
            </article>
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100"
        >
          Read Our Blog
        </Link>
      </div>
    </section>
  );
}
