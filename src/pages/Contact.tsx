import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server here
    setFormSubmitted(true);
    
    // Reset form after 3 seconds for demonstration purposes
    setTimeout(() => {
      setFormSubmitted(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "info@techsync.com",
      action: "Send an email",
      link: "mailto:info@techsync.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+1 (234) 567-890",
      action: "Make a call",
      link: "tel:+1234567890"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Office",
      details: "123 Tech Street, Innovation City, 10001",
      action: "Get directions",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Working Hours",
      details: "Monday-Friday: 9AM-6PM",
      action: "View business hours",
      link: "#hours"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or want to discuss a project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <Card key={index} className="border-muted/40 hover:border-primary/60 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-muted/50">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.details}</p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                >
                  {item.action}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below, and our team will get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="project">Project Request</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="career">Career Information</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={5} required />
              </div>
              
              <Button type="submit" disabled={formSubmitted}>
                {formSubmitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="min-h-[400px] bg-muted rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Map Location Embed
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What industries do you work with?",
                answer: "We work with clients across various industries including manufacturing, healthcare, logistics, finance, retail, and education."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. A simple web application might take 4-6 weeks, while larger systems can take several months."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer maintenance and support packages to ensure your systems continue to run smoothly and stay updated."
              },
              {
                question: "Can you work with our existing IT team?",
                answer: "Absolutely! We can collaborate with your in-house team, providing specialized expertise while knowledge transfer occurs."
              }
            ].map((item, index) => (
              <Card key={index} className="border-muted/40">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}