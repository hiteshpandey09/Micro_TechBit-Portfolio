import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      id: "embedded",
      name: "Embedded Systems",
      description: "Custom hardware solutions with advanced microcontroller programming for specialized applications.",
      image: "https://images.unsplash.com/photo-1580716937776-3666df0809b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Hardware design and prototyping",
        "Firmware development",
        "Real-time operating systems (RTOS)",
        "PCB design and manufacturing",
        "Microcontroller programming",
        "System integration"
      ]
    },
    {
      id: "iot",
      name: "IoT Solutions",
      description: "Connect and monitor your devices with our comprehensive Internet of Things solutions.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Sensor networks and data collection",
        "Cloud connectivity and data processing",
        "Remote monitoring systems",
        "Energy-efficient IoT devices",
        "Machine-to-machine communication",
        "IoT analytics and dashboards"
      ]
    },
    {
      id: "web",
      name: "Web Development",
      description: "Responsive, scalable and modern web applications built with cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Frontend development (React, Angular, Vue)",
        "Backend development (Node.js, Python, PHP)",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web applications (PWA)",
        "API development and integration"
      ]
    },
    {
      id: "app",
      name: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "iOS app development (Swift)",
        "Android app development (Kotlin, Java)",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design for mobile",
        "App testing and quality assurance",
        "App store submission and support"
      ]
    },
    {
      id: "automation",
      name: "Industrial Automation",
      description: "Smart factory solutions and industrial control systems for improved efficiency.",
      image: "https://images.unsplash.com/photo-1565515269354-c880ac879a89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "PLC programming and integration",
        "SCADA systems",
        "Manufacturing execution systems (MES)",
        "Industrial IoT solutions",
        "Robotics and automation control",
        "Process optimization and monitoring"
      ]
    },
    {
      id: "courses",
      name: "Training Courses",
      description: "Professional training courses in IoT, programming, and system design.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Embedded systems development",
        "IoT architecture and implementation",
        "Web and mobile development",
        "Industrial automation",
        "Hands-on project workshops",
        "Certification programs"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 container">
        <Tabs defaultValue="embedded" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-start border-b w-full rounded-none h-auto pb-0 bg-transparent">
            {serviceCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-3 px-4 data-[state=active]:shadow-none bg-transparent"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                  <p className="text-muted-foreground mb-8">
                    {category.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild>
                    <Link to="/contact">Inquire About This Service</Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to deliver high-quality solutions that meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We begin by understanding your business needs and objectives to tailor our solutions accordingly."
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "Our team creates detailed plans and designs based on the requirements gathered during consultation."
              },
              {
                step: "03",
                title: "Development",
                description: "We implement the solution using best practices and cutting-edge technologies to ensure quality."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "We deploy the solution and provide ongoing support and maintenance to ensure optimal performance."
              }
            ].map((item, index) => (
              <Card key={index} className="border-muted/40 hover:border-primary/60 transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/40 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container">
        <Card className="border-muted/40 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us today to discuss how our technology solutions can help your business grow and innovate.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "99% Customer Satisfaction",
                  "100+ Successful Projects",
                  "24/7 Support Available",
                  "Industry-leading Expertise"
                ].map((item, index) => (
                  <Card key={index} className="border-muted/40">
                    <CardContent className="p-4 text-center">
                      <p className="font-medium">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}