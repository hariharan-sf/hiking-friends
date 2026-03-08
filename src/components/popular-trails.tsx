const trails = [
  {
    title: "Adam's Peak Trail",
    description: "A world-famous climb in Sri Lanka, especially loved for sunrise views.",
    imageType: "3:2 image placeholder - Pilgrim steps and pre-dawn mountain horizon",
  },
  {
    title: "Gartmore Waterfall Trail",
    description: "A peaceful forest-and-estate route leading to a scenic waterfall.",
    imageType: "3:2 image placeholder - Forest trail opening to a waterfall",
  },
  {
    title: "Tea Estate Trails",
    description: "Easy walking routes across bright green tea plantations with wide views.",
    imageType: "3:2 image placeholder - Curved tea rows with hikers walking",
  },
  {
    title: "Horton Plains Trails",
    description: "Explore one of Sri Lanka's iconic national parks with dramatic landscapes.",
    imageType: "3:2 image placeholder - Cloudy plains and cliff-edge viewpoint",
  },
];

export default function PopularTrails() {
  return (
    <section id="trails" className="bg-slate-50 py-16 lg:py-24">
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Popular Trails</p>
        <h2 className="font-luxury mt-3 text-3xl text-slate-900 sm:text-4xl">Popular Hiking Trails in Hatton</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {trails.map((trail) => (
            <article key={trail.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 flex aspect-[3/2] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-xs text-slate-600">
                {trail.imageType}
              </div>
              <h3 className="font-luxury text-2xl text-slate-900">{trail.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{trail.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
