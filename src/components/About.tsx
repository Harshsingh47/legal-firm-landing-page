import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Target, Heart } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality legal services with attention to detail.'
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Understanding client needs and providing tailored solutions for optimal outcomes.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Upholding ethical standards and transparency in all our professional dealings.'
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjAxODQ4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business professionals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
              <span className="text-sm">About Our Firm</span>
            </div>
            <h2 className="mb-6">
              Leading Legal Practice Built on Trust & Results
            </h2>
            <p className="text-muted-foreground mb-6">
              Established in 1980, our firm has grown to become one of India's most 
              respected legal practices. With offices across major metropolitan cities, 
              we combine deep local expertise with a global perspective.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of over 150 legal professionals brings together diverse 
              specializations and industry knowledge to serve clients ranging from 
              Fortune 500 companies to emerging startups and high-net-worth individuals.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
