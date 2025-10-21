import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass-card p-12 md:p-16 rounded-3xl relative overflow-hidden"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
          />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Ready to Start?</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Something
              <br />
              <span className="gradient-text">Exceptional Together</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Transform your vision into reality. Get in touch and let's discuss how we can elevate
              your digital presence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(20,184,166,0.3)] group"
                onClick={() => window.location.href = 'mailto:hello@elevatenova.com'}
              >
                <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open('https://calendly.com/elevatenova', '_blank')}
              >
                Schedule a Call
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-muted-foreground">
                Or email us directly at{' '}
                <a
                  href="mailto:hello@elevatenova.com"
                  className="text-primary hover:underline font-medium"
                >
                  hello@elevatenova.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
