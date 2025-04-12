import { motion } from 'motion/react';
import React, { Fragment, useCallback } from 'react';
import bgPentagon from '../../assets/images/bg-pentagon.svg';
import iconLizard from '../../assets/images/icon-lizard.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconRock from '../../assets/images/icon-rock.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';
import iconSpock from '../../assets/images/icon-spock.svg';
import { useGameStore } from '../../store/game-store';

const SelectChoice = React.memo(() => {
  const { playerChoice, setPlayerChoice } = useGameStore();

  const handleChoice = useCallback(
    (choice: string) => {
      setPlayerChoice(choice);
    },
    [setPlayerChoice]
  );
  return (
    <Fragment>
      {playerChoice === '' && (
        <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-8 lg:px-0 lg:py-12">
          <div className="relative mx-auto max-w-[472px] px-8">
            <div className="flex size-full items-center justify-center">
              <img
                className="size-[227px] object-contain md:size-[345px]"
                src={bgPentagon}
                alt="pentagon image"
              />
            </div>

            <motion.button
              layoutId="Scissors"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.25 },
              }}
              onClick={() => handleChoice('Scissors')}
              className="border-scissor-from btn-scissor-inner-outer-shadow absolute -top-12 left-24 z-50 flex size-24 cursor-pointer flex-col items-center justify-center rounded-full border-[14px] bg-white p-4 md:-top-16 md:left-36 md:size-36 md:border-[18px] md:px-5 md:py-4"
            >
              <img src={iconScissors} alt="icon scissors" />
            </motion.button>

            <motion.button
              layoutId="Spock"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.25 },
              }}
              onClick={() => handleChoice('Spock')}
              className="border-spock-from btn-spock-inner-outer-shadow absolute top-12 -left-0.5 flex size-24 cursor-pointer flex-col items-center justify-center rounded-full border-[14px] bg-white p-4 md:top-16 md:-left-5 md:size-36 md:border-[18px] md:px-5 md:py-4"
            >
              <img src={iconSpock} alt="icon spock" />
            </motion.button>

            <motion.button
              layoutId="Paper"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.25 },
              }}
              onClick={() => handleChoice('Paper')}
              className="border-paper-from btn-paper-inner-outer-shadow absolute top-12 right-0 flex size-24 cursor-pointer flex-col items-center justify-center rounded-full border-[14px] bg-white p-4 md:top-16 md:-right-8 md:size-36 md:border-[18px] md:px-5 md:py-4"
            >
              <img src={iconPaper} alt="icon paper" />
            </motion.button>

            <motion.button
              layoutId="Lizard"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.25 },
              }}
              onClick={() => handleChoice('Lizard')}
              className="border-lizard-from btn-lizard-inner-outer-shadow absolute -bottom-10 flex size-24 cursor-pointer flex-col items-center justify-center rounded-full border-[14px] bg-white p-4 md:-bottom-16 md:left-8 md:size-36 md:border-[18px] md:px-5 md:py-4"
            >
              <img src={iconLizard} alt="icon lizard" />
            </motion.button>

            <motion.button
              layoutId="Rock"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.25 },
              }}
              onClick={() => handleChoice('Rock')}
              className="border-rock-from btn-rock-inner-outer-shadow absolute right-8 -bottom-10 flex size-24 cursor-pointer flex-col items-center justify-center rounded-full border-[14px] bg-white p-4 md:right-6 md:-bottom-16 md:size-36 md:border-[18px] md:px-5 md:py-4"
            >
              <img src={iconRock} alt="icon rock" />
            </motion.button>
          </div>
        </section>
      )}
    </Fragment>
  );
});

export default SelectChoice;
