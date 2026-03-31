// Mock data for Confluxi prototype
// No real blockchain or API integrations

export const mockLoans = [
  {
    id: "loan-001",
    title: "Working Capital Facility",
    amount: 50000,
    currency: "USDC",
    status: "active" as const,
    collateralRatio: 87,
    dueDate: "2026-06-15",
    createdAt: "2026-03-01",
    borrower: "0x1a2b...9f3e",
    lender: "0x4c5d...7h8i",
  },
  {
    id: "loan-002",
    title: "Inventory Financing",
    amount: 25000,
    currency: "USDC",
    status: "pending" as const,
    collateralRatio: 92,
    dueDate: "2026-05-20",
    createdAt: "2026-03-15",
    borrower: "0x1a2b...9f3e",
    lender: null,
  },
  {
    id: "loan-003",
    title: "Equipment Lease",
    amount: 75000,
    currency: "USDC",
    status: "completed" as const,
    collateralRatio: 100,
    dueDate: "2026-02-28",
    createdAt: "2026-01-10",
    borrower: "0x1a2b...9f3e",
    lender: "0x9j0k...2l3m",
  },
]

export const mockDashboardStats = {
  totalBorrowed: 125000,
  activeLoanCount: 2,
  creditScore: 742,
  collateralHealth: 89,
}

export const mockVerificationItems = [
  {
    id: "ver-001",
    title: "Identity Verification",
    description: "KYC documentation and wallet ownership proof",
    status: "verified" as const,
    completedAt: "2026-03-01",
  },
  {
    id: "ver-002",
    title: "On-chain History",
    description: "Transaction history and wallet age verification",
    status: "verified" as const,
    completedAt: "2026-03-02",
  },
  {
    id: "ver-003",
    title: "Collateral Proof",
    description: "Verification of locked collateral assets",
    status: "in-progress" as const,
    completedAt: null,
  },
  {
    id: "ver-004",
    title: "Income Verification",
    description: "Proof of recurring on-chain income streams",
    status: "pending" as const,
    completedAt: null,
  },
]

export const mockAuditTrail = [
  {
    id: "audit-001",
    action: "Loan Application Submitted",
    timestamp: "2026-03-15T10:30:00Z",
    actor: "Borrower",
    details: "Working Capital Facility - 50,000 USDC",
  },
  {
    id: "audit-002",
    action: "Verification Started",
    timestamp: "2026-03-15T10:35:00Z",
    actor: "System",
    details: "Identity verification initiated",
  },
  {
    id: "audit-003",
    action: "Document Uploaded",
    timestamp: "2026-03-15T11:00:00Z",
    actor: "Borrower",
    details: "KYC documentation submitted",
  },
  {
    id: "audit-004",
    action: "Verification Approved",
    timestamp: "2026-03-16T09:00:00Z",
    actor: "Verifier",
    details: "Identity verification complete",
  },
]

export const mockCreditFactors = [
  { label: "Wallet Age", score: 85, weight: 20 },
  { label: "Transaction History", score: 78, weight: 25 },
  { label: "Repayment Record", score: 92, weight: 30 },
  { label: "Collateral Diversity", score: 65, weight: 15 },
  { label: "Protocol Engagement", score: 70, weight: 10 },
]

export type LoanStatus = "active" | "pending" | "completed" | "defaulted"
export type VerificationStatus = "verified" | "in-progress" | "pending" | "failed"

export function getStatusColor(status: LoanStatus | VerificationStatus): string {
  const colors: Record<string, string> = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    verified: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    "in-progress": "bg-blue-50 text-blue-700 border-blue-200",
    completed: "bg-slate-50 text-slate-600 border-slate-200",
    defaulted: "bg-red-50 text-red-700 border-red-200",
    failed: "bg-red-50 text-red-700 border-red-200",
  }
  return colors[status] || colors.pending
}
