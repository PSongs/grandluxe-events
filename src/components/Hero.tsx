import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '../assets/Hero-img.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] sm:min-h-[90vh] flex-col justify-center overflow-hidden pt-20 pb-12 text-white sm:pt-28 sm:pb-16 md:pt-32 md:pb-20"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/70 px-2">Luxury Event Styling</p>
          <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white px-2">
            GrandLuxe Events
          </h1>
          <p className="mb-3 sm:mb-4 font-serif text-base sm:text-lg md:text-2xl lg:text-3xl text-gradient-gold px-2">
            Where Elegance Meets Excellence
          </p>
          <p className="mx-auto mb-6 sm:mb-8 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-white/90 px-4">
            Transform your special moments into timeless masterpieces with our premium event decoration services.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full max-w-xs sm:max-w-md bg-accent px-4 py-5 sm:px-6 sm:py-6 text-sm sm:text-base font-semibold text-accent-foreground shadow-gold hover:bg-accent/90 sm:w-auto sm:px-8 sm:text-lg"
            >
              Start Planning Your Event
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
