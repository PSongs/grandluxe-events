import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm text-center md:text-left">
            © {currentYear} GrandLuxe Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
