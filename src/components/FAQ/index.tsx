import { useState } from "react";
import SectionHeader from "../SectionHeader";
import AccordionItem from "./Accordion";

const data = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. if you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. if you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancelling policy?",
    answer:
      "Yes, you can try us for free for 30 days. if you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing works?",
    answer:
      "Yes, you can try us for free for 30 days. if you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Yes, you can try us for free for 30 days. if you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <section className="py-16 xl:py-24">
      <SectionHeader
        callout={""}
        heading={"Frequently asked questions"}
        subtext={"Everything you need to know about Polio."}
      />
      <div className="container mt-16">
        <div className="w-full lg:w-[628px] flex flex-col gap-6 mx-auto">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              triggerText={item.question}
              isOpen={openItem === `Item ${index}`}
              onToggle={() => toggle(`Item ${index}`)}
            >
              {item.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
