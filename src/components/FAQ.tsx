import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'item-1',
    question: 'What time should I arrive to pick up my bag?',
    answer:
      'You should arrive within the pickup time window specified in the app for each Surprise Bag. The store staff will be ready during this time to hand you your bag. We recommend arriving 5-10 minutes before the end of the window to avoid missing out.',
  },
  {
    id: 'item-2',
    question: 'What if I have allergies or dietary restrictions?',
    answer:
      'Before reserving a Surprise Bag, you can view information about the store and read reviews from other customers. However, the exact contents of Surprise Bags are a surprise! We recommend checking with the store staff about major allergens when you pick up your bag.',
  },
  {
    id: 'item-3',
    question: 'Can I cancel my reservation?',
    answer:
      'Yes, you can cancel your reservation through the Too Good To Go app. However, cancellations made close to the pickup time or after the time window has started cannot be refunded. Try to cancel as early as possible to receive your refund.',
  },
  {
    id: 'item-4',
    question: 'What payment methods are accepted?',
    answer:
      'The Too Good To Go app accepts various payment methods including credit cards, debit cards, digital wallets, and other region-specific payment options. Payment is made through the app at the time of reservation.',
  },
  {
    id: 'item-5',
    question: 'Is there a limit to how many bags I can reserve?',
    answer:
      'While you can reserve multiple bags from different stores, each Surprise Bag listing may have a limit on the number available. This is shown in the app. Some stores may also have reservation limits per customer.',
  },
  {
    id: 'item-6',
    question: 'What should I bring when picking up my bag?',
    answer:
      'You only need to bring your Too Good To Go app with you! Have it ready on your phone so you can swipe the slider to confirm your reservation when you arrive at the store.',
  },
];

export function FAQ() {
  return (
    <section className="bg-secondary/10 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70 text-lg">
            Everything you need to know about collecting your Surprise Bag
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-card rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-foreground hover:text-primary font-semibold text-base py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pt-0 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
