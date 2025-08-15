import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TB</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">TechBlog</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Discover the latest in technology, web development, and digital innovation. 
              Join our community of passionate developers and tech enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-xs">
            © 2024 TechBlog. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1 mt-2 sm:mt-0">
            Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> by the TechBlog team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;