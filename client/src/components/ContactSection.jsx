import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      contactMutation.mutate(formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/rudrapratap30', name: 'GitHub' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/rudra-pratap-singh-tomar-6a55271a5/', name: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: '#', name: 'Twitter' },
    { icon: 'fab fa-dribbble', href: '#', name: 'Dribbble' },
    { icon: 'fab fa-behance', href: '#', name: 'Behance' }
  ];

  return (
    <section id="contact" className="section-container py-24" style={{ background: 'var(--section-bg-4)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form p-8 rounded-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-all ${
                    errors.name ? 'border-red-500' : 'border-input'
                  }`}
                  placeholder="Your name"
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-name">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-input'
                  }`}
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-input'
                  }`}
                  placeholder="Tell me about your project..."
                  data-testid="input-message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-message">
                    {errors.message}
                  </p>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-submit"
              >
                {contactMutation.isPending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane ml-2"></i>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground" data-testid="text-email">
                      rpstomar30@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground" data-testid="text-phone">
                      +91 9131566***
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground" data-testid="text-location">
                      Bhopal, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="social-icon w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground"
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
