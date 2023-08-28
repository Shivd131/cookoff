// Faqs.js
import React from "react";
import FaqItem from "./faqItem"; // Adjust the path to match your folder structure

const Faqs = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] relative z-10">
      <div className="uppercase text-[16px] md:text-[10px] mx-[13%] md:mx-[10%] text-[#B7AB98] mt-32 mb-10 tracking-[7px]">
        FAQs
      </div>
      <FaqItem question="What is Cook-Off?" answer="A Competative Exam." />
      <FaqItem
        question="Is the event online or offline?"
        answer="it is an Offline event."
      />
      <FaqItem
        question="Where can I register for the event?"
        answer="On Vtop"
      />
      <FaqItem
        question="If I still have some doubts, how I get them resolved?"
        answer="If you still have some doubts contact us on any of the social media handles"
      />
    </div>
  );
};

export default Faqs;
