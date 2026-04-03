# Confluxi Profile - Fintech Metadata Specification

## Overview

The enhanced profile page now collects comprehensive fintech-standard metadata required for credit scoring, risk assessment, and regulatory compliance. This aligns with industry standards used by platforms like Stripe, Square, and institutional fintech providers.

---

## Section 1: Account Information (Summary Card)

### Fields
- **Email Address** - Primary contact & authentication mechanism
- **Connected Wallet Address** - Conflux eSpace wallet with copy-to-clipboard functionality
- **Verification Status** - Real-time compliance status badge
- **Profile Completeness** - Progress indicator (currently 85%)

### Purpose
Provides quick reference to core identity and connection details.

---

## Section 2: Credit Score Assessment

### Current Credit Score
- **Range**: 0-850 (industry standard)
- **Current**: 742 (strong creditworthiness)
- **Visual**: Horizontal progress bar with gradient effect
- **Interpretation**: Determines loan eligibility and interest rates

### Potential Credit Score
- **Range**: 0-850
- **Potential**: 780 (+38 points improvement)
- **Incentive**: Encourages profile completion and better credit behavior
- **Visual**: Emerald-themed progress bar emphasizing improvement

---

## Section 3: Identity & KYC Verification

### Required Items
1. **Identity Verification** (completed)
   - Proof of identity document
   - Facial recognition (optional)
   - Document validity check

2. **Wallet Ownership** (completed)
   - Transaction signature verification
   - Multi-sig confirmation
   - Custody proof

3. **Document Upload** (in-progress)
   - PDF/image submission
   - Automated OCR processing
   - Manual review (24-48 hours)

---

## Section 4: Financial Profile

### 4.1 Income Range (Binned)
**Options**: `<1k`, `1k-5k`, `5k-10k`, `10k+`

**Purpose**: 
- Income verification for creditworthiness
- Determines debt-to-income ratio
- Used in underwriting models
- Privacy-preserving (binned rather than exact amount)

**Industry Standard**: All major fintech platforms (Square, Stripe, Wise, etc.)

### 4.2 Employment Status
**Options**: `Employed`, `Freelance`, `Founder`, `Unemployed`

**Purpose**:
- Income stability assessment
- Employment verification
- Risk categorization
- Industry classification

---

## Section 5: Geographical Location

### 5.1 Country Selection
**Supported Countries** (12 primary):
- United States
- United Kingdom
- Canada
- Singapore
- Hong Kong
- Germany
- France
- Switzerland
- Japan
- Australia
- Netherlands
- Other

**Purpose**:
- Regulatory compliance (country-specific AML/CFT)
- Tax calculation and withholding
- Risk assessment by jurisdiction
- Eligible product determination

### 5.2 City / Region
**Input Type**: Free-form text input

**Purpose**:
- Geographic risk assessment
- Local banking regulation compliance
- Time zone determination
- Regional credit score adjustments

**Example Implementation**:
```
Country: United States
City: San Francisco
→ Auto-mapped to: CA, PST timezone, US regulatory framework
```

---

## Section 6: Source of Funds

**Options**: `Salary`, `Trading`, `Business`, `DeFi Yield`

**Purpose**:
- AML/CFT source verification
- Income stability assessment
- Risk categorization
- Determines lending eligibility

**Risk Weighting** (implicit):
- Salary: Low risk
- Business: Medium risk
- Trading: Medium-high risk
- DeFi Yield: High risk (volatile)

---

## Section 7: Document Verification

### 7.1 Primary Document Type
**Options**: `Passport`, `National ID`, `Driver License`, `Visa`

**KYC Standard**: Globally accepted forms of identity

### 7.2 Document Details
- **ID Number**: Unique identifier from document
- **Expiry Date**: Document validity verification

**Processing**:
1. User uploads document image/PDF
2. Automated OCR extraction
3. Manual review by compliance team
4. Status update (24-48 hours)

### 7.3 Document Upload Status
- Provides guidance to user
- Shows current processing state
- Indicates required actions

---

## Section 8: Risk Assessment & Compliance

### 8.1 Industry / Occupation
**Options**: 
- Finance
- Technology
- Healthcare
- Real Estate
- Retail
- Manufacturing
- Other

**Purpose**:
- Risk profile determination
- Business stability assessment
- Regulatory scrutiny levels
- Income volatility expectations

**Risk Weighting**:
- Finance: Low-Medium risk
- Technology: Low-Medium risk
- Real Estate: Medium risk
- Retail: Medium-High risk
- Manufacturing: Medium risk
- Other: High risk

### 8.2 Business Registration & Tax ID
**Fields**:
- Business Registration Number
- Tax ID / TIN

**Applicability**: Optional for individuals, required for business entities

**Purpose**:
- Business entity verification
- Tax compliance
- AML screening
- Regulatory registration checks

### 8.3 Risk Profile (Auto-Calculated)
**Levels**: Low | Medium | High

**Calculation Based On**:
- Income range
- Employment status
- Country of residence
- Document verification status
- Industry/occupation
- Source of funds
- Credit score
- Transaction history

**Display**:
- Color-coded badges (Green/Amber/Red)
- User-friendly interpretation
- Regulatory compliance notice

### 8.4 Compliance & AML Notice
- Global watchlist screening
- Processing timeline (24 hours)
- Regulatory framework transparency
- Privacy assurance

---

## Section 9: Account Activity & Security

### Metrics Tracked
1. **Last Login** - Account access monitoring
2. **Account Created** - Longevity indicator
3. **Last Verification Update** - Compliance recency
4. **Profile Completeness** - Engagement metric (target: >95%)

**Purpose**:
- Account health monitoring
- Fraud detection
- Compliance documentation
- User engagement tracking

### Security Options
- **Deactivate Account** - Account termination (reversible for 30 days)

---

## Data Privacy & Security

### Data Classification
- **PII** (Personal Identifiable Information)
  - Email, Name, Document ID
  - Encryption at rest + TLS in transit
  
- **Financial Data**
  - Income, Credit Score
  - PCI-DSS compliance
  
- **Geographic Data**
  - Country, City
  - Used for regulatory/risk only

### Compliance Standards
- **GDPR** (EU residents) - Right to access/deletion
- **CCPA** (CA residents) - Consumer privacy rights
- **AML/CFT** - Anti-Money Laundering screening
- **KYC** - Know Your Customer requirements

---

## Integration with Credit Scoring

All metadata feeds into the Confluxi credit scoring engine:

```
Credit Score = f(
  wallet_age,
  transaction_volume,
  repayment_history,
  income_stability,
  employment_type,
  geographic_risk,
  document_verification_status,
  compliance_status,
  ...
)
```

---

## Regulatory Compliance Mapping

| Field | Standard | Requirement |
|-------|----------|-------------|
| Identity Document | KYC | Mandatory |
| Country | AML/CFT | Mandatory |
| Income Range | FinCEN | Conditional |
| Source of Funds | OFAC | Mandatory |
| Tax ID | Tax Code | Conditional |
| Business Reg | Business Law | Conditional |

---

## Future Enhancements

1. **Bank Account Linking** - Direct verification with Plaid/Yodlee
2. **Credit Bureau Integration** - FICO/Experian cross-validation
3. **Income Verification** - Automated payroll/tax document review
4. **Real-Time Risk Updates** - Dynamic re-scoring on transaction changes
5. **Multi-Currency Support** - Global income denomination
6. **Biometric Authentication** - Enhanced security (2FA, face verification)
7. **Investor Accreditation** - Wealth verification for institutional features

---

## Technical Implementation Notes

### Data Types
```typescript
interface UserProfile {
  // Account
  email: string;
  walletAddress: string;
  verificationStatus: 'verified' | 'pending' | 'failed';
  
  // Scores
  currentScore: number; // 0-850
  potentialScore: number; // 0-850
  
  // Financial
  incomeRange: '<1k' | '1k-5k' | '5k-10k' | '10k+';
  employmentStatus: 'employed' | 'freelance' | 'founder' | 'unemployed';
  sourceOfFunds: 'salary' | 'trading' | 'business' | 'defi_yield';
  
  // Geographic
  country: string;
  city: string;
  
  // Documents
  primaryDocument: 'passport' | 'national_id' | 'driver_license' | 'visa';
  documentId: string;
  documentExpiry: Date;
  
  // Risk
  industry: string;
  businessRegNumber?: string;
  taxId?: string;
  riskProfile: 'low' | 'medium' | 'high'; // auto-calculated
  
  // Timestamps
  createdAt: Date;
  lastLogin: Date;
  lastVerificationUpdate: Date;
  profileCompletenessPct: number;
}
```

---

## References

- **Industry Standards**: Stripe Connect, Square Payment Platform, Wise Business API
- **Regulatory**: FinCEN, OFAC, GDPR, CCPA, AML/CFT guidelines
- **Credit Scoring**: FICO methodology, Experian standards
- **Best Practices**: OWASP Data Classification, CIS Controls
