import React from "react";

const faqs = [
  {
    id: 1,
    question: "What is IdeaVault?",
    answer:
      "IdeaVault is a platform where users can share innovative startup ideas, discover projects, and receive valuable feedback from the community.",
  },
  {
    id: 2,
    question: "Do I need an account to submit an idea?",
    answer:
      "Yes. You need to sign in before you can submit, edit, or manage your ideas.",
  },
  {
    id: 3,
    question: "Can I comment on other users' ideas?",
    answer:
      "Yes. Logged-in users can comment on ideas to share feedback, suggestions, and encouragement.",
  },
  {
    id: 4,
    question: "Can I edit or delete my idea?",
    answer:
      "Yes. You can update or remove your ideas anytime from the My Ideas page.",
  },
];

const FAQCard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-3">
          Find answers to the most common questions about IdeaVault.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              ❓ {faq.question}
            </h3>

            <p className="text-gray-600 leading-7">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQCard;