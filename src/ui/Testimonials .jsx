import { StarIcon } from "@heroicons/react/16/solid";

const testimonials = [
  {
    quote: "This completely changed how our team ships product. We're 3x faster than before.",
    name: "Sarah R.",
    role: "Head of Product, Notion",
    initials: "SR",
    color: { bg: "#E1F5EE", text: "#085041" },
    rating: 5,
  },
  {
    quote: "The onboarding was seamless and the support team is genuinely incredible.",
    name: "James K.",
    role: "CTO, Linear",
    initials: "JK",
    color: { bg: "#EEEDFE", text: "#3C3489" },
    rating: 5,
  },
  {
    quote: "I was skeptical, but after one week I couldn't imagine going back. Worth every penny.",
    name: "Aisha M.",
    role: "Design Lead, Figma",
    initials: "AM",
    color: { bg: "#FAECE7", text: "#712B13" },
    rating: 5,
  },
];

const logos = ["Stripe", "Vercel", "Loom", "Intercom", "Framer"];

export default function Testimonials() {
  return (
    <section className="mt-96 h-screen px-8 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-[11px] font-medium uppercase tracking-widest text-gray-400 mb-3">
          Social proof
        </p>
        <h2
          className="text-center text-4xl font-medium text-gray-900 mb-4"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Trusted by thousands of teams
        </h2>
        <p className="text-center text-base text-gray-500 max-w-md mx-auto">
          Don't take our word for it — here's what our customers say.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <StarIcon
                    key={s}
                    className="w-3.5 h-3.5"
                    fill={s < t.rating ? "#f59e0b" : "none"}
                    stroke={s < t.rating ? "#f59e0b" : "#d1d5db"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed italic flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-auto">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                  style={{ background: t.color.bg, color: t.color.text }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center mt-12">
          {logos.map((logo) => (
            <span
              key={logo}
              className="bg-gray-50 text-gray-400 text-sm font-medium px-5 py-2 rounded-lg tracking-wide"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}