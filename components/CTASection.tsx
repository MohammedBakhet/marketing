"use client"

import Link from "next/link"
import { useState } from "react"

const steps = [
  { num: "01", label: "Samtal", desc: "Vi lyssnar och förstår era behov" },
  { num: "02", label: "Strategi", desc: "Vi skapar en skräddarsydd plan" },
  { num: "03", label: "Resultat", desc: "Vi levererar och följer upp" },
]

export default function CTASection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section
      id="kontakt"
      className="relative w-full overflow-hidden bg-[#050505]"
    >
      {/* Top border accent */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="h-px w-full bg-[#141414]" />
      </div>

      <div className="relative py-28 md:py-40 lg:py-52">
        {/* Giant background letter - bleeding off left edge */}
        <div
          className="pointer-events-none absolute -left-[5%] top-1/2 -translate-y-1/2 select-none"
          aria-hidden="true"
        >
          <span className="block font-serif text-[28rem] font-bold italic leading-none text-[#0a0a0a] md:text-[36rem] lg:text-[48rem]">
            &amp;
          </span>
        </div>

        {/* Content grid */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-16 md:grid-cols-12 md:gap-8 lg:gap-12">

            {/* Left column - big statement */}
            <div className="flex flex-col justify-center md:col-span-6 lg:col-span-5">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-6 bg-[#c9a84c]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#c9a84c]">
                  Kontakt
                </span>
              </div>

              <h2 className="mb-6">
                <span className="block text-4xl font-light uppercase tracking-[0.06em] text-[#f5f0e6] md:text-5xl lg:text-6xl">
                  Redo att ta ditt
                </span>
                <span className="block font-serif text-6xl italic text-[#c9a84c] md:text-7xl lg:text-[5.5rem]">
                  företag
                </span>
                <span className="block text-4xl font-light uppercase tracking-[0.06em] text-[#f5f0e6] md:text-5xl lg:text-6xl">
                  till nästa nivå?
                </span>
              </h2>

              <p className="max-w-sm text-sm font-light leading-relaxed text-[#505050] md:text-base">
                Låt oss prata om hur vi kan hjälpa ditt varumärke att växa.
                Vi är redo när du är.
              </p>
            </div>

            {/* Right column - interactive steps + CTA */}
            <div className="flex flex-col gap-10 md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">

              {/* Process steps - interactive */}
              <div className="flex flex-col">
                <span className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#2a2a2a]">
                  Vår process
                </span>
                <div className="flex flex-col gap-0">
                  {steps.map((step, i) => (
                    <button
                      key={step.num}
                      type="button"
                      className="group w-full text-left"
                      onMouseEnter={() => setActiveStep(i)}
                    >
                      <div
                        className={`flex items-center gap-5 border-t border-[#141414] px-0 py-5 transition-all duration-500 ${
                          activeStep === i ? "border-[#c9a84c]/30" : ""
                        }`}
                      >
                        {/* Step number */}
                        <span
                          className={`text-xs tabular-nums font-light transition-colors duration-500 ${
                            activeStep === i ? "text-[#c9a84c]" : "text-[#2a2a2a]"
                          }`}
                        >
                          {step.num}
                        </span>

                        {/* Step label */}
                        <span
                          className={`text-lg font-light uppercase tracking-[0.1em] transition-all duration-500 md:text-xl ${
                            activeStep === i ? "text-[#f5f0e6]" : "text-[#3a3a3a]"
                          }`}
                        >
                          {step.label}
                        </span>

                        {/* Expanding line + description */}
                        <div className="ml-auto flex items-center gap-4 overflow-hidden">
                          <span
                            className={`whitespace-nowrap text-xs font-light text-[#505050] transition-all duration-500 ${
                              activeStep === i
                                ? "max-w-60 opacity-100"
                                : "max-w-0 opacity-0"
                            }`}
                          >
                            {step.desc}
                          </span>
                          <div
                            className={`h-1.5 w-1.5 flex-shrink-0 rotate-45 transition-all duration-500 ${
                              activeStep === i ? "bg-[#c9a84c]" : "bg-[#1a1a1a]"
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                  {/* Bottom border for last item */}
                  <div className="h-px w-full bg-[#141414]" />
                </div>
              </div>

              {/* CTA area */}
              <div className="flex flex-col gap-8">
                {/* Main CTA button */}
                <Link href="/kontakt" className="group relative self-start">
                  <span className="relative flex items-center gap-5 bg-[#c9a84c] px-10 py-5 transition-all duration-700 group-hover:bg-[#050505] group-hover:shadow-[inset_0_0_0_1px_#c9a84c] md:px-14 md:py-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#050505] transition-colors duration-700 group-hover:text-[#c9a84c] md:text-sm">
                      Boka ett samtal
                    </span>
                    <svg
                      className="h-4 w-4 text-[#050505] transition-all duration-700 group-hover:translate-x-2 group-hover:text-[#c9a84c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                </Link>

                {/* Trust row */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-[#c9a84c] opacity-60" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#2a2a2a]">
                      Gratis konsultation
                    </span>
                  </div>
                  <div className="h-3 w-px bg-[#141414]" />
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-[#c9a84c] opacity-60" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#2a2a2a]">
                      Svar inom 48h
                    </span>
                  </div>
                  <div className="h-3 w-px bg-[#141414]" />
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-[#c9a84c] opacity-60" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#2a2a2a]">
                      Ingen bindningstid
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
