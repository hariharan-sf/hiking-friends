"use client";
import SectionReveal from "@/components/section-reveal";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Is hiking in Hatton safe?",
    answer: "Yes. Our local guides know the trails and guide every group with safety-first planning.",
  },
  {
    question: "What should I bring for a hike?",
    answer: "Comfortable shoes, water, sunscreen, and a light jacket are recommended for most Hatton routes.",
  },
  {
    question: "Are the hikes good for beginners?",
    answer: "Yes. We offer beginner-friendly walks and also more advanced treks for experienced hikers.",
  },
  {
    question: "Do you provide transport?",
    answer: "Yes. Transport can be arranged based on your selected package and pickup location.",
  },
  {
    question: "What is the best time to hike in Hatton?",
    answer: "Early mornings are best for cool weather, clearer views, and comfortable trail conditions.",
  },
];

const whatsappUrl =
  "https://wa.me/94774989745?text=Hi%20Hiking%20Friends%2C%20I%20want%20to%20book%20a%2015-minute%20call%20about%20a%20Hatton%20hike.";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-amber-50/40 py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div>
            <SectionReveal>
              <p className="text-sm font-semibold text-amber-700">• FAQs</p>
            </SectionReveal>
            <SectionReveal delay={0.04}>
              <h2 className="font-luxury mt-2 text-4xl leading-tight text-slate-800">Frequently Asked Questions</h2>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <Image src="/images/shf-head-shot.webp" alt="Hiking Friends Sri Lanka head shot" width={56} height={56} className="mb-4 h-14 w-14 rounded-full border border-amber-200 bg-amber-50" />
                <h3 className="font-luxury text-3xl text-slate-800">Book a 15 min call</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  If you have any questions, book a 15-minute call to get more information.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
                >
                  Book a Free Call
                </a>
              </div>
            </SectionReveal>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <SectionReveal key={item.question} delay={0.04 + index * 0.04}>
                <details
                  className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-lg font-medium text-slate-800">
                    {item.question}
                    <span className="text-2xl leading-none text-slate-500 group-open:hidden">+</span>
                    <span className="hidden text-2xl leading-none text-slate-500 group-open:block">×</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
