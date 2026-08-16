import { processSteps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-card py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-4xl leading-[1.2] text-primary-dark md:text-5xl">
              Made by me,
              <br />
              for you 💕
            </h2>
            <p className="mb-5 text-base leading-relaxed font-semibold text-body">
              I paint every single nail by hand — no transfers, no stickers, no shortcuts. Just
              tiny brushes, a steady hand, charms, gems, and embellishments, and a whole lot of
              love for the craft.
            </p>
            <p className="mb-5 text-base leading-relaxed font-semibold text-body">
              Whether you want something from the collection or something completely dreamed up
              together, I work with you to get it just right.
            </p>
            <p className="text-base leading-relaxed font-semibold text-body">
              DM, drop a message, or send a mood board — I love hearing your ideas and there are
              no wrong ones.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {processSteps.map((step) => (
              <div key={step.text} className="flex items-start gap-4 rounded-2xl bg-background p-4">
                <span className="mt-0.5 flex-shrink-0 text-2xl">{step.emoji}</span>
                <p className="text-sm leading-relaxed font-semibold text-body">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
