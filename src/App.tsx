import React, { useEffect, useMemo } from 'react';

import { AnimatePresence } from 'motion/react';
import RulesButton from './components/RulesButton/RulesButton';
import RulesModal from './components/RulesModal/RulesModal';
import ScoreHeader from './components/ScoreHeader/ScoreHeader';
import SelectChoice from './components/SelectChoice/SelectChoice';
import WinnerStatus from './components/WinnerStatus/WinnerStatus';
import { useGameStore } from './store/game-store';

const App = React.memo(() => {
  const {
    playerChoice,
    setWinner,
    setComputerChoice,
    setIncrementScore,
    setDecrementScore,
    isRulesOpen,
  } = useGameStore();

  const tiles = useMemo(
    () => ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'],
    []
  );

  useEffect(() => {
    if (playerChoice === '') return;

    const handleGameLogic = () => {
      const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
      setComputerChoice(randomTile);
      if (playerChoice === randomTile) {
        setWinner('Draw');
      } else if (
        (playerChoice === 'Rock' &&
          (randomTile === 'Scissors' || randomTile === 'Lizard')) ||
        (playerChoice === 'Paper' &&
          (randomTile === 'Rock' || randomTile === 'Spock')) ||
        (playerChoice === 'Scissors' &&
          (randomTile === 'Paper' || randomTile === 'Lizard')) ||
        (playerChoice === 'Lizard' &&
          (randomTile === 'Spock' || randomTile === 'Paper')) ||
        (playerChoice === 'Spock' &&
          (randomTile === 'Scissors' || randomTile === 'Rock'))
      ) {
        setWinner('Win');
        setIncrementScore();
      } else {
        setWinner('Lose');
        setDecrementScore();
      }
    };
    setTimeout(() => {
      handleGameLogic();
    }, 1000);
  }, [
    playerChoice,
    setWinner,
    setIncrementScore,
    setDecrementScore,
    setComputerChoice,
    tiles,
  ]);

  return (
    <main className="relative min-h-screen">
      <ScoreHeader />
      <SelectChoice />
      <WinnerStatus />
      <RulesButton />
      <AnimatePresence mode="wait" initial={false}>
        {isRulesOpen && <RulesModal />}
      </AnimatePresence>
    </main>
  );
});

export default App;
