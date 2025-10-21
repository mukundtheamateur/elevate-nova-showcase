import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechCorp',
      content:
        'ElevateNova transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      position: 'Founder, InnovateLabs',
      content:
        'Working with ElevateNova was a game-changer. They delivered a product that not only looks amazing but performs exceptionally.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      position: 'CMO, DigitalFirst',
      content:
        'The team brought our vision to life with creativity and technical excellence. Our conversion rates increased by 180%.',
      rating: 5,
    },
    {
      name: 'David Kim',
      position: 'CTO, CloudNine',
      content:
        'Professional, responsive, and incredibly talented. ElevateNova is our go-to partner for all digital projects.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      position: 'Director, DataFlow',
      content:
        'They understood our needs immediately and delivered beyond what we imagined. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      position: 'VP Product, NextGen',
      content:
        'Exceptional quality and communication throughout the project. ElevateNova truly partners with their clients.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
