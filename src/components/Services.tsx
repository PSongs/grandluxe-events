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
      className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-gold transition-all duration-300 group"
    >
      <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate celebrations to grand galas, we bring creativity, elegance, and precision to every event.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
