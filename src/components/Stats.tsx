import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, delay }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground">● {label}</div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { value: 50, suffix: '+', label: 'Projects Shipped' },
    { value: 95, suffix: '%', label: 'Client Retention' },
    { value: 12, suffix: '+', label: 'Countries Served' },
    { value: 150, suffix: '%', label: 'Conversion Uplift' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Proven by Results
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
