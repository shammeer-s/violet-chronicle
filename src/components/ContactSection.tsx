import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-title font-bold mb-4">
            Get In <span className="text-transparent bg-gradient-primary bg-clip-text">Touch</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <a 
                        href={contact.href}
                        className="text-foreground hover:text-primary transition-smooth font-medium"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
              <h4 className="font-semibold text-foreground mb-4">Quick Connect</h4>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-primary hover:bg-primary/90">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full justify-start border-primary/30 hover:bg-primary/10">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send WhatsApp Message
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 animate-fade-in-right">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background/50 border-primary/20 focus:border-primary min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;