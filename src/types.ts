export interface ReputationScore {
  address: string;
  score: number;
  rank: number;
  lastUpdated: number;
}

export interface SwapDetails {
  tokenIn: string;
  tokenOut: string;
  amountIn: number;
  minAmountOut: number;
}

export interface VaultConfig {
  owner: string;
  threshold: number;
  signers: string[];
}
