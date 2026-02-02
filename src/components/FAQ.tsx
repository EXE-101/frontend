"use client";

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
    // SỬA: Background đổi thành #003D33 (Xanh đậm)
    <section className="bg-[#003D33] py-24 md:py-32 font-sans relative overflow-hidden">
      
      {/* Decor nền: Thêm đốm sáng nhẹ để bớt đơn điệu (Optional) */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[#D4E868]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-6 mb-16 text-center">
          <span className="text-[#D4E868] font-bold tracking-[0.2em] uppercase text-xs block mb-2">
             Support Center
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FFF5E1] text-balance tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#FFF5E1] text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about collecting your Surprise Bag and using the app.
          </p>
        </div>

        {/* Accordion List */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              // SỬA: Card chuyển sang hiệu ứng kính mờ (bg-white/5) viền trắng mờ
              className="bg-white/5 border border-white/10 rounded-2xl px-6 md:px-8 transition-all duration-300 hover:bg-white/10"
            >
              {/* Trigger: Chữ trắng, khi hover đổi màu vàng chanh */}
              <AccordionTrigger className="text-[#FFF5E1] hover:text-[#D4E868] hover:no-underline font-bold text-lg py-6 text-left [&[data-state=open]]:text-[#D4E868]">
                {faq.question}
              </AccordionTrigger>
              
              {/* Content: Màu xám bạc dễ đọc trên nền tối */}
              <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6 pt-0">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}