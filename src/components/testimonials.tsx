const testimonials = [
  {
    quote: "This was one of the best experiences in Sri Lanka. The views were amazing and our guide was very friendly.",
    author: "Sarah, UK",
  },
  {
    quote: "The hike was safe, fun, and very beautiful. We saw waterfalls and tea plantations.",
    author: "Daniel, Germany",
  },
  {
    quote: "Our guide showed us hidden trails that we would never find on our own.",
    author: "Emma, Australia",
  },
];

export default function Testimonials() {
  return (
    <section className="container py-16 lg:py-24">
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.author} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-amber-500">★★★★★</p>
            <blockquote className="mt-3 text-base leading-relaxed text-slate-700">&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-slate-900">- {item.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
