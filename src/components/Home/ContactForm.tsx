import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ContactFormProps {
  formStatus: 'idle' | 'submitting' | 'success';
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({ formStatus, onSubmit }: ContactFormProps) {
  return (
    <section id="contact" className="py-40 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 -skew-y-6 translate-y-1/4 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-8">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.85]">
              Let's build the <br />next big <span className="text-primary underline decoration-4 underline-offset-8">experience</span>.
            </h3>
            <p className="text-secondary-foreground/60 text-lg mb-12 max-w-md">
              Have a project in mind? Looking for product leadership? Drop me a message and let's talk.
            </p>
            <div className="flex items-center gap-6">
              <motion.a 
                href="https://www.linkedin.com/in/jacobhull" 
                target="_blank" 
                aria-label="Jacob Hull on LinkedIn"
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border border-secondary-foreground/20 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all cursor-pointer"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          <Card className="rounded-none border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl shadow-black/50">
            <form 
              action="https://formsubmit.co/136c732cbab3a89921c1864f75bec63c" 
              method="POST"
              onSubmit={onSubmit}
              className="space-y-6"
            >
              {/* Optional: Configuration fields */}
              <input type="hidden" name="_next" value="https://jacobhull.me/" />
              <input type="hidden" name="_subject" value="New Portfolio Message" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-[#ece5de]">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    required
                    placeholder="Enter your name" 
                    className="rounded-none bg-[#ece5de] border-white/20 focus:border-primary h-12 text-sm text-[#151927] placeholder:text-[#151927]/40 font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-[#ece5de]">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    name="email"
                    required
                    placeholder="name@example.com" 
                    className="rounded-none bg-[#ece5de] border-white/20 focus:border-primary h-12 text-sm text-[#151927] placeholder:text-[#151927]/40 font-sans"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-[#ece5de]">Your Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  required
                  placeholder="Tell me about your project..." 
                  className="rounded-none bg-[#ece5de] border-white/20 focus:border-primary min-h-[150px] text-sm text-[#151927] placeholder:text-[#151927]/40 font-sans resize-none"
                />
              </div>
              
              {/* Hidden honeypot field for spam protection */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Success redirect logic is handled by onSubmit in parent for UX */}

              <Button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full rounded-none h-14 bg-primary text-[#ece5de] hover:bg-[#ece5de] hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-all group/btn cursor-pointer font-sans"
              >
                {formStatus === 'idle' && (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </span>
                )}
                {formStatus === 'submitting' && <span className="animate-pulse">Sending...</span>}
                {formStatus === 'success' && <span>Message Sent!</span>}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
