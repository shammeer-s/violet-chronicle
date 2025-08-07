import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Your Name
        </h1>
        <Button 
          variant="outline" 
          onClick={scrollToContact}
          className="text-sm font-medium hover:bg-primary/10 transition-all duration-300"
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;