import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            © {currentYear} GrandLuxe Events. All rights reserved.
          </p>
          
          <p className="flex items-center gap-2 text-sm">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for unforgettable celebrations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
