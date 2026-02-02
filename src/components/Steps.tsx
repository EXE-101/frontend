import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, MapPin, Hand, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Reserve & Pay',
    description: 'Browse available Surprise Bags near you and reserve one through the app.',
    icon: ShoppingBag,
  },
  {
    number: 2,
    title: 'Go to Store',
    description: 'Head to the store during the specified pickup time window.',
    icon: MapPin,
  },
  {
    number: 3,
    title: 'Swipe to Collect',
    description: 'Show your phone and swipe the in-app slider to confirm your reservation.',
    icon: Hand,
  },
  {
    number: 4,
    title: 'Enjoy Your Bag',
    description: 'Staff hands you the Surprise Bag - the perfect meal at a great price!',
    icon: CheckCircle2,
  },
];

export function Steps() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-balance">
            How It Works
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Follow these simple steps to pick up your first Too Good To Go Surprise Bag
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="bg-card border border-border rounded-2xl hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="space-y-4">
                    {/* Step Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="inline-block p-4 bg-secondary/30 rounded-2xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
