import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Linkedin, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const FORM_ENDPOINT = 'https://formsubmit.co/136c732cbab3a89921c1864f75bec63c';
// FormSubmit's AJAX endpoint answers with JSON instead of redirecting, so the
// visitor stays on the page and sees the result.
const FORM_AJAX_ENDPOINT = 'https://formsubmit.co/ajax/136c732cbab3a89921c1864f75bec63c';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const successRef = useRef<HTMLHeadingElement>(null);

  // Without JavaScript the form posts normally and FormSubmit redirects back
  // with ?sent=1 (see _next below); show the same confirmation in that case.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get('sent') === '1') {
      setStatus('success');
      url.searchParams.delete('sent');
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
  }, []);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    try {
      const res = await fetch(FORM_AJAX_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || `HTTP ${res.status}`);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-40 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 -skew-y-6 translate-y-1/4 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-8">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.85]">
              Let's build <br />what's <span className="text-primary underline decoration-4 underline-offset-8">next</span>.
            </h3>
            <p className="text-secondary-foreground/60 text-lg mb-12 max-w-md">
              Hiring for a product manager or producer role, in games or tech? Send me a message or connect on LinkedIn.
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
            {status === 'success' ? (
              <div className="flex flex-col items-start gap-6 py-6 min-h-[360px] justify-center" role="status">
                <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
                <h4
                  ref={successRef}
                  tabIndex={-1}
                  className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-[#ece5de] outline-none"
                >
                  Message sent
                </h4>
                <p className="text-[#ece5de]/80 text-lg leading-relaxed">
                  Thanks for getting in touch. Your message has been delivered and I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-[11px] font-bold uppercase tracking-widest text-[#ece5de]/70 hover:text-primary transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <form 
              action={FORM_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Optional: Configuration fields */}
              <input type="hidden" name="_next" value="https://www.jacobhull.me/?sent=1#contact" />
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
                  placeholder="Tell me about the role or opportunity..." 
                  className="rounded-none bg-[#ece5de] border-white/20 focus:border-primary min-h-[150px] text-sm text-[#151927] placeholder:text-[#151927]/40 font-sans resize-none"
                />
              </div>
              
              {/* Hidden honeypot field for spam protection */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {status === 'error' && (
                <p role="alert" className="text-sm text-[#ece5de] border-l-4 border-primary pl-4 py-1">
                  Sorry, your message couldn't be sent. Please try again, or reach me on{' '}
                  <a href="https://www.linkedin.com/in/jacobhull" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">LinkedIn</a>.
                </p>
              )}

              <Button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full rounded-none h-14 bg-primary text-[#ece5de] hover:bg-[#ece5de] hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-all group/btn cursor-pointer font-sans"
              >
                {status === 'submitting' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </span>
                )}
              </Button>
              <p className="text-xs text-[#ece5de]/70 leading-relaxed">
                Your details are only used to reply to your message.{' '}
                <Link to="/privacy" className="underline hover:text-primary">Privacy notice</Link>
              </p>
            </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
