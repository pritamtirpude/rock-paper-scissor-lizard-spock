import { motion } from 'motion/react';
import iconClose from '../../assets/images/icon-close.svg';
import rulesImage from '../../assets/images/image-rules-bonus.svg';
import { cn } from '../../lib/util';
import { useGameStore } from '../../store/game-store';

const Rules = () => {
  const { setIsRulesOpen } = useGameStore();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
      className={cn(
        'fixed top-0 left-0 z-50 flex size-full items-center justify-center bg-black/55'
      )}
      onClick={() => setIsRulesOpen(false)}
    >
      <div
        className="flex size-full flex-col items-center justify-center gap-24 rounded-md bg-gradient-to-r from-[#f3f3f3] to-white p-8 md:size-auto md:flex-none md:gap-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:hidden">
          <span className="text-rule text-dark font-bold uppercase">Rules</span>
        </div>
        <div className="mb-5 hidden w-full md:visible md:flex md:items-center md:justify-between">
          <div>
            <span className="text-rule text-dark font-bold uppercase">
              Rules
            </span>
          </div>
          <div>
            <button
              className="cursor-pointer"
              onClick={() => setIsRulesOpen(false)}
            >
              <img src={iconClose} alt="icon close" />
            </button>
          </div>
        </div>
        <div>
          <img
            src={rulesImage}
            alt="rules image"
            className="aspect-square size-full"
          />
        </div>
        <div className="md:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsRulesOpen(false)}
          >
            <img src={iconClose} alt="icon close" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Rules;
