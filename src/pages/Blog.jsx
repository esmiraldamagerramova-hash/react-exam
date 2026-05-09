const POSTS = [
  {
    title: "Designing a calm, modern home",
    date: "May 2026",
    excerpt:
      "A quick guide to picking materials, colors, and lighting that feel premium without being loud.",
  },
  {
    title: "How to choose the right sofa",
    date: "Apr 2026",
    excerpt:
      "Seat depth, fabric durability, and the small details that make a big difference over time.",
  },
  {
    title: "Minimalist workspace upgrades",
    date: "Mar 2026",
    excerpt:
      "Keyboard trays, cable management, and layout tips that instantly elevate your desk setup.",
  },
]

export default function Blog() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-zinc-600">
          A few sample posts to make navigation feel “real” in your portfolio.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        {POSTS.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <p className="text-xs font-medium text-zinc-500">{p.date}</p>
            <h2 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{p.excerpt}</p>
            <button className="mt-5 inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800">
              Read more
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

