import ProductMock from "@/components/ProductMock";
import FlowDiagram from "@/components/FlowDiagram";

const SIGNUP = "mailto:hello@arca-global.com?subject=Arca early access";

const useCases = [
  {
    n: "01",
    k: "Ask",
    v: "Get straight answers about your project, with every claim traced back to the email, call or file it came from.",
  },
  {
    n: "02",
    k: "Build artifacts",
    v: "Turn what the project knows into briefs, reports, trackers and small web apps that stay in sync with it.",
  },
  {
    n: "03",
    k: "Run routines",
    v: "Schedule recurring work, like a Monday digest, a weekly status note or a daily check on what changed.",
  },
  {
    n: "04",
    k: "Browse the web",
    v: "Use the Chrome extension in your own browser, or run browser tasks in the cloud while you're away.",
  },
  {
    n: "05",
    k: "Work together",
    v: "Share a project with your team or a client. Everyone sees the same sources, the same wiki and the same answers.",
  },
  {
    n: "06",
    k: "Plug in your agents",
    v: "Give any agent the project as context through the API. Your data stays ready for whichever model you use.",
  },
];

const principles = [
  {
    k: "Bring your own key",
    v: "Connect the model provider you already pay for. Arca never marks up your tokens.",
  },
  {
    k: "Priced per seat, not per token",
    v: "A flat, predictable price per person. Use agents as often as the work needs.",
  },
  {
    k: "Built with the community",
    v: "Templates, routines and plugins made by the people who use Arca every day.",
  },
];

const plans = [
  {
    k: "Personal",
    price: "Free",
    note: "Free for good",
    v: "Everything you need to run your own projects.",
    items: [
      "Unlimited projects",
      "Uploads and a project email address",
      "Living wiki, chat and artifacts",
      "Bring your own model key",
    ],
    cta: "Get early access",
    featured: false,
  },
  {
    k: "Team",
    price: "Per seat",
    note: "One flat price per person",
    v: "For projects that involve more than one person.",
    items: [
      "Everything in Personal",
      "Shared projects and permissions",
      "Slack, meeting notes and WhatsApp",
      "Cloud routines and browser tasks",
      "API access for your agents",
    ],
    cta: "Talk to us",
    featured: true,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pt-44">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">A workspace for every project</p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.06] tracking-tight text-ink md:text-[68px]">
              Everything about a project,
              <br />
              <em className="font-light italic text-brand-600">in one place.</em>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg font-light leading-relaxed text-ink-mute">
              Forward emails, drop files, connect Slack and meeting notes. Arca builds a
              wiki of the project as things arrive. You can ask it questions, have it
              draft documents and apps, and set up routines that run on a schedule.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SIGNUP}
                className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-ink-paper shadow-[0_12px_30px_-10px_rgba(33,29,22,0.5)] transition-all duration-300 hover:bg-ink-soft"
              >
                Get early access, free
              </a>
              <a
                href="#how"
                className="rounded-full border border-ink/15 bg-white/50 px-8 py-3.5 text-sm font-medium text-ink-soft backdrop-blur-sm transition-all duration-300 hover:border-ink/30 hover:text-ink"
              >
                See how it works ↓
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <ProductMock />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="relative overflow-hidden bg-ink-paper px-6 py-28">
        <div className="pointer-events-none absolute inset-0 ember-light" />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <p className="eyebrow">The problem</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-[40px] md:leading-[1.15]">
              A project is spread across inboxes, threads and calls.
              <em className="font-light italic text-brand-600"> No AI sees all of it.</em>
            </h2>
          </div>
          <p className="text-[17px] font-light leading-relaxed text-ink-mute">
            The decision is in an email, the context is in a WhatsApp group, and the
            numbers are in a PDF someone uploaded last month. Every chat starts from
            nothing and you paste in the same background again. Arca collects all of
            it in one project, so you and your agents start with the full picture.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-ink-paper via-ink-wash to-ink-paper px-6 py-28"
      >
        <div className="pointer-events-none absolute inset-0 ember-light" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-[40px] md:leading-[1.15]">
              Send it in. <em className="font-light italic text-brand-600">Arca organises it.</em>
            </h2>
            <p className="mt-5 text-[17px] font-light leading-relaxed text-ink-mute">
              Every project gets its own email address and connectors. While you work, a
              long-running agent reads what comes in and rewrites the project wiki:
              who&apos;s involved, what was decided, what&apos;s due and what&apos;s still
              open.
            </p>
          </div>

          <div className="mt-16">
            <FlowDiagram />
          </div>

          {/* email callout */}
          <div className="mt-6 grid gap-6 rounded-3xl border border-ink-line/80 bg-white/70 p-8 backdrop-blur-sm md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h3 className="font-display text-2xl font-medium text-ink">
                CC your project.
              </h3>
              <p className="mt-2 max-w-xl text-[15px] font-light leading-relaxed text-ink-mute">
                Add the project&apos;s address to any email thread and Arca files it,
                attachments included. Nobody else on the thread has to install anything.
              </p>
            </div>
            <div className="rounded-2xl border border-ink-line bg-ink-paper px-5 py-4 font-mono text-[12px] leading-6 text-ink-soft">
              <div>
                <span className="text-ink-faint">To&nbsp;&nbsp;</span> priya@vendor.co
              </div>
              <div>
                <span className="text-ink-faint">Cc&nbsp;&nbsp;</span>
                <span className="rounded bg-brand-50 px-1.5 py-0.5 text-brand-700">
                  q4-launch@in.arca-global.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="build" className="relative scroll-mt-16 overflow-hidden bg-ink-paper px-6 py-28">
        <div className="pointer-events-none absolute inset-0 ember-light" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">What you can do</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-[40px] md:leading-[1.15]">
              The project knows the background.
              <br />
              <em className="font-light italic text-brand-600">You decide what to do with it.</em>
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink-line/80 bg-ink-line/60 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div
                key={u.n}
                className="bg-ink-paper p-8 transition-colors duration-300 hover:bg-white md:p-10"
              >
                <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-brand-500">
                  {u.n}
                </span>
                <h3 className="mt-4 font-display text-[22px] font-medium leading-snug text-ink">
                  {u.k}
                </h3>
                <p className="mt-3 text-[15px] font-light leading-relaxed text-ink-mute">
                  {u.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers — dark */}
      <section id="developers" className="relative scroll-mt-16 overflow-hidden bg-vault-900 px-6 py-28">
        <div className="pointer-events-none absolute inset-0 ember-dark" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow-dark">For developers</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink-paper md:text-[40px] md:leading-[1.15]">
              A context layer for
              <em className="font-light italic text-brand-300"> any agent.</em>
            </h2>
            <p className="mt-5 text-[17px] font-light leading-relaxed text-ink-faint">
              Every project is available through an API. Chats, artifacts, workflows and
              cron jobs are objects you can create and run from code. Point your own agent
              at a project and it gets the same context Arca has.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Chats", "Artifacts", "Workflows", "Cron jobs"].map((o) => (
                <span
                  key={o}
                  className="rounded-full border border-brand-400/30 bg-brand-500/10 px-3.5 py-1.5 font-mono text-[11px] text-brand-200"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-vault-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
              <span className="font-mono text-[11px] text-ink-faint">routine.ts</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-300/80">
                Preview
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-6 text-ink-line">
              <code>
                <span className="text-brand-300">const</span> project = arca.projects.
                <span className="text-amber-200">get</span>(
                <span className="text-emerald-300">&quot;q4-launch&quot;</span>);
                {"\n\n"}
                <span className="text-ink-faint">{"// Ask with full project context"}</span>
                {"\n"}
                <span className="text-brand-300">const</span> {"{ answer, citations }"} ={" "}
                <span className="text-brand-300">await</span> project.chats.
                <span className="text-amber-200">ask</span>({"\n"}
                {"  "}
                <span className="text-emerald-300">&quot;What&apos;s blocking the vendor contract?&quot;</span>
                {"\n"});
                {"\n\n"}
                <span className="text-ink-faint">{"// Every Monday, 9am"}</span>
                {"\n"}
                <span className="text-brand-300">await</span> project.cron.
                <span className="text-amber-200">create</span>({"{"}
                {"\n"}
                {"  "}schedule: <span className="text-emerald-300">&quot;0 9 * * MON&quot;</span>,
                {"\n"}
                {"  "}task: <span className="text-emerald-300">&quot;Post a status digest to #launch-team&quot;</span>,
                {"\n"}
                {"}"});
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Principles + pricing */}
      <section id="pricing" className="relative scroll-mt-16 overflow-hidden bg-ink-paper px-6 py-28">
        <div className="pointer-events-none absolute inset-0 ember-light" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-[40px] md:leading-[1.15]">
              Free to start.
              <em className="font-light italic text-brand-600"> No token bills.</em>
            </h2>
            <p className="mt-5 text-[17px] font-light leading-relaxed text-ink-mute">
              Agents cost very little to run on everyday work when you aren&apos;t paying
              someone else&apos;s margin on every token.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.k} className="text-center md:text-left">
                <div className="mx-auto h-px w-12 bg-brand-400 md:mx-0" />
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{p.k}</h3>
                <p className="mt-2 text-[15px] font-light leading-relaxed text-ink-mute">{p.v}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-2">
            {plans.map((p) => (
              <div
                key={p.k}
                className={`flex flex-col rounded-3xl border p-9 ${
                  p.featured
                    ? "border-brand-300 bg-white shadow-[0_24px_60px_-24px_rgba(160,74,23,0.35)]"
                    : "border-ink-line/80 bg-white/60"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-medium text-ink">{p.k}</h3>
                  <span className="mono-label">{p.note}</span>
                </div>
                <p className="mt-4 font-display text-4xl font-light text-ink">{p.price}</p>
                <p className="mt-2 text-[15px] font-light text-ink-mute">{p.v}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-ink-soft">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      {i}
                    </li>
                  ))}
                </ul>
                <a
                  href={SIGNUP}
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-medium transition-all duration-300 ${
                    p.featured
                      ? "bg-ink text-ink-paper hover:bg-ink-soft"
                      : "border border-ink/15 text-ink-soft hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark vault */}
      <section className="relative overflow-hidden bg-vault-900 px-6 py-32">
        <div className="pointer-events-none absolute inset-0 ember-dark" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7 text-center">
          <p className="eyebrow-dark">Early access</p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink-paper md:text-5xl">
            Start your first project
            <em className="font-light italic text-brand-300"> today.</em>
          </h2>
          <p className="max-w-lg text-lg font-light leading-relaxed text-ink-faint">
            We&apos;re letting people in a few at a time. Tell us what you&apos;re working
            on and we&apos;ll set up your first project with you.
          </p>
          <a
            href={SIGNUP}
            className="mt-2 rounded-full bg-brand-500 px-9 py-4 text-sm font-medium text-white shadow-[0_0_36px_rgba(192,94,34,0.4)] transition-all duration-300 hover:bg-brand-400 hover:shadow-[0_0_50px_rgba(213,124,66,0.55)]"
          >
            Request early access
          </a>
        </div>
      </section>
    </>
  );
}
