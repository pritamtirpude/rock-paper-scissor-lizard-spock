import { motion } from 'motion/react';

const RippleEfect = () => {
  return (
    <>
      <motion.div
        animate={{
          scale: [0.9, 1],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          },
        }}
        className="absolute -z-10 size-[200px] rounded-full bg-white/5 transition-opacity md:size-[400px]"
      />
      <motion.div
        animate={{
          scale: [0.9, 1],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 0.5,
          },
        }}
        className="absolute -z-10 size-[300px] rounded-full bg-white/5 transition-opacity md:size-[500px]"
      />
      <motion.div
        animate={{
          scale: [0.9, 1],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 1,
          },
        }}
        className="absolute -z-10 size-[400px] rounded-full bg-white/5 transition-opacity md:size-[600px]"
      />
    </>
  );
};

export default RippleEfect;
