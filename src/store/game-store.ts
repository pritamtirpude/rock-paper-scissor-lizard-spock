import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export const useGameStore = create<GameType>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'game-storage', // name of the item in the storage (must be unique)
      partialize: (state) => ({ score: state.score }), // only persist the score
    }
  )
);
