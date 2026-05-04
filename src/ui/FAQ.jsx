import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately and are prorated.",
  },
  {
    q: "Is there a free trial for the Pro plan?",
    a: "Absolutely. Every new account gets a 14-day free trial of the Pro plan with no credit card required.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual Enterprise plans.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel any time from your billing settings. You'll keep access until the end of your billing period, and we never charge cancellation fees.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted at rest and in transit using AES-256. We are SOC 2 Type II certified and GDPR compliant.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 px-8 border-b border-gray-100 h-screen">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-[11px] font-medium uppercase tracking-widest text-gray-400 mb-3">
          FAQ
        </p>
        <h2
          className="text-center text-4xl font-medium text-gray-900 mb-4"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Questions, answered
        </h2>
        <p className="text-center text-base text-gray-500 mb-10">
          Everything you need to know before getting started.
        </p>

        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${i < faqs.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <PlusCircleIcon
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}