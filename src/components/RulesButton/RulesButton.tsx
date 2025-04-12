import { motion } from 'motion/react';
import { useGameStore } from '../../store/game-store';

const GameRules = () => {
  const { setIsRulesOpen } = useGameStore();
  return (
    <div className="md:tems-end fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center md:right-8 md:bottom-8 md:left-0 md:translate-x-0 md:justify-end md:to-0%">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsRulesOpen(true)}
        className="text-regular cursor-pointer rounded-md border border-white bg-transparent px-9 py-2.5 text-white uppercase"
      >
        Rules
      </motion.button>
    </div>
  );
};

export default GameRules;
