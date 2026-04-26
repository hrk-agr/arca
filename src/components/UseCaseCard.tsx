import type { UseCase } from "@/data/use-cases";

export default function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <div className="group flex flex-col gap-3 p-5 bg-white rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-900">{useCase.title}</h3>
        <span className="shrink-0 text-xs font-medium text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">
          {useCase.category}
        </span>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">{useCase.description}</p>
      <div className="mt-auto pt-2 border-t border-slate-50">
        <span className="text-xs text-slate-400">{useCase.trigger}</span>
      </div>
    </div>
  );
}
