
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Creative Design",
    description:
      "Ubah ide sederhana menjadi pengalaman digital yang menarik.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Smart Workflow",
    description:
      "Atur pekerjaanmu dengan alur kerja yang lebih rapi dan efisien.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Better Insights",
    description:
      "Lihat perkembangan proyek dan temukan peluang baru.",
    icon: "↗",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f6] text-[#20231f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-2xl font-black tracking-tight">
          nova<span className="text-violet-600">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
          <a href="#features" className="transition hover:text-violet-600">
            Features
          </a>
          <a href="#about" className="transition hover:text-violet-600">
            About
          </a>
          <Link
            href="/page2"
            className="rounded-full bg-[#20231f] px-5 py-3 font-medium text-white transition hover:bg-violet-700"
          >
            Open Dashboard ↗
          </Link>
        </div>

        <Link
          href="/page2"
          className="rounded-full bg-[#20231f] px-4 py-2.5 text-sm text-white md:hidden"
        >
          Dashboard ↗
        </Link>
      </nav>

      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24"
      >
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm text-violet-700">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Your next big idea starts here
          </div>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Make room for{" "}
            <span className="text-violet-600">great ideas.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-500 md:text-lg">
            A little creativity, a better workflow, and a place
            to turn your ideas into something extraordinary.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/page2"
              className="rounded-full bg-violet-600 px-7 py-4 font-medium text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
            >
              Explore dashboard →
            </Link>

            <a
              href="#features"
              className="rounded-full border border-gray-200 px-7 py-4 font-medium transition hover:border-violet-400"
            >
              Discover more
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "D", "K", "R"].map((letter, index) => (
                <div
                  key={letter}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faf9f6] text-sm font-bold text-white ${
                    [
                      "bg-orange-400",
                      "bg-violet-500",
                      "bg-emerald-500",
                      "bg-pink-500",
                    ][index]
                  }`}
                >
                  {letter}
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">
                Made for creators
              </span>
              <br />
              Built for your next chapter.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-violet-200/70 blur-3xl" />
          <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-orange-200/70 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-gray-200/70">
            <div className="rounded-[1.5rem] bg-[#f1edff] p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Your workspace</p>
                  <h2 className="mt-1 text-xl font-bold">Creative Space</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl">
                  ✦
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-[#24212d] p-6 text-white">
                <p className="text-sm text-gray-300">Weekly progress</p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-4xl font-semibold">78%</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-emerald-300">
                    +12.5%
                  </span>
                </div>

                <div className="mt-5 flex h-24 items-end gap-2">
                  {[35, 55, 42, 75, 58, 88, 68, 100, 76, 90, 65, 82].map(
                    (height, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t-md ${
                          index === 7 ? "bg-violet-400" : "bg-white/20"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5">
                  <span className="text-2xl">✳</span>
                  <p className="mt-4 text-2xl font-bold">24</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Active projects
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5">
                  <span className="text-2xl">◈</span>
                  <p className="mt-4 text-2xl font-bold">92%</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Productivity
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-3 pb-2 pt-5">
              <span className="text-sm font-semibold">Your next chapter</span>
              <span className="text-sm text-violet-600">Let's go ↗</span>
            </div>
          </div>

          <div className="absolute -left-6 top-1/3 hidden rounded-2xl bg-white p-4 shadow-xl md:block">
            <span className="text-2xl">🚀</span>
            <p className="mt-2 text-sm font-bold">Keep growing!</p>
            <p className="text-xs text-gray-500">You're doing great.</p>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20"
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              What we offer
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Small details. Big impact.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-500">
            Everything you need to organize your work, explore your creativity,
            and move forward with confidence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group rounded-3xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl text-violet-600">
                  {feature.icon}
                </span>
                <span className="text-sm text-gray-400">
                  {feature.number}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-gray-500">
                {feature.description}
              </p>
              <Link
                href="/page2"
                className="mt-6 inline-block text-sm font-semibold text-violet-600"
              >
                Explore feature ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-gray-200 px-6 py-8 text-sm text-gray-500 md:px-12">
        <p>© 2026 Nova Studio.</p>
        <p>Made with creativity ✳</p>
      </footer>
    </main>
  );
}
