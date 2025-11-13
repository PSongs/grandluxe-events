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
    const phone = '2349042802225';
    const message = encodeURIComponent(
      `Hello GrandLuxe Events! I'm interested in your event decoration services.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your event into an unforgettable experience? Let's discuss your vision.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-elegant"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>

            {/* WhatsApp Button */}
            <div className="mt-6">
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
                className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
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
            className="space-y-8"
          >
            <div className="bg-gradient-primary text-white rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+2349042802225" className="text-white/90 hover:text-accent transition-colors">
                      +234 904 280 2225
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@grandluxe-events.com" className="text-white/90 hover:text-accent transition-colors">
                      info@grandluxe-events.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-white/90">
                      Serving clients across Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
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
