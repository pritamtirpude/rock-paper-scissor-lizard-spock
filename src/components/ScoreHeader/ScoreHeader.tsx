import NumberFlow from '@number-flow/react';
import React from 'react';
import logoBonus from '../../assets/images/logo-bonus.svg';
import { useGameStore } from '../../store/game-store';

const ScoreHeader = React.memo(() => {
  const { score } = useGameStore();
  return (
    <div className="px-8 pt-8">
      <div className="border-headerOutline mx-auto flex size-full max-w-3xl items-center justify-between rounded-2xl border-2 p-3 md:px-6 md:py-4">
        <img
          src={logoBonus}
          alt="logo"
          className="size-12 max-w-full object-cover md:size-28"
        />
        <div className="flex flex-col items-center justify-center rounded-md bg-gradient-to-r from-[#f3f3f3] to-white px-6 py-2.5 md:px-12 md:py-4">
          <span className="md:text-regular text-labelScore text-[10px] font-semibold uppercase">
            score
          </span>
          <span className="text-title md:text-score text-dark font-bold">
            <NumberFlow value={score} />
          </span>
        </div>
      </div>
    </div>
  );
});

export default ScoreHeader;
