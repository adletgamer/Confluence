import { User, Mail, Wallet, CheckCircle, Shield, Target, Edit2, Copy, MapPin, FileCheck, AlertCircle, TrendingUp, Lock, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHeader, MetricCard, StatusBadge } from "@/components/shared"

export default function ProfilePage() {
  const userEmail = "alex@example.com"
  const walletAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f42aE8"
  const currentScore = 742
  const potentialScore = 780

  const kycItems = [
    { label: "Identity Verification", status: "completed" as const, icon: <User size={18} /> },
    { label: "Wallet Ownership", status: "completed" as const, icon: <Wallet size={18} /> },
    { label: "Document Upload", status: "in-progress" as const, icon: <Shield size={18} /> },
  ]

  const incomeRanges = ["<1k", "1k-5k", "5k-10k", "10k+"]
  const employmentTypes = ["Employed", "Freelance", "Founder", "Unemployed"]
  const sourcesOfFunds = ["Salary", "Trading", "Business", "DeFi Yield"]
  
  // Fintech-standard country list
  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Singapore",
    "Hong Kong",
    "Germany",
    "France",
    "Switzerland",
    "Japan",
    "Australia",
    "Netherlands",
    "Other",
  ]
  
  // Major cities by region
  const citiesByCountry: Record<string, string[]> = {
    "United States": ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami"],
    "United Kingdom": ["London", "Manchester", "Edinburgh", "Birmingham", "Leeds"],
    "Canada": ["Toronto", "Vancouver", "Calgary", "Montreal", "Ottawa"],
    "Singapore": ["Singapore"],
    "Hong Kong": ["Hong Kong"],
    "Germany": ["Berlin", "Frankfurt", "Munich", "Hamburg", "Cologne"],
    "France": ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    "Switzerland": ["Zurich", "Geneva", "Basel", "Bern", "Lausanne"],
    "Japan": ["Tokyo", "Osaka", "Yokohama", "Nagoya", "Sapporo"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    "Netherlands": ["Amsterdam", "Rotterdam", "Amsterdam", "The Hague", "Utrecht"],
    "Other": ["Other"],
  }

  const riskLevels = ["Low", "Medium", "High"]
  const documentTypes = ["Passport", "National ID", "Driver License", "Visa"]
  const industries = ["Finance", "Technology", "Healthcare", "Real Estate", "Retail", "Manufacturing", "Other"]

  return (
    <main className="flex-1">
      <PageHeader
        title="My Profile"
        subtitle="Manage your account information and financial profile"
      />

      <div className="space-y-8 pb-12">
        {/* Profile Summary Card */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-[20px] p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Account Information
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-semibold text-foreground">{userEmail}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wallet size={18} className="text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Connected Wallet</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs font-mono text-foreground">
                        {walletAddress.slice(0, 10)}...{walletAddress.slice(-8)}
                      </p>
                      <button className="p-1 hover:bg-primary/10 rounded transition-colors">
                        <Copy size={14} className="text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Verification Status
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="inline-flex items-center gap-2">
                    <StatusBadge status="verified" />
                    <span className="text-sm text-muted-foreground">Profile Complete</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">All required verifications passed</p>
                </div>
                <Button variant="outline" size="sm" className="rounded-[10px]">
                  <Edit2 size={14} className="mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Score Impact Card - WOW Factor */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Current Credit Score
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-foreground">{currentScore}</span>
              <span className="text-sm text-muted-foreground">/ 850</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mt-6 mb-4">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
                style={{ width: `${(currentScore / 850) * 100}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">Strong creditworthiness</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-5 border border-emerald-200/30 rounded-[20px] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-4">
              Potential Score
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-emerald-700">{potentialScore}</span>
              <span className="text-sm text-emerald-600/60">/ 850</span>
            </div>
            <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden mt-6 mb-4">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${(potentialScore / 850) * 100}%` }}
              />
            </div>
            <p className="text-xs text-emerald-600 font-medium">Complete profile to improve your creditworthiness</p>
          </div>
        </div>

        {/* Identity & KYC Section */}
        <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Shield size={20} className="text-primary" />
            Identity & KYC Verification
          </h2>
          <div className="space-y-3">
            {kycItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between p-4 bg-secondary/40 rounded-[14px] hover:bg-secondary/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Financial Profile Section */}
        <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Target size={20} className="text-primary" />
            Financial Profile
          </h2>
          <form className="space-y-6">
            {/* Income Range */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Monthly Income Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {incomeRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    className="p-3 text-sm font-medium rounded-[12px] border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Employment */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Employment Status
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {employmentTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className="p-3 text-sm font-medium rounded-[12px] border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Country & City */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  Country
                </label>
                <select
                  id="country"
                  className="w-full px-4 py-2.5 border border-border rounded-[12px] bg-background text-sm font-medium hover:border-border/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-foreground mb-2">
                  City / Region
                </label>
                <Input
                  id="city"
                  placeholder="Enter your city"
                  className="rounded-[12px]"
                />
              </div>
            </div>

            {/* Source of Funds */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Source of Funds
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sourcesOfFunds.map((source) => (
                  <button
                    key={source}
                    type="button"
                    className="p-3 text-sm font-medium rounded-[12px] border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {source}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="rounded-[12px]">Save Changes</Button>
              <Button variant="outline" className="rounded-[12px]">
                Cancel
              </Button>
            </div>
          </form>
        </div>

        {/* Document & Identity Verification Section */}
        <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileCheck size={20} className="text-primary" />
            Document Verification
          </h2>
          
          <div className="space-y-6">
            {/* Primary Document */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Primary Document Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {documentTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className="p-3 text-sm font-medium rounded-[12px] border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Document Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="document-id" className="block text-sm font-semibold text-foreground mb-2">
                  Document ID Number
                </label>
                <Input
                  id="document-id"
                  placeholder="e.g., 123456789"
                  className="rounded-[12px]"
                />
              </div>
              <div>
                <label htmlFor="expiry" className="block text-sm font-semibold text-foreground mb-2">
                  Expiry Date
                </label>
                <Input
                  id="expiry"
                  type="date"
                  className="rounded-[12px]"
                />
              </div>
            </div>

            {/* Document Upload Status */}
            <div className="p-4 bg-secondary/30 rounded-[14px] flex items-start gap-3">
              <FileCheck size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Document Upload</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Upload a clear image or PDF of your primary identification document
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Assessment Section */}
        <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            Risk Assessment & Compliance
          </h2>

          <div className="space-y-6">
            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Primary Industry / Occupation
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    type="button"
                    className="p-3 text-sm font-medium rounded-[12px] border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Registration */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="business-reg" className="block text-sm font-semibold text-foreground mb-2">
                  Business Registration Number (if applicable)
                </label>
                <Input
                  id="business-reg"
                  placeholder="Leave blank if not applicable"
                  className="rounded-[12px]"
                />
              </div>
              <div>
                <label htmlFor="tax-id" className="block text-sm font-semibold text-foreground mb-2">
                  Tax ID / TIN
                </label>
                <Input
                  id="tax-id"
                  placeholder="Leave blank if not applicable"
                  className="rounded-[12px]"
                />
              </div>
            </div>

            {/* Perceived Risk Level */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Risk Profile (Auto-calculated)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {riskLevels.map((level) => {
                  const isLow = level === "Low"
                  const color = isLow
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                    : level === "Medium"
                    ? "bg-amber-50 border-amber-200 text-amber-700"
                    : "bg-red-50 border-red-200 text-red-700"
                  
                  return (
                    <div
                      key={level}
                      className={`p-4 rounded-[14px] border-2 ${color} font-semibold text-sm text-center`}
                    >
                      {level}
                    </div>
                  )
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Based on your profile data, you are classified as <span className="font-semibold">Low Risk</span>
              </p>
            </div>

            {/* Compliance Notes */}
            <div className="p-4 bg-blue-50 border border-blue-200/50 rounded-[14px] flex items-start gap-3">
              <Lock size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-700">Compliance & AML</p>
                <p className="text-xs text-blue-600 mt-1">
                  Your profile is screened against global AML/CFT watchlists. Updates may take 24 hours to process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Activity & Security */}
        <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Clock size={20} className="text-primary" />
            Account Activity & Security
          </h2>

          <div className="space-y-4">
            {[
              { label: "Last Login", value: "2 hours ago" },
              { label: "Account Created", value: "March 15, 2024" },
              { label: "Last Verification Update", value: "March 22, 2024" },
              { label: "Profile Completeness", value: "85%" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between p-4 bg-secondary/30 rounded-[12px]"
              >
                <p className="text-sm text-foreground font-medium">{item.label}</p>
                <p className="text-sm font-semibold text-primary">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <Button variant="outline" className="rounded-[12px] text-red-600 border-red-200 hover:bg-red-50">
              <AlertCircle size={14} className="mr-2" />
              Deactivate Account
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
