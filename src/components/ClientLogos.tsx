import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clients = [
    'TechCorp',
    'InnovateLabs',
    'DigitalFirst',
    'CloudNine',
    'DataFlow',
    'NextGen',
    'SmartSolutions',
    'FutureTech',
  ];

  return (
    <section className="py-20 overflow-hidden bg-secondary/30">
      <div className="space-y-8">
        {/* First Row - Left to Right */}
        <div className="relative">
          <motion.div
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 px-8 py-4 glass-card rounded-lg"
              >
                <span className="text-xl font-semibold text-foreground/60 hover:text-primary transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative">
          <motion.div
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...clients.reverse(), ...clients].map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 px-8 py-4 glass-card rounded-lg"
              >
                <span className="text-xl font-semibold text-foreground/60 hover:text-primary transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
