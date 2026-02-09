"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site-config";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call — replace with actual email service (Resend/EmailJS)
    console.log("Contact form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Let&apos;s work together"
            description="Have a project in mind or just want to say hello? I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Get in touch
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={siteConfig.socials.email}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-[var(--accent)]/30 transition-colors group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/15 transition-colors">
                    <Mail className="h-4.5 w-4.5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="h-10 w-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <MapPin className="h-4.5 w-4.5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Location
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-7 w-7 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="rounded-xl bg-background"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="rounded-xl bg-background"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="rounded-xl bg-background"
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <p className="text-xs text-destructive">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      className="rounded-xl bg-background resize-none"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white rounded-xl h-12 text-sm font-semibold gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
