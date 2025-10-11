import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const offices = [
    {
      city: 'Mumbai',
      address: 'Nariman Point, Mumbai - 400021',
      phone: '+91 22 6666 7777',
      email: 'mumbai@shroffassociates.com'
    },
    {
      city: 'New Delhi',
      address: 'Connaught Place, New Delhi - 110001',
      phone: '+91 11 4444 5555',
      email: 'delhi@shroffassociates.com'
    },
    {
      city: 'Bangalore',
      address: 'MG Road, Bangalore - 560001',
      phone: '+91 80 8888 9999',
      email: 'bangalore@shroffassociates.com'
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
            <span className="text-sm">Get In Touch</span>
          </div>
          <h2 className="mb-4">Schedule a Consultation</h2>
          <p className="text-muted-foreground">
            Contact us to discuss your legal needs. Our team is ready to provide 
            expert guidance and tailored solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div key={index} className="bg-muted/30 rounded-2xl p-6">
              <h3 className="mb-4">{office.city}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-muted-foreground">{office.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm text-muted-foreground">{office.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm text-muted-foreground">{office.email}</span>
                </div>
                <div className="flex items-start gap-3 pt-2 border-t">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={18} />
                  <div className="text-sm text-muted-foreground">
                    <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                    <div>Sat: 10:00 AM - 2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white border rounded-2xl p-8">
          <h3 className="mb-6">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="practice">Practice Area</Label>
              <Select>
                <SelectTrigger id="practice">
                  <SelectValue placeholder="Select a practice area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corporate">Corporate & M&A</SelectItem>
                  <SelectItem value="litigation">Litigation & Arbitration</SelectItem>
                  <SelectItem value="ip">Intellectual Property</SelectItem>
                  <SelectItem value="realestate">Real Estate & Infrastructure</SelectItem>
                  <SelectItem value="regulatory">Regulatory & Compliance</SelectItem>
                  <SelectItem value="trade">International Trade</SelectItem>
                  <SelectItem value="banking">Banking & Finance</SelectItem>
                  <SelectItem value="employment">Employment & Labor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Please describe your legal inquiry..."
                rows={5}
              />
            </div>

            <Button size="lg" className="w-full">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
