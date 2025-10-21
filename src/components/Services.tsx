import { motion } from 'framer-motion';
import { Palette, Code, TrendingUp, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Design Excellence',
      description:
        'Crafting stunning interfaces that blend aesthetics with functionality. From wireframes to pixel-perfect designs.',
    },
    {
      icon: Code,
      title: 'Development Mastery',
      description:
        'Building scalable, performant applications using cutting-edge technologies. Clean code, robust architecture.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Growth',
      description:
        'Data-driven strategies that amplify your digital presence. SEO, analytics, and conversion optimization.',
    },
    {
      icon: Sparkles,
      title: 'Brand Identity',
      description:
        'Creating memorable brand experiences that resonate. Logo design, guidelines, and visual storytelling.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to elevate your digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
