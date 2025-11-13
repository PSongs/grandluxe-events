import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Sparkles, Users, Award, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We go beyond expectations in every detail.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description: 'Every design tells a unique story.',
  },
  {
    icon: Target,
    title: 'Professionalism',
    description: 'We maintain integrity, respect, and discipline in all we do.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Together, we build magic.',
  },
  {
    icon: Heart,
    title: 'Customer Delight',
    description: "Our clients' satisfaction is our ultimate reward.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-foreground">
            About GrandLuxe Events
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-primary text-white rounded-2xl p-12 shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center">
              Our Mission Statement
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-center">
              To create unforgettable event experiences with elegance, excellence, and innovation — 
              turning every client&apos;s vision into a timeless masterpiece.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-gold transition-all duration-300 text-center"
                >
                  <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold mb-3 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
