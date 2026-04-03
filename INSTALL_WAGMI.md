# Wagmi & RainbowKit Integration Guide

## Overview

This project uses **Wagmi** for Ethereum wallet interactions and **RainbowKit** for a professional wallet connection UI supporting:
- MetaMask
- Coinbase Wallet
- WalletConnect (universal connector)
- Trust Wallet
- And 50+ other wallets

## Installation Steps

### 1. Install Dependencies

```bash
pnpm add wagmi viem @rainbow-me/rainbowkit @tanstack/react-query
```

**Required packages:**
- `wagmi` - Ethereum React hooks
- `viem` - Low-level Ethereum library
- `@rainbow-me/rainbowkit` - Professional wallet connection UI
- `@tanstack/react-query` - Data fetching

### 2. Set Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id
```

**Get your WalletConnect Project ID:**
1. Go to https://cloud.walletconnect.com
2. Create a new project
3. Copy the Project ID
4. Add to `.env.local`

### 3. File Structure Created

```
components/
├── wallet-provider.tsx          # WagmiProvider wrapper
├── wallet-connect-button.tsx    # RainbowKit ConnectButton
lib/
├── wagmi-config.ts              # Wagmi configuration
app/
├── layout.tsx                   # Updated with WalletProvider
├── auth/page.tsx                # Updated with wallet connection
components/
├── navbar.tsx                   # Updated with wallet button
```

## Components Overview

### WalletProvider (`components/wallet-provider.tsx`)

Client-side provider wrapping the entire app with:
- **WagmiProvider**: Manages wallet state
- **QueryClientProvider**: Handles async data
- **RainbowKitProvider**: Renders wallet UI with custom theme
- Dark theme with primary blue accent (#4778E0)

```tsx
<WalletProvider>
  <App />
</WalletProvider>
```

### WalletConnectButton (`components/wallet-connect-button.tsx`)

Renders RainbowKit's ConnectButton with:
- Full account details on large screens
- Avatar-only on small screens
- Chain/Network display
- Account balance display

### Wagmi Config (`lib/wagmi-config.ts`)

Configuration for supported networks:
- Ethereum Mainnet
- Sepolia Testnet

## Usage in Components

### In Client Components

```tsx
'use client'

import { useAccount, useBalance } from 'wagmi'

export function MyComponent() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({ address })

  return (
    <div>
      {isConnected ? (
        <p>Balance: {balance?.formatted}</p>
      ) : (
        <p>Connect wallet to continue</p>
      )}
    </div>
  )
}
```

### In Server Components

For server components, use client component children:

```tsx
export default function Page() {
  return (
    <>
      <WalletInfo /> {/* Client component */}
    </>
  )
}
```

## Key Wagmi Hooks

- `useAccount()` - Current wallet address and connection status
- `useBalance()` - ETH/token balance for an address
- `useContractRead()` - Read contract data
- `useContractWrite()` - Write to contract
- `useNetwork()` - Current network/chain
- `useSwitchNetwork()` - Switch networks

## Supported Wallets

RainbowKit includes popular wallets:
- MetaMask
- Coinbase Wallet
- WalletConnect (50+ wallets)
- Trust Wallet
- Ledger
- Trezor
- Argent
- Phantom

Users select their preferred wallet when clicking "Connect Wallet"

## Theme Customization

In `wallet-provider.tsx`, customize RainbowKit theme:

```tsx
darkTheme({
  accentColor: '#4778E0',           // Primary blue
  accentColorForeground: 'white',   // Text on accent
  borderRadius: 'medium',            // Card radius
  fontStack: 'system',               // Font family
  overlayBlur: 'small',              // Modal backdrop
})
```

## Authentication Flow

1. User visits `/` (home)
2. Clicks "Sign In" → redirects to `/auth`
3. On `/auth`, clicks "Connect Wallet"
4. RainbowKit modal opens with wallet options
5. User selects MetaMask, Coinbase, WalletConnect, etc.
6. Wallet connection confirmed
7. User redirected to `/dashboard` with connected wallet
8. Navbar shows connected account with balance

## Networks Configuration

Current networks in `wagmi-config.ts`:
- **Mainnet** (id: 1) - Production Ethereum
- **Sepolia** (id: 11155111) - Test network

To add Conflux network, update the config:

```tsx
import { confluxESpace } from 'wagmi/chains'

chains: [mainnet, sepolia, confluxESpace]
```

## Development Notes

- WalletProvider requires `'use client'` directive
- RainbowKit styles imported in provider component
- All wallet interactions happen client-side (Next.js client components)
- Server components can access wallet data via client children
- No backend wallet key storage needed

## Next Steps

1. Install dependencies: `pnpm install`
2. Get WalletConnect Project ID from cloud.walletconnect.com
3. Add `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` to `.env.local`
4. Start dev server: `pnpm dev`
5. Test wallet connection on `/auth` page

## Troubleshooting

**"WagmiConfig not initialized"**
- Ensure WalletProvider wraps app in layout.tsx

**"RainbowKit styles not loading"**
- Check `import '@rainbow-me/rainbowkit/styles.css'` in wallet-provider.tsx

**Wallet won't connect**
- Verify NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID is set
- Check browser console for errors
- Ensure you're using a modern browser (Chrome, Firefox, Safari)

**Chain not supported**
- Add network to wagmi-config.ts chains array
- Restart dev server

## Resources

- [Wagmi Documentation](https://wagmi.sh)
- [RainbowKit Documentation](https://rainbowkit.com)
- [Viem Documentation](https://viem.sh)
- [WalletConnect Documentation](https://docs.walletconnect.com)
