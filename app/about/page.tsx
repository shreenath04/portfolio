"use client";

import { useState } from "react";

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="flex-1 pb-24">
      <section className="px-6 pt-24 mx-auto max-w-[75%] md:max-w-[60%] lg:max-w-[50%]">
        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-medium mb-16 tracking-tighter leading-none text-neutral-900 dark:text-neutral-100">
          Shreenath <br />
          Jaykumar <br />
          Gandhi.
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {/* SHORT VERSION - Always Visible */}
          <div className="space-y-6 text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
            <p>
              I&apos;m a CS senior at Texas Tech who builds at the intersection of AI, data, and systems that influence real decisions. My standard is simple: It just works. Not flashy, not over-engineered. Just reliable, every time, without asking for attention.
            </p>
            <p>
              I&apos;m not afraid of failing. I&apos;m afraid of failing and walking away without understanding why.
            </p>
            <p>
              There&apos;s more to me than what&apos;s on a resume. A classical pianist on pause, a geopolitics obsessive, a cook who cares about the history of every dish. If you&apos;re curious, keep reading.
            </p>
          </div>

          {/* FULL VERSION - Expandable Content */}
          <div 
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[5000px] opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-8 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p>
                Shreenath Jaykumar Gandhi. Some people ask if they said it right. I always tell them if they didn&apos;t. You can call me Shree if you need to.
              </p>
              <p>
                I grew up in Gujarat, India. Came to the US alone at 18 to study Computer Science at Texas Tech. No safety net, no blueprint, just a scholarship and few suitcases. The first year was honestly chaos. No one watching me or telling me to stop. I went all out. And I paid for it.
              </p>
              <p>
                That summer I fixed what I had broken, came back, and never looked back. Presidential Merit Scholar. 3.5 GPA. Two concurrent research roles. A serverless pipeline running in production every night. A brain tumor classifier outperforming published baselines. I&apos;m not telling you this to impress you, I&apos;m telling you because that gap between who I was freshman year and who I am now is the most honest thing about me. The discipline I have now isn&apos;t a personality trait. It&apos;s something I built, on purpose, from scratch.
              </p>
              <p>
                I think about the world the way most engineers don&apos;t. I&apos;m deep into geopolitics, not as a hobby but as a philosophy. One Strait of Hormuz closure and gas prices double. Double gas prices and groceries get expensive because of transportation and production costs. Everything is connected. No permanent allies, no permanent adversaries. I applied that lens to how I navigate the world and it&apos;s served me well. It&apos;s also why the systems I want to build sit at the intersection of AI and markets. I don&apos;t just want to write good code. I want the code to mean something at a decision-making level.
              </p>
              <p>
                Outside of all of this, I cook. Primarily Indian food, and I follow Chef Ranveer Brar not just for the recipes but for the history behind every dish. The evolution of an ingredient. The story of a spice. A dish becomes more special when you know where it came from. I think that&apos;s true of most things.
              </p>
              <p>
                I trained in classical piano through Trinity College London exams and left with distinctions. I haven&apos;t played in four years. Coming to the US, building a life from zero, there was no piano and honestly no mental space for one. But it&apos;s the first thing I&apos;m buying when I&apos;m settled. I want to play Beethoven. I want to give more exams. Maybe even start an Instagram page. I&apos;m not done with that chapter, just pausing it.
              </p>
              <p>
                I also used to make my own lyrical hip hop back in India. Wrote my own lyrics, recorded on an iPhone 6, wrapped it in a sock as a pop filter, ran BandLab on that crappy old phone, got no-copyright beats off YouTube. My brother would record the videos and I&apos;d edit them on InShot. KR$NA was everything to me then. &quot;Awaam till the end&quot;.
              </p>
              <p>
                India gave me my values. The US taught me how to navigate the world. I am who I am because of both and I wouldn&apos;t trade either half.
              </p>
              <p className="font-medium text-neutral-900 dark:text-neutral-100 italic pt-4">
                Graduating May 2026. Looking for the right room to be in. I&apos;ll handle the rest.
              </p>
            </div>
          </div>

          {/* Subtle Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-12 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border-b border-neutral-300 dark:border-neutral-700 pb-1"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        </div>
      </section>
    </main>
  );
}