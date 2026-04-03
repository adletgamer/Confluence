import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia } from 'wagmi/chains'

export const wagmiConfig = getDefaultConfig({
  appName: 'Confluxi',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'default_project_id',
  chains: [mainnet, sepolia],
  ssr: true,
})
