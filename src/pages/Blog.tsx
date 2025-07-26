import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Blog() {
 // return "Hello ";

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Future of IoT in Smart Manufacturing",
      excerpt: "Explore how Internet of Things technologies are revolutionizing the manufacturing industry with real-time monitoring, predictive maintenance, and automated workflows.",
      image: "https://images.unsplash.com/photo-1581092921461-6484b247d500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Sarah Chen",
      date: "July 15, 2025",
      category: "iot"
    },
    {
      id: 2,
      title: "Building Responsive Web Applications: Best Practices",
      excerpt: "Learn the essential techniques for developing web applications that deliver optimal user experiences across all devices, from mobile phones to large desktop screens.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Amelia Patel",
      date: "July 3, 2025",
      category: "web"
    },
    {
      id: 3,
      title: "Advanced PLC Programming for Industrial Control",
      excerpt: "A deep dive into Programmable Logic Controller programming techniques that can enhance automation, reliability, and efficiency in industrial settings.",
      image: "https://images.unsplash.com/photo-1581092160607-cce09fd61b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Michael Rodriguez",
      date: "June 28, 2025",
      category: "automation"
    },
    {
      id: 4,
      title: "Designing Embedded Systems for Energy Efficiency",
      excerpt: "Strategies and techniques for optimizing power consumption in embedded systems, critical for battery-operated and IoT devices.",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Sarah Chen",
      date: "June 15, 2025",
      category: "embedded"
    },
    {
      id: 5,
      title: "Mobile App Development: Native vs. Cross-Platform",
      excerpt: "An objective comparison of native and cross-platform approaches to mobile app development, with pros, cons, and recommendations based on project requirements.",
      image: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Amelia Patel",
      date: "June 8, 2025",
      category: "app"
    },
    {
      id: 6,
      title: "Introduction to Machine Learning for IoT Applications",
      excerpt: "Learn how machine learning algorithms can enhance IoT solutions by enabling predictive analytics, anomaly detection, and automated decision-making.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Sarah Chen",
      date: "May 25, 2025",
      category: "iot"
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "iot", name: "IoT" },
    { id: "web", name: "Web Development" },
    { id: "app", name: "App Development" },
    { id: "embedded", name: "Embedded Systems" },
    { id: "automation", name: "Industrial Automation" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest insights, trends, and innovations in technology from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-muted/50 grid grid-flow-col auto-cols-fr md:w-fit">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container py-8">
        <Tabs defaultValue="all" className="w-full">
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-muted/40 hover:border-primary/60 transition-colors overflow-hidden flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="text-sm font-medium text-primary mb-2">{post.category.toUpperCase()}</div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    <span>{post.author}</span> • <span>{post.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        </Tabs>
        
        {categories.slice(1).map((category) => (
          <Tabs>
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => post.category === category.id).map((post) => (
                <Card key={post.id} className="border-muted/40 hover:border-primary/60 transition-colors overflow-hidden flex flex-col h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <div className="text-sm font-medium text-primary mb-2">{post.category.toUpperCase()}</div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <span>{post.author}</span> • <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          </Tabs>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles, tutorials, and industry insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input placeholder="Your email address" className="flex-grow" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}