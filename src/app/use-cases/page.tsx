"use client";

import { useState, useMemo } from "react";
import { useCases, categories, type Category } from "@/data/use-cases";
import UseCaseCard from "@/components/UseCaseCard";

export default function UseCasesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    return useCases.filter((uc) => {
      const matchesCategory = activeCategory === "All" || uc.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        uc.title.toLowerCase().includes(query.toLowerCase()) ||
        uc.description.toLowerCase().includes(query.toLowerCase()) ||
        uc.category.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-3">Use Case Catalog</h1>
          <p className="text-slate-500 max-w-xl">
            A growing library of AI agents we&apos;ve designed for mid-market companies. Each one deploys into your existing stack.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Search */}
        <div className="relative mb-6">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search use cases..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(["All", ...categories] as (Category | "All")[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-brand-400 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-slate-400 mb-6">
          {filtered.length} {filtered.length === 1 ? "use case" : "use cases"}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {query.trim() ? ` matching "${query}"` : ""}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((uc) => (
              <UseCaseCard key={uc.id} useCase={uc} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-slate-400 text-sm">No use cases match your search.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 py-12 px-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Don&apos;t see your use case?
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">
            This catalog is just a starting point. If you have a workflow problem, we can build an agent for it.
          </p>
          <a
            href="mailto:hello@arca-global.com?subject=Custom Use Case Inquiry"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-400 text-white text-sm font-medium hover:bg-brand-500 transition-colors"
          >
            Tell us about your problem
          </a>
        </div>
      </div>
    </div>
  );
}
