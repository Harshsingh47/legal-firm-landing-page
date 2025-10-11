import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative pt-20">
      <div className="grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-5rem)]">
        {/* Left Content */}
        <div className="flex items-center px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-2 bg-accent rounded-full mb-6">
              <span className="text-sm">Since 1980 • Trusted Legal Partners</span>
            </div>
            <h1 className="mb-6">
              Excellence in Legal Counsel Across India
            </h1>
            <p className="mb-8 text-muted-foreground">
              A leading full-service law firm providing comprehensive legal solutions 
              to corporations, institutions, and individuals. Our expertise spans 
              corporate law, litigation, intellectual property, and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button size="lg" variant="outline">
                View Practice Areas
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t">
              <div>
                <div className="mb-1">40+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Legal Experts</div>
              </div>
              <div>
                <div className="mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative lg:h-full h-96">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1755551636821-01c102d8349e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAxNjk3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Law office interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
