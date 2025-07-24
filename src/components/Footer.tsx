import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Micro TechBit
              </div>
            </Link>
            <p className="text-muted-foreground mb-4">
              Innovative solutions in IoT, web development, industrial automation, 
              and embedded systems. Empowering businesses with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">About</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-primary">IoT Solutions</li>
              <li className="text-muted-foreground hover:text-primary">Web Development</li>
              <li className="text-muted-foreground hover:text-primary">App Development</li>
              <li className="text-muted-foreground hover:text-primary">Embedded Systems</li>
              <li className="text-muted-foreground hover:text-primary">Industrial Automation</li>
              <li className="text-muted-foreground hover:text-primary">Training Courses</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>123 Tech Street, Innovation City, 10001</span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Phone size={18} />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@techsync.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                  <Mail size={18} />
                  <span>info@techsync.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>© {currentYear} Micro TechBit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}