export interface WishData {
  totalWishes: number;
}

export interface SolDistributedData {
  totalSolDistributed: number;
}

export interface TotalParticipantsData {
  totalParticipants: number;
}

export type LastWinnerData = {
  percentage: string;
  imgSrc: string;
  wallet: string;
  sol: string | number;
};