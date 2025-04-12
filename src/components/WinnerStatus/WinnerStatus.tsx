import { motion } from 'motion/react';
import { Fragment } from 'react';
import iconLizard from '../../assets/images/icon-lizard.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconRock from '../../assets/images/icon-rock.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import iconSpock from '../../assets/images/icon-spock.svg';
import { cn } from '../../lib/util';
import { useGameStore } from '../../store/game-store';
import RippleEfect from '../RippleEffect/RippleEfect';

const WinnerStatus = () => {
  const {
    playerChoice,
    winner,
    setPlayerChoice,
    setComputerChoice,
    computerChoice,
    setWinner,
  } = useGameStore();

  const pickedImages: { [key: string]: string } = {
    Rock: iconRock,
    Paper: iconPaper,
    Scissors: iconScissors,
    Lizard: iconLizard,
    Spock: iconSpock,
  };

  const handleReset = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setWinner('');
  };

  return (
    <Fragment>
      {playerChoice !== '' && (
        <motion.section
          layout
          className={cn(
            'relative mx-auto mt-[72px] grid max-w-3xl grid-cols-2 gap-16 px-8 md:flex md:items-center md:justify-between md:gap-0 md:px-0',
            winner !== '' && 'max-w-5xl'
          )}
        >
          <motion.div
            layout
            className="relative z-50 order-1 flex flex-col-reverse items-center justify-center gap-4 md:flex-col md:gap-16"
          >
            <span className="md:text-subtitle text-sm font-bold text-white uppercase">
              You Picked
            </span>
            <motion.button
              layoutId={playerChoice}
              className={cn(
                'flex size-[130px] flex-col items-center justify-center rounded-full border-[14px] bg-white md:size-[300px] md:border-[25px]',
                playerChoice === 'Rock' &&
                  'border-rock-from btn-rock-inner-outer-shadow',
                playerChoice === 'Paper' &&
                  'border-paper-from btn-paper-inner-outer-shadow',
                playerChoice === 'Scissors' &&
                  'border-scissor-from btn-scissor-inner-outer-shadow',
                playerChoice === 'Lizard' &&
                  'border-lizard-from btn-lizard-inner-outer-shadow',
                playerChoice === 'Spock' &&
                  'border-spock-from btn-spock-inner-outer-shadow'
              )}
            >
              {winner === 'Win' && <RippleEfect />}
              <img
                className="size-16 md:size-36"
                src={pickedImages[playerChoice]}
                alt="icon"
              />
            </motion.button>
          </motion.div>

          {winner !== '' && (
            <motion.div
              layout
              className="order-3 col-span-2 flex flex-1 flex-col items-center justify-center md:order-2"
            >
              <span className="text-[56px] font-bold text-white uppercase">{`${winner === 'Draw' ? winner : 'You ' + winner}`}</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-regular text-dark cursor-pointer rounded-md bg-gradient-to-r from-[#f3f3f3] to-white px-16 py-3.5 font-semibold uppercase"
                onClick={handleReset}
              >
                Play Again
              </motion.button>
            </motion.div>
          )}

          <motion.div
            layout
            className="relative z-50 order-2 flex flex-col-reverse items-center justify-center gap-4 md:order-3 md:flex-col md:gap-16"
          >
            <span className="md:text-subtitle text-sm font-bold text-white uppercase">
              The House Picked
            </span>
            <motion.button
              className={cn(
                'flex size-[130px] flex-col items-center justify-center rounded-full bg-black/10 md:size-[300px]',
                computerChoice === 'Rock' &&
                  'border-rock-from btn-rock-inner-outer-shadow border-[14px] bg-white md:border-[25px]',
                computerChoice === 'Paper' &&
                  'border-paper-from btn-paper-inner-outer-shadow border-[14px] bg-white md:border-[25px]',
                computerChoice === 'Scissors' &&
                  'border-scissor-from btn-scissor-inner-outer-shadow border-[14px] bg-white md:border-[25px]',
                computerChoice === 'Lizard' &&
                  'border-lizard-from btn-lizard-inner-outer-shadow border-[14px] bg-white md:border-[25px]',
                computerChoice === 'Spock' &&
                  'border-spock-from btn-spock-inner-outer-shadow border-[14px] bg-white md:border-[25px]'
              )}
            >
              {winner === 'Lose' && <RippleEfect />}

              {computerChoice !== '' && (
                <img
                  className="size-16 md:size-36"
                  src={pickedImages[computerChoice]}
                  alt="icon"
                />
              )}
            </motion.button>
          </motion.div>
        </motion.section>
      )}
    </Fragment>
  );
};

export default WinnerStatus;
