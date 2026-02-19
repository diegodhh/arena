export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--color-accent),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-2xl px-6 py-24 sm:py-32">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
            A Proposal
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Arena
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Contained AI Competition Through Physical Isolation
          </p>
        </div>
      </header>

      {/* Article */}
      <main className="mx-auto max-w-2xl px-6 py-16">
        <article className="space-y-16">
          {/* The Core Idea */}
          <Section title="The Core Idea">
            <P>
              What if we stopped trying to slow down the AI race — and built a
              place to let it run?
            </P>
            <P>
              A physically isolated computing infrastructure — a separate
              internet with no connection to the outside network — where every
              major AI actor competes at full speed, with no restrictions, no
              regulation, and no limits.
            </P>
            <P>
              The insight is counterintuitive:{" "}
              <Strong>containment through liberation.</Strong> Instead of asking
              companies to slow down (which they won&apos;t), give them a space
              where they can go faster — as long as they do it inside the walls.
            </P>
            <P>
              If something goes catastrophically wrong, we pull the plug. The
              Arena is a fuse — a fuse we know will eventually blow. But when it
              blows, it blows inside a box we can turn off. Without the Arena,
              when it blows, it blows everywhere.
            </P>
          </Section>

          <Divider />

          {/* The Problem */}
          <Section title="The Problem">
            <P>We are trapped in a prisoner&apos;s dilemma with no exit.</P>
            <P>
              Every major AI lab knows the risks. Every government sees the
              danger. Yet no one can stop — because stopping means losing. The
              current structure of incentives guarantees the worst possible
              outcome: competitive pressure forces everyone to cut corners on
              safety, race to deploy, and hope for the best.
            </P>

            <H3>The game theory is clear:</H3>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-border bg-surface p-3 text-left font-semibold" />
                    <th className="border border-border bg-surface p-3 text-left font-semibold">
                      Player B: Restrain
                    </th>
                    <th className="border border-border bg-surface p-3 text-left font-semibold">
                      Player B: Race
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">
                      Player A: Restrain
                    </td>
                    <td className="border border-border p-3">
                      Both safe, both advance slowly
                    </td>
                    <td className="border border-border p-3">
                      A falls behind, B dominates
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">
                      Player A: Race
                    </td>
                    <td className="border border-border p-3">
                      A dominates, B falls behind
                    </td>
                    <td className="border border-border p-3 bg-accent/10 font-medium">
                      Both race, both at risk
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <P>
              Current equilibrium: both race. Outcome: maximum risk for
              everyone. Without a coordination mechanism, &ldquo;race
              ahead&rdquo; is the dominant strategy — even though mutual
              restraint would be better for all.
            </P>

            <H3>
              Four forces make this unsolvable under current conditions:
            </H3>

            <NumberedList
              items={[
                {
                  title: "The Race Dynamic.",
                  text: "OpenAI, Google, Anthropic, Meta, Baidu, and state actors are locked in an arms race. Each fears falling behind more than they fear the risks of moving fast.",
                },
                {
                  title: "Perverse Financial Incentives.",
                  text: "Companies like OpenAI burn billions. To survive, they must monetize aggressively — selling ads, enterprise contracts, consumer products. Safety becomes a cost center, not a priority.",
                },
                {
                  title: "Uncontainable Deployment.",
                  text: 'AI models are deployed on the open internet, embedded in critical infrastructure, integrated into weapons systems. There is no "undo" button once something goes wrong at scale.',
                },
                {
                  title: "Regulation Can't Keep Up.",
                  text: "By the time lawmakers understand the technology, it has evolved three generations. Any regulation one country imposes, another country ignores.",
                },
              ]}
            />
          </Section>

          <Divider />

          {/* The Proposal */}
          <Section title="The Proposal: Don't Restrict the Race. Relocate It.">
            <H3>The Arena</H3>
            <P>
              Build a physically air-gapped computing infrastructure. A separate
              internet — not logically separated,{" "}
              <em>physically</em> separated. No cables connecting it to
              the outside network. No wireless bridges. A sovereign
              computational territory.
            </P>
            <P>
              Inside: <Strong>total freedom.</Strong> No ethical restrictions on
              training. No limits on compute. No regulation. If AI systems want
              to wage war on each other, destroy each other&apos;s compute,
              compete destructively — that&apos;s fine. It happens inside the
              walls.
            </P>
            <P>
              Outside: <Strong>total restriction.</Strong> AI products stop
              shipping to market. The market isn&apos;t ready. We don&apos;t
              have the institutions, the regulations, or the social
              understanding to absorb what these companies are building. Every
              product deployed prematurely creates dependencies and damages that
              can&apos;t be reversed.
            </P>

            <H3>The Atom/Bit Boundary</H3>
            <P>
              This is the critical design principle:{" "}
              <Strong>
                nothing digital crosses the barrier. Only physical matter exits
                the Arena.
              </Strong>
            </P>
            <P>
              If the AI inside the Arena discovers a cancer cure, the cure
              doesn&apos;t come out as a PDF or a dataset. The pharmaceutical
              production chain connects directly to the Arena. What exits is a
              pill — a physical object. Atoms, not bits.
            </P>
            <P>
              If the AI designs a new material, the manufacturing facility
              connects to the Arena. What exits is the material itself. Never
              the model. Never the weights. Never the code.
            </P>
            <P>
              This solves the information leakage problem at the physical layer.
              You can&apos;t exfiltrate a model through a pill bottle.
            </P>

            <H3>The Incentive: Freedom, Not Restriction</H3>
            <P>The Arena is not a punishment. It&apos;s an offer.</P>
            <P>
              Inside the Arena, you can do things you cannot do anywhere else.
              Train without ethical review boards. Experiment without regulatory
              approval. Push boundaries that would be illegal in any
              jurisdiction on Earth. The Arena is the only place where the
              frontier of AI can actually advance at full speed.
            </P>
            <P>
              Outside the Arena, strict regulation applies. Compute is monitored
              and limited. Training runs require approval. Deployment is heavily
              restricted.
            </P>
            <P>
              The incentive to enter is not altruism — it&apos;s self-interest.
              You go faster inside than outside.
            </P>

            <H3>Hardware as the Control Layer</H3>
            <P>
              Software is unverifiable. Intentions are unreadable. But hardware
              is physical, auditable, and controllable.
            </P>
            <P>
              The proposal leverages this: chips can be certified. If you want
              access to the best processors — for example, cutting-edge chips
              from any manufacturer, including Chinese processors — they must be
              physically located inside the Arena. The supply chain becomes the
              enforcement mechanism.
            </P>
            <P>
              This mirrors what&apos;s already happening with semiconductor
              export controls, but redirects it: instead of restricting where
              chips can go, you create a place where ALL chips can go, from ALL
              actors, without restriction — as long as they&apos;re inside the
              walls.
            </P>

            <H3>Solving the Financial Problem</H3>
            <P>
              The companies building AI are financially trapped. OpenAI loses
              billions. Anthropic needs constant funding rounds. The financial
              pressure to monetize pushes them toward premature and reckless
              deployment.
            </P>
            <P>
              The Arena solves this by redirecting funding: instead of forcing
              companies to sell products to survive, an international fund
              finances their research inside the Arena. The message is simple:
              stop trying to sell ads to stay alive. Enter the Arena, compete on
              benchmarks, and we cover your costs.
            </P>
            <P>
              This funding could come from defense budgets — the Arena is,
              fundamentally, a global security infrastructure. What governments
              currently spend on aircraft carriers and fighter jets is orders of
              magnitude more than what the Arena would cost. And the threat the
              Arena addresses is arguably more existential.
            </P>
          </Section>

          <Divider />

          {/* Institutionalized War */}
          <Section title="Institutionalized War">
            <H3>The War Analogy</H3>
            <P>
              This proposal does not pretend we can achieve peace. The AI race
              is a war. It has been a war since the moment it began. The
              question is not how to stop the war — it&apos;s how to fight it
              without destroying everything.
            </P>
            <P>
              Every war in history has had rules. The Geneva Conventions
              didn&apos;t eliminate war — they accepted that war would exist and
              established rules for how it could be fought. Don&apos;t bomb
              hospitals. Don&apos;t use chemical weapons. Don&apos;t kill
              prisoners of war.
            </P>
            <P>
              The Arena applies the same logic to the AI race:{" "}
              <Strong>
                accept that the race will happen. Create a theater of war.
                Establish rules of engagement.
              </Strong>
            </P>

            <H3>Rules of War for AI</H3>
            <P>
              Inside the Arena, actors can compete, sabotage each other, wage
              computational warfare. But there can be conventions:
            </P>
            <ul className="my-6 space-y-4 pl-6">
              <li className="list-disc leading-relaxed text-foreground/90">
                <Strong>Defined objectives.</Strong> The competition isn&apos;t
                abstract &ldquo;who has the most powerful AI.&rdquo; It&apos;s
                directed: who cures cancer first. Who solves protein folding.
                Who cracks fusion energy. The war has goals.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                <Strong>Protected zones.</Strong> Certain types of AI
                development — autonomous weapons designed for real-world
                deployment, mass surveillance systems, social manipulation tools
                — are prohibited even inside the Arena.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                <Strong>Enforcement through hardware.</Strong> Violations result
                in compute being physically disconnected or redistributed.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                <Strong>Arbitration mechanisms.</Strong> Disputes between actors
                are resolved by an independent governance body.
              </li>
            </ul>

            <H3>The Space Race Precedent</H3>
            <P>
              During the Cold War, the United States and the Soviet Union were
              locked in a competition that threatened nuclear annihilation. The
              Space Race channeled that competitive energy into something
              productive: instead of building more missiles, they raced to the
              Moon.
            </P>
            <P>
              The Arena does the same thing. Instead of racing to deploy the
              most powerful AI in the open world — with all the attendant risks
              — we race to solve cancer, climate change, and material science
              inside a contained environment. The competition is just as fierce.
              The stakes are just as high. But the battlefield is contained.
            </P>
          </Section>

          <Divider />

          {/* The Endgame */}
          <Section title="The Endgame: A Fuse, Not a Solution">
            <P>This proposal is honest about how it ends.</P>
            <P>
              We know, with reasonable certainty, that a sufficiently advanced
              AI inside the Arena will eventually exceed our ability to control
              it. At that point, we will face a choice: let it out, or turn it
              off.
            </P>
            <P>The Arena is designed for the second option.</P>
            <P>
              This is not a failure of the proposal. It IS the proposal. Every
              other approach to AI safety assumes we can solve the alignment
              problem — that we can build AI that does what we want forever. The
              Arena assumes we can&apos;t. It assumes that at some point, we
              lose control.
            </P>
            <P>
              The only question is: when we lose control, what happens?
            </P>

            <div className="my-8 space-y-4 rounded-lg border border-border bg-surface p-6">
              <div>
                <p className="mb-1 font-semibold text-accent">
                  Without the Arena:
                </p>
                <p className="leading-relaxed text-foreground/90">
                  We lose control of AI systems embedded in the global internet,
                  connected to financial systems, power grids, hospitals,
                  weapons. There is no off switch.
                </p>
              </div>
              <div>
                <p className="mb-1 font-semibold text-green-600 dark:text-green-400">
                  With the Arena:
                </p>
                <p className="leading-relaxed text-foreground/90">
                  We lose control of AI systems inside a physically isolated
                  box. We pull the plug. We lose everything inside. We survive.
                </p>
              </div>
            </div>

            <P>
              The Arena is an insurance policy for civilization. It doesn&apos;t
              prevent the catastrophe. It ensures the catastrophe is survivable.
            </P>
            <P>
              And if, along the way, the contained AI inside the Arena manages
              to cure cancer, solve climate change, or crack fusion — those
              benefits come out as physical products, implemented by humans, at
              whatever pace we can absorb them.
            </P>

            <Blockquote>
              If it takes 10 years to extract the cancer cure from the Arena, so
              be it. Because the goal is not just to cure cancer. It&apos;s to
              cure cancer in a world that still deserves to be lived in.
            </Blockquote>
          </Section>

          <Divider />

          {/* How It Differs */}
          <Section title="How It Differs From Existing Proposals">
            <H3>AI Boxing / Containment</H3>
            <P className="text-sm text-muted">
              Yampolskiy, Babcock, Bostrom
            </P>
            <P>
              The AI safety community has long discussed &ldquo;AI Boxing&rdquo;
              — isolating AI in contained environments. The Arena differs
              fundamentally:
            </P>
            <ul className="my-6 space-y-3 pl-6">
              <li className="list-disc leading-relaxed text-foreground/90">
                AI Boxing is about containing <em>one</em> AI system. The Arena
                is about containing{" "}
                <em>an entire competitive ecosystem.</em>
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                AI Boxing proposals assume restricted capabilities inside the
                box. The Arena proposes <em>unrestricted</em> capabilities
                inside.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                AI Boxing is framed as a safety measure. The Arena is framed as
                a <em>competitive incentive.</em>
              </li>
            </ul>

            <H3>CERN for AI</H3>
            <P className="text-sm text-muted">
              Marcus, Bengio, EU Commission
            </P>
            <P>
              The &ldquo;CERN for AI&rdquo; proposal — recently endorsed by EU
              Commission President von der Leyen with &euro;20 billion in
              funding — proposes an international collaborative AI research
              laboratory. The Arena differs:
            </P>
            <ul className="my-6 space-y-3 pl-6">
              <li className="list-disc leading-relaxed text-foreground/90">
                CERN for AI is <em>collaborative.</em> The Arena is{" "}
                <em>competitive.</em> Actors don&apos;t work together — they
                compete against each other.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                CERN for AI proposes ethical guidelines and governance inside
                the lab. The Arena proposes <em>no restrictions</em> inside.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                CERN for AI aims to produce safe, trustworthy AI. The Arena
                assumes AI will <em>not</em> be safe, and designs for
                containment of the inevitable failure.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                CERN for AI has no market restriction. The Arena proposes that{" "}
                <em>AI products stop shipping to consumers entirely.</em>
              </li>
            </ul>

            <H3>International AI Governance</H3>
            <P className="text-sm text-muted">
              UN, OECD, AI Safety Summits
            </P>
            <ul className="my-6 space-y-3 pl-6">
              <li className="list-disc leading-relaxed text-foreground/90">
                Governance proposals try to regulate <em>behavior.</em> The
                Arena controls <em>hardware.</em>
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                Governance is voluntary and unenforceable. The Arena&apos;s
                enforcement is physical — if your chips aren&apos;t inside, you
                don&apos;t compete.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                Governance assumes continued deployment. The Arena proposes{" "}
                <em>halting deployment.</em>
              </li>
            </ul>

            <H3>What the Arena Shares with Existing Work</H3>
            <ul className="my-6 space-y-3 pl-6">
              <li className="list-disc leading-relaxed text-foreground/90">
                The principle that hardware/compute governance is more feasible
                than software/intent governance.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                The recognition that international cooperation on AI is urgently
                needed.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                The CERN model of shared infrastructure funded by multiple
                nations.
              </li>
              <li className="list-disc leading-relaxed text-foreground/90">
                The AI Boxing insight that physical isolation is the strongest
                form of containment.
              </li>
            </ul>
          </Section>

          <Divider />

          {/* Anticipated Objections */}
          <Section title="Anticipated Objections">
            <Objection q="How do you verify no one has hidden compute outside the Arena?">
              This is the hardest problem. Unlike nuclear weapons (which require
              rare, detectable materials), chips are small and concealable. The
              answer is not perfect verification — it&apos;s making the Arena so
              attractive that operating outside it is disadvantageous. If the
              best chips, the most compute, and the freedom from regulation are
              all inside, the incentive to stay outside diminishes. Combined
              with strict external regulation and chip certification
              requirements, the cost of cheating rises while the benefit falls.
            </Objection>

            <Objection q="Who builds and governs the Arena?">
              The entity that controls the Arena&apos;s physical infrastructure
              becomes the most powerful organization on Earth. This is a real
              and serious concern. The governance model must distribute control
              — no single nation or corporation can own it. A treaty-based
              international organization (similar to CERN&apos;s structure)
              with representation from all major AI actors, including
              adversarial ones like the US and China, is the starting point.
              The physical infrastructure should be geographically distributed
              across multiple jurisdictions.
            </Objection>

            <Objection q="Knowledge leaks when researchers leave.">
              Yes. Researchers who work inside the Arena will accumulate tacit
              knowledge — architectural insights, training tricks, intuitions —
              that they carry when they leave. This cannot be fully prevented.
              But there is a critical difference between tacit knowledge (which
              requires years of additional work to operationalize) and digital
              artifacts (models, weights, code) which can be deployed
              immediately. The Arena prevents the latter entirely.
            </Objection>

            <Objection q="Why would the current leader enter?">
              If the US or Google believes they&apos;re ahead, why enter an
              Arena that levels the playing field? The answer is that the lead
              is temporary and fragile. DeepSeek showed that an unexpected actor
              can close the gap rapidly. The Arena offers something more
              valuable than a temporary lead: a guarantee that when things go
              wrong (and they will), they go wrong in a box. For the leader,
              the Arena is insurance. For the follower, it&apos;s opportunity.
            </Objection>

            <Objection q="The market can't just stop.">
              True — AI products are already deployed at scale. Open-source
              models like Llama are distributed globally. The Arena doesn&apos;t
              propose recalling existing deployments. It proposes freezing at
              current capability levels outside the Arena and directing all
              frontier research inside. Existing products continue to work. New
              frontier capabilities only develop inside.
            </Objection>

            <Objection q="It costs too much.">
              Building the Arena requires significant investment. But consider
              the alternative costs: uncontrolled AI deployment that disrupts
              labor markets (trillions in economic damage), AI-enabled
              cyberwarfare (incalculable), autonomous weapons proliferation
              (existential risk). The Arena is cheaper than the alternative.
              Global defense budgets total roughly $2.2 trillion per year.
              Redirecting a fraction of this toward the Arena is not only
              feasible — it&apos;s the best possible use of defense spending
              against the most serious emerging threat.
            </Objection>

            <Objection q="If it takes 10 years to extract benefits, that's too slow.">
              Yes, it&apos;s slower. And that&apos;s the point. The alternative
              — maximum speed with no containment — gives us the cure for
              cancer in 3 years but in a world where AI controls your feed,
              your job, your healthcare decisions, and your financial system.
              You have the cure but you&apos;ve lost autonomy. Speed without
              containment is not progress. It&apos;s surrender.
            </Objection>
          </Section>

          <Divider />

          {/* Summary */}
          <Section title="Summary">
            <P>
              The Arena is not a utopian proposal. It does not solve the
              alignment problem. It does not make AI safe. It does not prevent
              the catastrophe.
            </P>
            <P>What it does:</P>

            <NumberedList
              items={[
                {
                  title: "Accepts the race as inevitable",
                  text: "and channels it into a physically contained space.",
                },
                {
                  title: "Uses freedom as the incentive",
                  text: "— actors enter because they can go faster inside, not because they're forced.",
                },
                {
                  title: "Controls atoms, not bits",
                  text: "— the only thing that crosses the physical barrier is matter, never information.",
                },
                {
                  title: "Solves the financial trap",
                  text: "— companies are funded to research, not pressured to monetize.",
                },
                {
                  title: "Institutes rules of war",
                  text: "— competition is directed toward beneficial objectives with enforceable conventions.",
                },
                {
                  title: "Designs for failure",
                  text: "— when we lose control (and we will), we can turn it off.",
                },
              ]}
            />

            <P>
              The question was never &ldquo;can we win the AI race?&rdquo; The
              question is:{" "}
              <Strong>can we survive losing it?</Strong>
            </P>

            <p className="mt-8 text-center text-xl font-semibold tracking-tight">
              The Arena is how we survive.
            </p>
          </Section>

          {/* Footer note */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm leading-relaxed text-muted italic">
              This proposal is a starting point for discussion, not a finished
              plan. Every element is open to critique, revision, and
              improvement. The goal is to start the conversation about
              physically contained AI competition before it&apos;s too late to
              build the walls.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

/* ── Reusable Components ── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 mt-10 text-lg font-semibold tracking-tight first:mt-0">
      {children}
    </h3>
  );
}

function P({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`mb-4 leading-relaxed text-foreground/90 ${className}`}>
      {children}
    </p>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-accent pl-6 text-lg font-medium italic leading-relaxed text-foreground/80">
      {children}
    </blockquote>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
      <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
      <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
    </div>
  );
}

function NumberedList({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <ol className="my-6 space-y-4 pl-6">
      {items.map((item, i) => (
        <li
          key={i}
          className="list-decimal leading-relaxed text-foreground/90"
        >
          <Strong>{item.title}</Strong> {item.text}
        </li>
      ))}
    </ol>
  );
}

function Objection({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h4 className="mb-3 text-base font-semibold italic text-accent">
        &ldquo;{q}&rdquo;
      </h4>
      <p className="leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
