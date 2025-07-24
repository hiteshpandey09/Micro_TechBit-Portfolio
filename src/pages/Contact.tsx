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
      details: "info@microtechbit.com",
      action: "Send an email",
      link: "mailto:hp00695200@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+91 6387216393",
      action: "Make a call",
      link: "tel:+916387216393"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Office",
      details: "Remote, New Delhi, India",
      action: "Get directions",
      // link: "https://maps.google.com"
      link: "https://www.google.com/maps/place/New+Delhi,+Delhi,+India"
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
          
          {/* <div className="min-h-[400px] bg-muted rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Map Location Embed
            </div>
          </div> */}
          <div className="min-h-[400px] bg-muted rounded-lg overflow-hidden relative">
  <iframe
    title="Google Map"
    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019236165735!2d-122.4194151846817!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e6e5e7b%3A0x7d0f7e7e7e7e7e7e!2s123%20Tech%20Street%2C%20Innovation%20City%2C%2010001!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004834854!2d77.04417366224577!3d28.527252739054852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1753379892400!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: 400 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 w-full h-full"
  ></iframe>
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