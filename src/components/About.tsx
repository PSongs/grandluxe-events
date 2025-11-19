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
    <section id="about" className="scroll-mt-20 sm:scroll-mt-28 bg-background py-12 sm:py-16 md:scroll-mt-32 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-3 sm:mb-4 px-2">
            About GrandLuxe Events
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-4xl px-2 sm:px-4"
        >
          <div className="rounded-xl sm:rounded-2xl bg-gradient-primary p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-black shadow-elegant">
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-center text-black">
              Our Mission Statement
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center">
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
          className="mx-auto max-w-6xl"
        >
          <h3 className="mb-8 sm:mb-10 md:mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center text-foreground px-2">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-lg p-5 sm:p-6 md:p-8 text-center shadow-elegant transition-all duration-300 hover:shadow-gold"
                >
                  <div className="inline-flex p-3 sm:p-4 bg-accent/10 rounded-full mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-serif font-semibold mb-2 sm:mb-3 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
