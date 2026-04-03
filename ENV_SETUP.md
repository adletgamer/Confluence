# Environment Setup for Wagmi Wallet Integration

## Required Environment Variable

To enable wallet connections, you need to set up a **WalletConnect Project ID**.

### Step 1: Get WalletConnect Project ID

1. Go to https://cloud.walletconnect.com
2. Sign up or log in with your email
3. Create a new project
4. Copy your **Project ID** (looks like: `abc123def456...`)

### Step 2: Add to Environment Variables

In v0, you can set environment variables in the **Settings** menu:

1. Click the **Settings** icon (gear) in the top right
2. Go to **Vars** tab
3. Add new variable:
   - **Key**: `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`
   - **Value**: Your copied Project ID from WalletConnect
4. Save

Alternatively, create `.env.local` in the project root:

```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

### Step 3: Restart Dev Server

After adding the environment variable:
1. Refresh the browser preview
2. Or restart the dev server if running locally

## Verification

Once configured, you should see:
- A "Connect Wallet" button in the navbar (top right)
- On the `/auth` page, a professional wallet selection modal with:
  - MetaMask
  - Coinbase Wallet
  - WalletConnect universal connector
  - And 50+ other wallets

## Troubleshooting

**"Can't resolve '@rainbow-me/rainbowkit'"**
- Dependencies were just added to package.json
- Refresh browser or restart dev server
- pnpm should automatically install them

**Wallet modal doesn't appear**
- Verify NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID is set correctly
- Check browser console for errors
- Ensure you're using a modern browser

**Error: "Invalid project ID"**
- Double-check the Project ID copied from WalletConnect
- Make sure it's not accidentally trimmed or includes spaces
- Generate a new one if needed

## What's Now Available

With wallet integration complete:
- Users can connect MetaMask, Coinbase, or any WalletConnect wallet
- Navbar shows connected account address and balance
- Auth page has professional wallet selection UI
- Can build DeFi features using wagmi hooks (useAccount, useBalance, useContractRead, etc.)
