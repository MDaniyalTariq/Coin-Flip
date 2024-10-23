import { WishData, SolDistributedData, TotalParticipantsData, LastWinnerData } from '../types/apitypes';

export const fetchTotalWishes = async (): Promise<WishData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ totalWishes: 16 });
    }, 1000);
  });
};

export const fetchTotalSolDistributed = async (): Promise<SolDistributedData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ totalSolDistributed: 0.8 });
    }, 1000);
  });
};
export const fetchTotalParticipants = async (): Promise<TotalParticipantsData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ totalParticipants: 5 });
    }, 1000);
  });
};
export const fetchLastWinners = async (): Promise<LastWinnerData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const winners: LastWinnerData[] = [
        {
          percentage: "50%",
          imgSrc: "/assets/last-winner-1-BG8-5L8_.svg",
          wallet: "D9ah...ijcW",
          sol: "0.2654 SOL",
        },
        {
          percentage: "30%",
          imgSrc: "/assets/last-winner-2-D4kIYhem.svg",
          wallet: "44hf...33qZ",
          sol: "0.1592 SOL",
        },
        {
          percentage: "20%",
          imgSrc: "/assets/last-winner-3-C4wtV8pv.svg",
          wallet: "D9ah...ijcW",
          sol: "0.1061 SOL",
        },
      ];
      resolve(winners);
    }, 0);
  });
};