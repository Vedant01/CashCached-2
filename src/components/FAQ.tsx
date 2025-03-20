import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-500/20 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 px-3 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-purple-400 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 px-3' : 'max-h-0'}`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does CashCached integrate with existing AI services?",
      answer: "CashCached provides API connectors for all major AI service providers including OpenAI, Anthropic, Google AI, and more. Our platform uses secure API keys to connect to these services and manage payments, without requiring any changes to your existing AI infrastructure."
    },
    {
      question: "Can I use CashCached products independently or do I need the full suite?",
      answer: "Each CashCached product is designed to work independently or as part of our integrated ecosystem. You can start with just Vora for fund management, or Flow for payment processing, and add other products as your needs evolve."
    },
    {
      question: "How secure is the payment information stored in CashCached?",
      answer: "CashCached employs bank-level security measures including end-to-end encryption, secure API authentication, and regular security audits. We are SOC 2 compliant and never store sensitive payment information on our servers."
    },
    {
      question: "What size of company is CashCached designed for?",
      answer: "CashCached serves businesses of all sizes, from startups to enterprises. Our pricing plans scale with your usage, and our products can be customized to meet the specific needs of your organization, whether you have 5 employees or 5,000."
    },
    {
      question: "How long does implementation take?",
      answer: "Most customers can implement CashCached products within 1-2 weeks. Our team provides comprehensive onboarding support, including technical integration assistance, training, and documentation to ensure a smooth transition."
    },
    {
      question: "Does CashCached support international payments?",
      answer: "Yes, CashCached supports payments in multiple currencies and works with AI service providers globally. Our platform handles currency conversion automatically, making it easy to manage AI expenses across different regions."
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about CashCached products and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-900/30 to-black rounded-xl border border-purple-500/20 overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};