export default function UserGuide() {
  const steps = [
    { n: "1", t: "Create a workspace", d: "Invite teammates, set roles and permissions." },
    { n: "2", t: "Import & tag", d: "Upload files or connect drives. Add tags and custom fields." },
    { n: "3", t: "Search & automate", d: "Use NL search. Trigger approvals and notifications." },
    { n: "4", t: "Collaborate", d: "Comments, mentions, versions—keep everyone aligned." },
  ];

  return (
    <section className="px-6">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
          📘 User Guide
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white/90">
          Get productive in minutes
        </h1>
        <p className="mt-4 text-white/70 max-w-3xl mx-auto">
          A quick start to your first workspace—best practices included.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-3xl font-extrabold">{s.n}</div>
            <div className="mt-2 text-lg font-semibold">{s.t}</div>
            <div className="mt-1 text-white/70">{s.d}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-5xl text-center mt-12">
        <a
          href="/signup"
          className="inline-flex rounded-full bg-white px-6 py-3 text-gray-900 hover:opacity-90 transition"
        >
          Start for free
        </a>
      </div>
    </section>
  );
}
