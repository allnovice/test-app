import { useState } from 'react'

const sections = [
  {
    id: 'inventory',
    label: 'Inventory',
    title: 'Company Asset Inventory',
    description:
      'Keep your device, furniture, and equipment inventory organized in one place.',
    items: [
      { name: 'Laptop - Dell XPS 15', status: 'Active', location: 'HQ' },
      { name: 'Projector - Epson', status: 'In Maintenance', location: 'Conference Room' },
      { name: 'Phone - iPhone 15', status: 'Checked Out', location: 'Remote' },
    ],
  },
  {
    id: 'checkouts',
    label: 'Checkouts',
    title: 'Current Checkouts',
    description:
      'View assets that are currently assigned or loaned out to team members.',
    items: [
      { name: 'Tablet - iPad', status: 'Checked Out', location: 'Sales Team' },
      { name: 'Camera - Sony A7 IV', status: 'Checked Out', location: 'Marketing' },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    title: 'Maintenance Schedule',
    description:
      'Track service dates and keep maintenance work visible for every asset.',
    items: [
      { name: 'Printer - HP LaserJet', status: 'Needs Service', location: 'Admin' },
      { name: 'Server Rack', status: 'Scheduled', location: 'Data Center' },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    title: 'Tracking Reports',
    description:
      'Use this page as a template for asset summaries and reporting details.',
    items: [
      { name: 'Total assets', status: '42', location: 'All sites' },
      { name: 'Due for replacement', status: '8', location: 'This quarter' },
    ],
  },
]

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const section = sections.find((item) => item.id === activeSection) ?? sections[0]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-[32px] border border-slate-800 bg-slate-900/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Asset Tracker</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Company asset tracking made simple.
              </h1>
              <p className="mt-4 text-slate-400 sm:text-lg">
                A responsive template for mobile and desktop with common section styling.
                Add new sections by editing the section list in <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm text-sky-300">src/App.jsx</code>.
              </p>
            </div>
            <div className="w-full rounded-3xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/20 lg:w-auto">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-500">Sections</p>
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSection(item.id)}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'border-sky-400 bg-sky-400/15 text-sky-300 shadow-sm shadow-sky-400/10'
                        : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500 hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
          <section className="space-y-6">
            <article className="rounded-[28px] border border-slate-800 bg-slate-900/90 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.35)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-400">{section.label}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{section.title}</h2>
                </div>
                <div className="rounded-3xl bg-slate-800/80 px-4 py-2 text-sm text-slate-300">
                  {section.items.length} items tracked
                </div>
              </div>
              <p className="text-slate-400">{section.description}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">Status: {item.status}</p>
                    <p className="text-sm text-slate-400">Location: {item.location}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-800 bg-slate-900/90 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.35)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Quick Notes</h3>
                  <p className="mt-2 text-slate-400">
                    Use this layout to add forms, asset cards, or tables for each section.
                  </p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                  Template ready
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  Add sections by updating the <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sky-300">sections</code> array.
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  The button row above adapts automatically on mobile and desktop.
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  Common card styling is shared across every section page.
                </li>
              </ul>
            </article>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-slate-800 bg-slate-900/90 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.35)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Ready</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">Overview</h3>
                </div>
                <span className="rounded-full bg-sky-400/15 px-3 py-1 text-sm text-sky-300">
                  Mobile first
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="rounded-3xl bg-slate-950/80 p-4 text-sm text-slate-300">
                  Use the top buttons to switch between sections quickly.
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4 text-sm text-slate-300">
                  The design keeps controls above content for better mobile scanning.
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-800 bg-slate-900/90 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.35)]">
              <h3 className="text-xl font-semibold text-white">Next Steps</h3>
              <ol className="mt-4 space-y-3 text-slate-300">
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  1. Add new section objects to the array.
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  2. Replace sample item rows with your real asset data.
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  3. Add forms or tables inside the section card as needed.
                </li>
              </ol>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}

export default App;
