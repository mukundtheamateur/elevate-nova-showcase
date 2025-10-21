import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does ElevateNova offer?',
      answer:
        'We offer comprehensive digital services including UI/UX design, web and mobile development, brand identity, digital strategy, and conversion optimization. Our team handles everything from initial concept to final deployment.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our discovery phase.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, timeline, and requirements. Contact us for a customized quote.',
    },
    {
      question: 'Do you work with startups or only established companies?',
      answer:
        'We work with organizations of all sizes - from ambitious startups to established enterprises. Our flexible approach allows us to adapt to your specific needs, timeline, and budget.',
    },
    {
      question: 'What makes ElevateNova different from other agencies?',
      answer:
        'We combine strategic thinking with exceptional execution. Our founders, Shivam Saurabh and Mukund Shukla, personally oversee every project, ensuring the highest quality. We focus on measurable results and long-term partnerships.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 rounded-xl border-border/50"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
