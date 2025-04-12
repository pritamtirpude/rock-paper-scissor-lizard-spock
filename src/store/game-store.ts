import { create } from 'zustand';

type GameType = {
  playerChoice: string;
  computerChoice: string;
  setComputerChoice: (choice: string) => void;
  setPlayerChoice: (choice: string) => void;
  winner: string;
  setWinner: (winner: string) => void;
  score: number;
  setIncrementScore: (score?: number) => void;
  setDecrementScore: (score?: number) => void;
  isRulesOpen: boolean;
  setIsRulesOpen: (isOpen: boolean) => void;
};

export const useGameStore = create<GameType>()((set) => ({
  playerChoice: '',
  computerChoice: '',
  winner: '',
  score: 0,
  setPlayerChoice: (choice: string) => set({ playerChoice: choice }),
  setComputerChoice: (choice: string) => set({ computerChoice: choice }),
  setWinner: (winner: string) => set({ winner }),
  setIncrementScore: () => set((state) => ({ score: state.score + 1 })),
  setDecrementScore: () =>
    set((state) => ({ score: state.score <= 0 ? 0 : state.score - 1 })),
  isRulesOpen: false,
  setIsRulesOpen: (isOpen: boolean) => set({ isRulesOpen: isOpen }),
}));
