import { motion } from 'framer-motion';

const BrandBanner = () => {
  const text = 'ELEVATENOVA';
  const repeatedText = Array(20).fill(text).join(' • ');

  return (
    <section className="py-12 bg-primary overflow-hidden">
      <motion.div
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className="flex whitespace-nowrap"
      >
        <span className="text-6xl md:text-8xl font-bold text-primary-foreground">
          {repeatedText}
        </span>
        <span className="text-6xl md:text-8xl font-bold text-primary-foreground">
          {repeatedText}
        </span>
      </motion.div>
    </section>
  );
};

export default BrandBanner;
