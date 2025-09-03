import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient mb-4">Amit Panicker</div>
          <p className="text-muted-foreground mb-6">MERN Developer & Data Analyst</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                data-testid={`footer-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 Amit Panicker. All rights reserved. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
