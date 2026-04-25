/**
 * @earnwithalee7890/stacks-rank-sdk
 * StacksRank Core SDK for Clarity utilities and contract registry.
 */

export const CONTRACTS = {
  mainnet: {
    reputation: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.stacks-rank-reputation",
    swap: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.stacks-rank-swap",
    vault: "SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.stacks-rank-vault",
  }
};

/**
 * Utility for Clarity type interaction
 */
export class StacksRankProvider {
  constructor(private network: string = 'mainnet') {}

  getContract(name: keyof typeof CONTRACTS['mainnet']) {
    return CONTRACTS.mainnet[name];
  }
}

export * from './types';
