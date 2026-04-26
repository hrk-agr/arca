export type Category =
  | "Engineering"
  | "Security"
  | "HR & People"
  | "Finance & Legal"
  | "Operations"
  | "Sales & Marketing";

export interface UseCase {
  id: string;
  title: string;
  description: string;
  trigger: string;
  category: Category;
}

export const categories: Category[] = [
  "Engineering",
  "Security",
  "HR & People",
  "Finance & Legal",
  "Operations",
  "Sales & Marketing",
];

export const useCases: UseCase[] = [
  // Engineering
  {
    id: "changelog-drafter",
    title: "Changelog Drafter",
    description: "Generates polished weekly changelogs from merged pull requests and commit history.",
    trigger: "Weekly cron",
    category: "Engineering",
  },
  {
    id: "code-review-assistant",
    title: "Code Review Assistant",
    description: "Reviews pull requests for bugs, security gaps, and style violations before human review.",
    trigger: "On PR open",
    category: "Engineering",
  },
  {
    id: "incident-postmortem",
    title: "Incident Postmortem Writer",
    description: "Drafts postmortem reports from incident timelines, Slack threads, and monitoring alerts.",
    trigger: "On incident close",
    category: "Engineering",
  },
  {
    id: "api-docs-sync",
    title: "API Docs Sync",
    description: "Keeps API documentation in sync with code changes by detecting drift and submitting updates.",
    trigger: "On deploy",
    category: "Engineering",
  },
  {
    id: "pipeline-monitor",
    title: "Data Pipeline Monitor",
    description: "Detects anomalies in data pipelines, surfaces root causes, and alerts the on-call engineer.",
    trigger: "Continuous",
    category: "Engineering",
  },
  {
    id: "on-call-brief",
    title: "On-Call Briefing Agent",
    description: "Delivers a summarised system health brief at the start of every on-call shift.",
    trigger: "Shift handover",
    category: "Engineering",
  },

  // Security
  {
    id: "security-triage",
    title: "Security Triage",
    description: "Scans dependencies for CVEs, auto-fixes simple ones, and escalates the rest with context.",
    trigger: "Daily cron",
    category: "Security",
  },
  {
    id: "threat-intel",
    title: "Threat Intel Brief",
    description: "Daily security digest from HN, GitHub Advisories, and NVD cross-referenced against your stack.",
    trigger: "Daily cron",
    category: "Security",
  },
  {
    id: "access-review",
    title: "Access Review Agent",
    description: "Flags unused permissions and stale SaaS access across your tools and recommends revocations.",
    trigger: "Monthly cron",
    category: "Security",
  },
  {
    id: "phishing-detector",
    title: "Phishing Detector",
    description: "Analyses inbound emails for phishing patterns and quarantines suspicious messages automatically.",
    trigger: "On email receive",
    category: "Security",
  },

  // HR & People
  {
    id: "onboarding-qa",
    title: "Onboarding Q&A",
    description: "Answers new-hire questions instantly from your internal knowledge base, handbooks, and wikis.",
    trigger: "On demand",
    category: "HR & People",
  },
  {
    id: "exit-interview-analyzer",
    title: "Exit Interview Analyser",
    description: "Synthesises exit interview responses over time to surface attrition patterns for leadership.",
    trigger: "Monthly cron",
    category: "HR & People",
  },
  {
    id: "job-description-writer",
    title: "Job Description Writer",
    description: "Generates inclusive, structured job descriptions from a short brief by the hiring manager.",
    trigger: "On request",
    category: "HR & People",
  },
  {
    id: "performance-review-drafter",
    title: "Performance Review Drafter",
    description: "Drafts first-pass performance reviews from manager notes, goals, and peer feedback.",
    trigger: "Review cycle",
    category: "HR & People",
  },

  // Finance & Legal
  {
    id: "contract-reviewer",
    title: "Contract Reviewer",
    description: "Reviews contracts for non-standard clauses, liability gaps, and missing terms before legal sign-off.",
    trigger: "On upload",
    category: "Finance & Legal",
  },
  {
    id: "expense-anomaly",
    title: "Expense Anomaly Detector",
    description: "Detects unusual expense patterns across teams and flags them for finance review.",
    trigger: "Weekly cron",
    category: "Finance & Legal",
  },
  {
    id: "invoice-reconciler",
    title: "Invoice Reconciler",
    description: "Matches invoices to purchase orders and flags discrepancies before payment runs.",
    trigger: "On invoice receive",
    category: "Finance & Legal",
  },
  {
    id: "vendor-risk",
    title: "Vendor Risk Assessor",
    description: "Scores new and existing vendors on security posture, compliance, and financial health.",
    trigger: "On vendor add",
    category: "Finance & Legal",
  },

  // Operations
  {
    id: "meeting-summariser",
    title: "Meeting Summariser",
    description: "Records meetings, extracts decisions and action items, and routes them to owners automatically.",
    trigger: "After meeting",
    category: "Operations",
  },
  {
    id: "support-ticket-router",
    title: "Support Ticket Router",
    description: "Classifies incoming support tickets, drafts responses, and routes complex cases to humans.",
    trigger: "On ticket open",
    category: "Operations",
  },
  {
    id: "internal-kb-qa",
    title: "Internal Knowledge Base Q&A",
    description: "Answers employee questions across policies, processes, and internal docs in real time.",
    trigger: "On demand",
    category: "Operations",
  },

  // Sales & Marketing
  {
    id: "competitor-monitor",
    title: "Competitor Monitor",
    description: "Tracks competitor moves, pricing changes, and product updates and delivers a daily brief.",
    trigger: "Daily cron",
    category: "Sales & Marketing",
  },
  {
    id: "rfp-drafter",
    title: "RFP Response Drafter",
    description: "Drafts RFP responses from your past wins, product docs, and company knowledge base.",
    trigger: "On RFP receive",
    category: "Sales & Marketing",
  },
  {
    id: "sales-call-summary",
    title: "Sales Call Summariser",
    description: "Summarises sales calls, extracts next steps, and pushes updates directly to your CRM.",
    trigger: "After call",
    category: "Sales & Marketing",
  },
  {
    id: "churn-predictor",
    title: "Churn Predictor",
    description: "Flags at-risk accounts based on product usage signals and engagement trends.",
    trigger: "Weekly cron",
    category: "Sales & Marketing",
  },
];
