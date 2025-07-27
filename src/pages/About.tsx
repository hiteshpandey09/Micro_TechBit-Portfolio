import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter,BriefcaseBusiness } from "lucide-react";


export default function About() {
  const founders = [
    {
      name: "Dr. Sarah Chen",
      title: "CEO & IoT Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      bio: "Dr. Chen has over 15 years of experience in IoT and embedded systems. She holds a Ph.D. in Computer Engineering and has led multiple Fortune 500 companies' digital transformation initiatives.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        portfolio: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      title: "CTO & Industrial Automation Expert",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      bio: "With a background in robotics and industrial control systems, Michael brings over a decade of experience implementing automation solutions across manufacturing, healthcare, and logistics industries.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        portfolio: "#"
      }
    },
    {
      name: "Amelia Patel",
      title: "CDO & Web Development Director",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      bio: "Amelia leads our web and app development teams with her expertise in modern frameworks and UX design principles. She has successfully delivered over 100 digital projects for clients worldwide.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        portfolio: "#"
      }
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Micro TechBit was established with a focus on embedded systems and IoT solutions."
    },
    {
      year: "2017",
      title: "Expansion into Web Development",
      description: "Added web and mobile application development services to our portfolio."
    },
    {
      year: "2019",
      title: "Industrial Automation Division",
      description: "Launched our industrial automation division to serve manufacturing clients."
    },
    {
      year: "2020",
      title: "Training Academy",
      description: "Established Micro TechBit Academy to provide technical training and certification programs."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened international offices and expanded our team to serve clients worldwide."
    },
    {
      year: "2025",
      title: "Innovation Lab",
      description: "Launched our Innovation Lab to research emerging technologies and develop proprietary solutions."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions."
    },
    {
      title: "Excellence",
      description: "We are committed to the highest standards of quality in everything we do."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients and partners to achieve shared success."
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles at all times."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              We are a team of passionate technologists dedicated to transforming businesses through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, Micro TechBit began as a small team of engineers with a vision to bridge the gap between cutting-edge technology and practical business applications. What started as an embedded systems consultancy has grown into a comprehensive technology solutions provider.
              </p>
              <p>
                Our journey has been defined by continuous learning, innovation, and a relentless focus on delivering value to our clients. We've expanded our expertise across multiple domains, including IoT, web development, mobile applications, and industrial automation.
              </p>
              <p>
                Today, we are proud to serve clients across various industries, from startups to Fortune 500 companies, helping them navigate the ever-evolving technology landscape and achieve their business objectives.
              </p>
            </div>
          </div>
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Company History Image
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings together decades of experience in technology, engineering, and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="border-muted/40 hover:border-primary/60 transition-colors overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{founder.title}</p>
                  <p className="text-muted-foreground text-sm mb-4">{founder.bio}</p>
                  <div className="flex gap-4">
                    <a href={founder.social.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin size={18} />
                    </a>
                    <a href={founder.social.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter size={18} />
                    </a>
                    <a href={founder.social.github} className="text-muted-foreground hover:text-primary">
                      <Github size={18} />
                    </a>
                    <a href={founder.social.portfolio} className="text-muted-foreground hover:text-primary">
                      <BriefcaseBusiness size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of significant milestones in our company's history.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} gap-8 lg:gap-0`}>
                <div className="lg:w-1/2 pl-12 lg:pl-0 lg:pr-12 lg:text-right relative">
                  {/* Dot for mobile */}
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary lg:hidden"></div>
                  {index % 2 === 0 ? null : (
                    <>
                      {/* Dot for desktop */}
                      <div className="absolute hidden lg:block right-0 top-2 w-4 h-4 rounded-full bg-primary transform translate-x-1/2"></div>
                      <div className="space-y-2">
                        <div className="text-primary font-bold text-lg">{item.year}</div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="lg:w-1/2 pl-12 relative">
                  {/* Dot for mobile */}
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary lg:hidden"></div>
                  {index % 2 === 0 ? (
                    <>
                      {/* Dot for desktop */}
                      <div className="absolute hidden lg:block left-0 top-2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                      <div className="space-y-2">
                        <div className="text-primary font-bold text-lg">{item.year}</div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide everything we do at Micro TechBit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-muted/40 hover:border-primary/60 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}