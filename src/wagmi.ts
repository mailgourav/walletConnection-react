import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask({
      dappMetadata: {
        name: "MetaMask SDK + Wagmi Tutorial",
        url: "https://wagmi.io",
        iconUrl: "https://wagmi.io/favicon.ico",
      },
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
