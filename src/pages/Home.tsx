import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cpu, 
  Globe, 
  Smartphone, 
  Cog, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function Home() {
  const services = [
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Embedded Systems",
      description: "Custom hardware solutions with advanced microcontroller programming for specialized applications."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Responsive, scalable and modern web applications built with cutting-edge technologies."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices."
    },
    {
      icon: <Cog className="h-10 w-10 text-primary" />,
      title: "Industrial Automation",
      description: "Smart factory solutions and industrial control systems for improved efficiency."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Training Courses",
      description: "Professional training courses in IoT, programming, and system design."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "InnovaTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "Micro TechBit transformed our manufacturing process with their industrial automation solutions. Productivity increased by 35% in the first quarter alone."
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "Their IoT solution integrated seamlessly with our existing infrastructure. The team's expertise and support were exceptional throughout the project."
    },
    {
      name: "Emily Rodriguez",
      company: "Growth Platforms",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "We hired Micro TechBit to develop our company's mobile app and website. The results exceeded our expectations in both design and functionality."
    },
    {
      name: "David Wilson",
      company: "EduTech Innovations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "The embedded systems training course was comprehensive and practical. Our engineering team is now fully equipped with the skills needed for our new product line."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-background to-secondary/10 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Innovative Technology <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solutions for Tomorrow
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 md:w-3/4">
              Transforming businesses with cutting-edge IoT, web development, and industrial automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive technology solutions across multiple domains to help businesses innovate and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-muted/40 hover:border-primary/60 transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/services">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-6">
                Micro TechBit was founded with a vision to bridge the gap between technology and practical business solutions. 
                Our team of experts brings together diverse skills in embedded systems, IoT, web development, and industrial automation.
              </p>
              <ul className="space-y-3 mb-8">
                {['Innovative solutions tailored to your needs', 'Experienced team of engineers and developers', 'End-to-end project management', 'Ongoing support and maintenance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="gap-2">
                <Link to="/about">
                  Meet Our Team
                  <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Company Office Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses we've helped transform with our technology solutions.
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-4">
                  <Card className="h-full border-muted/40">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our technology solutions can help your business grow and innovate.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </>
  );
}