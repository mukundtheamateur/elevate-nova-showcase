import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Sparkles } from 'lucide-react';

const caseStudies = [
  {
    title: "Klimux Klimaanlagen",
    location: "Frankfurt, Germany",
    url: "klimux-klimaanlagen.de",
    description: "Professional air conditioning shop website with customized design, technical SEO and CMS for dynamic content management.",
    challenges: [
      "Lack of time for digitalization initiatives",
      "Lack of know-how in the area of online marketing"
    ],
    solutions: [
      "Time savings through automation",
      "Increases in sales",
      "Higher customer satisfaction"
    ],
    icon: TrendingUp
  },
  {
    title: "Better Energy GmbH",
    location: "Wiesbaden, Germany",
    url: "better-energy-solar.de",
    description: "Discover how Better Energy GmbH scores successfully in the highly competitive solar market.",
    challenges: [
      "Lack of online presence",
      "B2B lead generation challenges"
    ],
    solutions: [
      "Unique branding with strategic use of colors, graphics, and fonts",
      "Professional online presence established",
      "400% increase in organic website traffic in Google search results"
    ],
    icon: Sparkles
  },
  {
    title: "CegTec GmbH",
    location: "Digital Agency",
    url: "cegtec.net",
    description: "Discover the future of digital growth of CegTec GmbH.",
    challenges: [
      "Need for enhanced user engagement",
      "Modernization of digital presence"
    ],
    solutions: [
      "Enhanced user engagement through modern design",
      "Exceeded client expectations in design quality and functionality",
      "Professional digital transformation"
    ],
    icon: Users
  },
  {
    title: "Codvo.ai",
    location: "AI Platform",
    url: "codvo.ai",
    description: "Complete website redevelopment with focus on user experience and visual appeal.",
    challenges: [
      "Alignment issues across pages",
      "Poor responsiveness",
      "Lack of visual engagement"
    ],
    solutions: [
      "Developed multiple pages with consistent brand identity",
      "Resolved alignment issues for professional appearance",
      "Improved responsiveness across all devices",
      "Implemented custom animations for enhanced interaction"
    ],
    icon: Sparkles
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped our clients achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-lg group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{study.location}</p>
                    <a 
                      href={`https://${study.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm flex items-center gap-1"
                    >
                      {study.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <p className="text-foreground/80 mb-6">
                  {study.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Challenges
                    </h4>
                    <ul className="space-y-1">
                      {study.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Solution & Impact
                    </h4>
                    <ul className="space-y-1">
                      {study.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;