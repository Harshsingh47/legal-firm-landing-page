import { Scale, Briefcase, FileText, Building2, Shield, Globe, TrendingUp, Users } from 'lucide-react';
import { Card } from './ui/card';

export function PracticeAreas() {
  const practices = [
    {
      icon: Briefcase,
      title: 'Corporate & M&A',
      description: 'Strategic counsel on mergers, acquisitions, joint ventures, and corporate restructuring.'
    },
    {
      icon: Scale,
      title: 'Litigation & Arbitration',
      description: 'Representation in complex commercial disputes, civil litigation, and arbitration proceedings.'
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      description: 'Protection and enforcement of patents, trademarks, copyrights, and trade secrets.'
    },
    {
      icon: Building2,
      title: 'Real Estate & Infrastructure',
      description: 'Legal advisory on property transactions, construction projects, and infrastructure development.'
    },
    {
      icon: Shield,
      title: 'Regulatory & Compliance',
      description: 'Navigating regulatory frameworks, compliance programs, and government relations.'
    },
    {
      icon: Globe,
      title: 'International Trade',
      description: 'Cross-border transactions, trade regulations, and international commercial law.'
    },
    {
      icon: TrendingUp,
      title: 'Banking & Finance',
      description: 'Financial transactions, securities, lending arrangements, and capital markets.'
    },
    {
      icon: Users,
      title: 'Employment & Labor',
      description: 'Workforce management, employment contracts, and labor law compliance.'
    }
  ];

  return (
    <section id="practice-areas" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm">Our Expertise</span>
          </div>
          <h2 className="mb-4">Comprehensive Legal Services</h2>
          <p className="text-muted-foreground">
            We offer a wide range of legal services tailored to meet the diverse needs 
            of our clients across various industries and practice areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="mb-3">{practice.title}</h3>
                <p className="text-sm text-muted-foreground">{practice.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
