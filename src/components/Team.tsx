import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: 'Rajesh Khanna',
      position: 'Senior Partner, Corporate Law',
      expertise: 'M&A, Securities, Corporate Governance',
      image: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAxMDYzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Priya Sharma',
      position: 'Partner, Litigation & Dispute Resolution',
      expertise: 'Commercial Litigation, Arbitration',
      image: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAxMDYzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Vikram Patel',
      position: 'Partner, Intellectual Property',
      expertise: 'Patents, Trademarks, IP Litigation',
      image: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAxMDYzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Ananya Desai',
      position: 'Partner, Banking & Finance',
      expertise: 'Project Finance, Capital Markets',
      image: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAxMDYzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm">Our Team</span>
          </div>
          <h2 className="mb-4">Meet Our Legal Experts</h2>
          <p className="text-muted-foreground">
            Our team comprises seasoned legal professionals with extensive experience 
            across various practice areas and industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="mb-1">{member.name}</h3>
              <p className="text-sm mb-2">{member.position}</p>
              <p className="text-xs text-muted-foreground">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
