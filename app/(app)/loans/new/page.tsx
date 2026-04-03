'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Info, AlertCircle, CheckCircle2, TrendingDown, ShieldAlert, Lightbulb, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PageHeader } from '@/components/shared'

export default function NewLoanPage() {
  const [loanTitle, setLoanTitle] = useState('')
  const [loanAmount, setLoanAmount] = useState(50000)
  const [duration, setDuration] = useState('90')
  const [collateralRatio, setCollateralRatio] = useState(85)
  const [repaymentType, setRepaymentType] = useState('linear')
  const [purpose, setPurpose] = useState('')

  // Calculate dynamic risk level based on inputs
  const calculateRiskLevel = () => {
    let riskScore = 50
    if (collateralRatio < 75) riskScore += 30
    else if (collateralRatio < 90) riskScore += 15
    if (parseInt(duration) > 180) riskScore += 10
    if (loanAmount > 100000) riskScore += 5
    
    if (riskScore < 50) return { level: 'Low', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' }
    if (riskScore < 70) return { level: 'Medium', color: 'bg-amber-50 border-amber-200 text-amber-700' }
    return { level: 'High', color: 'bg-red-50 border-red-200 text-red-700' }
  }

  const riskAssessment = calculateRiskLevel()
  const riskDrivers = {
    positive: [
      `${collateralRatio}% collateral coverage`,
      'Credit score: 742 (Strong)',
      'Wallet age: 2.4 years',
      'Repayment history: 98%',
    ],
    negative: collateralRatio < 90 ? ['Collateral ratio below 90%'] : [],
  }

  const loanImpact = {
    defaultRisk: Math.max(5, 25 - (collateralRatio - 75) / 2),
    liquidationRisk: Math.max(3, 18 - (collateralRatio - 75) / 3),
  }

  return (
    <>
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} className="mr-1.5" />
          Back to Dashboard
        </Link>
      </div>

      <PageHeader
        title="Loan Application"
        subtitle="Create a professional loan request with real-time credit intelligence"
      />

      <div className="grid lg:grid-cols-7 gap-8">
        {/* LEFT: Loan Application Builder (70%) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Loan Basics Card */}
          <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-6">Loan Basics</h2>
            
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-foreground mb-2.5">
                  Loan Title
                </label>
                <Input
                  id="title"
                  placeholder="e.g., Working Capital Facility, Growth Investment"
                  value={loanTitle}
                  onChange={(e) => setLoanTitle(e.target.value)}
                  className="rounded-[12px] border-border text-base"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  A clear, descriptive name for your loan request
                </p>
              </div>

              {/* Amount & Token */}
              <div>
                <label htmlFor="amount" className="block text-sm font-semibold text-foreground mb-2.5">
                  Loan Amount
                </label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <span className="absolute left-4 top-3 text-sm font-semibold text-muted-foreground">$</span>
                    <Input
                      id="amount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="rounded-[12px] border-border pl-7 text-base font-medium"
                    />
                  </div>
                  <select className="px-4 py-2.5 border border-border rounded-[12px] bg-background text-sm font-semibold hover:border-border/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>USDC</option>
                    <option>USDT</option>
                    <option>DAI</option>
                    <option>ETH</option>
                  </select>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="duration" className="block text-sm font-semibold text-foreground mb-2.5">
                  Loan Duration
                </label>
                <select
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2.5 border border-border rounded-[12px] bg-background text-sm font-medium hover:border-border/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                  <option value="180">180 days</option>
                  <option value="365">365 days</option>
                </select>
              </div>
            </div>
          </div>

          {/* Use of Funds */}
          <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-6">Use of Funds</h2>
            <textarea
              placeholder="Describe how you'll use the loan proceeds (e.g., working capital expansion, inventory purchase, operational expenses)..."
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 border border-border rounded-[12px] bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Clear use-of-funds descriptions improve approval likelihood
            </p>
          </div>

          {/* Risk Parameters */}
          <div className="bg-card border border-border rounded-[20px] p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-6">Risk Parameters</h2>
            
            <div className="space-y-6">
              {/* Collateral Ratio Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-foreground">
                    Collateral Ratio
                  </label>
                  <span className="text-2xl font-bold text-primary">{collateralRatio}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={collateralRatio}
                  onChange={(e) => setCollateralRatio(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <p className="mt-3 text-xs text-muted-foreground">
                  {collateralRatio >= 120
                    ? 'Conservative - excellent protection against liquidation'
                    : collateralRatio >= 90
                    ? 'Balanced - good risk/return profile'
                    : collateralRatio >= 75
                    ? 'Aggressive - higher risk but faster execution'
                    : 'Very aggressive - significant liquidation risk'}
                </p>
              </div>

              {/* Repayment Type */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">
                  Repayment Structure
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'linear', label: 'Linear Repayment' },
                    { value: 'bullet', label: 'Bullet (End Date)' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setRepaymentType(option.value)}
                      className={`p-3 rounded-[12px] border-2 text-sm font-semibold transition-all ${
                        repaymentType === option.value
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-border/50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Risk Tier Display */}
              <div className={`p-4 rounded-[12px] border-2 ${riskAssessment.color}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={16} />
                  <span className="font-semibold">Dynamic Risk Tier</span>
                </div>
                <p className="text-sm">{riskAssessment.level}</p>
              </div>
            </div>
          </div>

          {/* Loan Summary */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/0 border border-primary/30 rounded-[20px] p-8">
            <h3 className="text-lg font-semibold text-foreground mb-5">Loan Summary</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Amount', value: `$${loanAmount.toLocaleString()}` },
                { label: 'Duration', value: `${duration} days` },
                { label: 'Collateral', value: `${collateralRatio}%` },
                { label: 'Risk Tier', value: riskAssessment.level },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                  <p className="text-base font-semibold text-foreground mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-primary/20 flex gap-3">
              <Button size="lg" className="rounded-[12px] flex-1">
                Submit Application
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-[12px]">
                <Link href="/dashboard">Cancel</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT: Credit Intelligence Panel (30%) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Credit Score Card */}
          <div className="bg-card border border-border rounded-[20px] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Your Credit Score
            </p>
            <div className="mb-4">
              <div className="text-5xl font-bold text-foreground">742</div>
              <p className="text-sm text-muted-foreground mt-2">Strong creditworthiness</p>
            </div>
            <div className="space-y-2 py-4 border-y border-border/50">
              {[
                { label: 'Confidence', value: '94%' },
                { label: 'Risk Tier', value: riskAssessment.level },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-primary mt-4 font-medium">
              Could improve to 780+ by increasing collateral to 120%
            </p>
          </div>

          {/* Risk Drivers */}
          <div className="bg-card border border-border rounded-[20px] p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground mb-4">Risk Drivers</h3>
            
            {/* Positive Factors */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-emerald-600 mb-2 flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                Positive Factors
              </p>
              <ul className="space-y-1.5">
                {riskDrivers.positive.map((factor) => (
                  <li key={factor} className="text-xs text-foreground flex gap-2">
                    <span className="text-emerald-600 mt-0.5">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Negative Factors */}
            {riskDrivers.negative.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-red-600 mb-2 flex items-center gap-1.5">
                  <AlertCircle size={14} />
                  Risk Factors
                </p>
                <ul className="space-y-1.5">
                  {riskDrivers.negative.map((factor) => (
                    <li key={factor} className="text-xs text-foreground flex gap-2">
                      <span className="text-red-600 mt-0.5">•</span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Loan Impact Simulation */}
          <div className="bg-card border border-border rounded-[20px] p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground mb-4">Impact Simulation</h3>
            
            <div className="space-y-4">
              {[
                { label: 'Default Risk', value: `${loanImpact.defaultRisk.toFixed(1)}%`, icon: TrendingDown },
                { label: 'Liquidation Risk', value: `${loanImpact.liquidationRisk.toFixed(1)}%`, icon: ShieldAlert },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                        <Icon size={14} className="text-primary" />
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-foreground">{item.value}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200/50 rounded-[10px] flex gap-2.5">
              <Lightbulb size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-700">
                Increase collateral to {Math.min(150, collateralRatio + 10)}% to reduce risk
              </p>
            </div>
          </div>

          {/* Underwriting Process */}
          <div className="bg-card border border-border rounded-[20px] p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground mb-4">Underwriting Timeline</h3>
            
            <div className="space-y-3">
              {[
                { step: 1, label: 'Application Review', status: 'next' },
                { step: 2, label: 'Credit Verification', status: 'waiting' },
                { step: 3, label: 'Risk Assessment', status: 'waiting' },
                { step: 4, label: 'Lender Matching', status: 'waiting' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                    item.status === 'next'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {item.step}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.status === 'next' ? 'Next step' : 'Waiting'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Strength */}
          <div className="bg-secondary/50 border border-border rounded-[20px] p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Profile Strength</h3>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">Completeness</span>
                <span className="text-sm font-bold text-primary">85%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '85%' }} />
              </div>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <p className="font-medium">To improve your profile:</p>
              <ul className="space-y-1.5">
                <li>• Complete identity verification</li>
                <li>• Link additional wallet addresses</li>
                <li>• Document past lending history</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
