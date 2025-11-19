import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Heart, Cake, Building2, Users, Crown } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Décor',
    description: 'Create your dream wedding with our elegant and romantic decoration designs that perfectly capture your love story.',
  },
  {
    icon: Cake,
    title: 'Birthday Celebrations',
    description: 'From intimate gatherings to grand celebrations, we bring your birthday vision to life with creative and personalized décor.',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Professional and sophisticated setups for conferences, product launches, and corporate gatherings that leave lasting impressions.',
  },
  {
    icon: Users,
    title: 'Social Gatherings',
    description: 'Transform any social event into an unforgettable experience with our creative and stylish decoration services.',
  },
  {
    icon: Crown,
    title: 'Luxury Galas',
    description: 'Opulent and breathtaking designs for high-end galas and prestigious events that demand excellence.',
  },
  {
    icon: Sparkles,
    title: 'Custom Themes',
    description: 'Unique and personalized themes tailored to your vision, creating one-of-a-kind experiences for any occasion.',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card rounded-lg p-5 sm:p-6 md:p-8 shadow-elegant transition-all duration-300 group hover:shadow-gold"
    >
      <div className="mb-4 sm:mb-5 md:mb-6 inline-flex p-3 sm:p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold mb-2 sm:mb-3 text-foreground">{service.title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="scroll-mt-20 sm:scroll-mt-28 bg-muted py-12 sm:py-16 md:scroll-mt-32 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-3 sm:mb-4 px-2">
            Our Services
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-accent mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From intimate celebrations to grand galas, we bring creativity, elegance, and precision to every event.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
