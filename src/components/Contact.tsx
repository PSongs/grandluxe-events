import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    eventType: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      eventType: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 255) {
      newErrors.email = 'Email must be less than 255 characters';
    }

    if (!formData.eventType.trim()) {
      newErrors.eventType = 'Event type is required';
    } else if (formData.eventType.trim().length > 100) {
      newErrors.eventType = 'Event type must be less than 100 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast.success('Thank you! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', eventType: '', message: '' });
      setErrors({ name: '', email: '', eventType: '', message: '' });
    } else {
      toast.error('Please fill in all required fields correctly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleWhatsApp = () => {
    const phone = '2347060768176';
    const message = encodeURIComponent(
      `Hello GrandLuxe Events! I'm interested in your event decoration services.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="scroll-mt-20 sm:scroll-mt-28 bg-muted py-12 sm:py-16 md:scroll-mt-32 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-3 sm:mb-4 px-2">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-accent mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to transform your event into an unforgettable experience? Let's discuss your vision.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl sm:rounded-2xl bg-card p-5 sm:p-6 md:p-8 lg:p-10 shadow-elegant"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.name ? 'border-destructive' : ''}
                  maxLength={100}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? 'border-destructive' : ''}
                  maxLength={255}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="eventType">Event Type *</Label>
                <Input
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Wedding, Birthday, Corporate, etc."
                  className={errors.eventType ? 'border-destructive' : ''}
                  maxLength={100}
                />
                {errors.eventType && <p className="text-destructive text-sm mt-1">{errors.eventType}</p>}
              </div>

              <div>
                <Label htmlFor="message">Tell Us About Your Vision *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe how you want your event to look and feel..."
                  rows={5}
                  className={errors.message ? 'border-destructive' : ''}
                  maxLength={1000}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                <p className="text-xs text-muted-foreground mt-1">
                  {formData.message.length}/1000 characters
                </p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base py-5 sm:py-6">
                Send Message
              </Button>
            </form>

            {/* WhatsApp Button */}
            <div className="mt-4 sm:mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">Or chat with us</span>
                </div>
              </div>
              
              <Button
                type="button"
                onClick={handleWhatsApp}
                variant="outline"
                className="mt-3 sm:mt-4 w-full border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground text-sm sm:text-base py-5 sm:py-6"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-primary text-black rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-elegant break-words">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-5 md:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Phone</h4>
                    <a href="tel:+2349042802225" className="text-sm sm:text-base text-black/90 hover:text-accent transition-colors break-all">
                      +234 706 076 8176
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                    <a href="mailto:grandluxeeventsmomentsltd@gmail.com" className="text-sm sm:text-base text-black/90 hover:text-accent transition-colors break-all">
                      grandluxeeventsmomentsltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Location</h4>
                    <p className="text-sm sm:text-base text-black/90">
                      Serving clients across Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-card p-5 sm:p-6 md:p-8 shadow-elegant">
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-3 sm:mb-4 text-foreground">Business Hours</h3>
              <div className="space-y-2 sm:space-y-2.5 text-muted-foreground">
                <p className="flex flex-col gap-1 text-xs sm:text-sm md:text-base text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex flex-col gap-1 text-xs sm:text-sm md:text-base text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex flex-col gap-1 text-xs sm:text-sm md:text-base text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-foreground">By Appointment</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
