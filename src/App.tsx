import { useState } from "react";

const GOAL = 1500;
const RAISED_START = 0;

export default function App() {
  const [message, setMessage] = useState("");
  const [raised] = useState(RAISED_START);

  const pct = Math.min((raised / GOAL) * 100, 100);
  const remaining = GOAL - raised;

  const handleClick = (amount: number) => {
    setMessage(
      amount <= 5
        ? "Thank you. Genuinely."
        : amount <= 15
          ? "That means more than you know."
          : "I don't have words. Thank you."
    );

    setTimeout(() => {
      if (amount === 3)
        window.location.href = "https://buy.stripe.com/cNibJ24Kr0b4beA0dH18c01";
      else if (amount === 5)
        window.location.href = "https://buy.stripe.com/dRm28s4KraPI4Qc0dH18c00";
      else if (amount === 10)
        window.location.href = "https://buy.stripe.com/6oU28s6Sz8HA0zWgcF18c02";
      else if (amount === 15)
        window.location.href = "https://buy.stripe.com/3cI00ka4L7DwdmI3pT18c03";
      else if (amount === 25)
        window.location.href = "https://buy.stripe.com/cNi3cwccT1f8ciE8Kd18c04";
    }, 800);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-10">
      {/* ── Urgency ── */}
      <div className="text-center mb-6 animate-[fadeIn_0.5s_ease_both]">
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-full">
          🚨 My car broke down. I can't get to work without it.
        </span>
      </div>

      {/* ── Hero ── */}
      <section className="text-center mb-10 sm:mb-14 animate-[fadeUp_0.6s_ease_both]">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-green-500 to-cyan-500 flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-5 shadow-[0_0_24px_rgba(34,197,94,0.25)]">
          🎓
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.15] mb-4 text-white">
          I finished college.
          <br />
          <span className="gradient-text text-xl sm:text-2xl md:text-3xl">
            Now everything is falling apart.
          </span>
        </h1>
        <p className="text-sm sm:text-base max-w-lg mx-auto text-zinc-400 leading-relaxed">
          I have a degree, $20K in student loans, a minimum-wage retail job, and
          a car that just died. Without my car, I lose my job. Without my job, I
          lose everything. I need ${remaining.toLocaleString()} to keep going.
        </p>
      </section>

      {/* ── The spiral — loss framing ── */}
      <section className="mb-10 sm:mb-14 animate-[fadeUp_0.6s_ease_0.1s_both]">
        <div className="glass-card rounded-2xl p-5 sm:p-7">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-zinc-500 mb-5 text-center">
            How fast things unravel
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { icon: "🔧", text: "Car breaks down", highlight: false },
              { icon: "🚫", text: "Can't get to work", highlight: false },
              { icon: "💸", text: "Lose my only income", highlight: false },
              {
                icon: "📉",
                text: "Can't pay rent, loans, or food",
                highlight: true,
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                  step.highlight
                    ? "bg-red-500/8 border border-red-500/20"
                    : "bg-white/3 border border-white/6"
                }`}
              >
                <span className="text-lg">{step.icon}</span>
                <span
                  className={`text-sm sm:text-base ${
                    step.highlight
                      ? "text-red-400 font-semibold"
                      : "text-zinc-300"
                  }`}
                >
                  {step.text}
                </span>
                {i < 3 && (
                  <span className="ml-auto text-zinc-600 text-xs">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-zinc-500 mt-5">
            One car repair is the difference between staying afloat and going
            under.
          </p>
        </div>
      </section>

      {/* ── Progress ── */}
      <section className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 mb-10 sm:mb-14 animate-[fadeUp_0.6s_ease_0.15s_both] shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-baseline mb-1">
          <span className="text-2xl sm:text-3xl font-extrabold text-green-400 tracking-tight">
            ${raised.toLocaleString()}
          </span>
          <span className="text-xs sm:text-sm text-zinc-500">
            of ${GOAL.toLocaleString()} needed
          </span>
        </div>
        <p className="text-xs text-zinc-500 mb-4">
          <span className="text-white font-semibold">
            ${remaining.toLocaleString()}
          </span>{" "}
          more and I can fix my car and keep my job
        </p>
        <div className="w-full h-3 sm:h-3.5 bg-white/8 rounded-full overflow-hidden mb-4">
          <div
            className="progress-glow h-full bg-linear-to-r from-green-500 via-emerald-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] sm:text-xs text-zinc-500">
          <span>Every dollar counts</span>
          <span className="font-semibold text-green-400">
            {Math.round(pct)}% there
          </span>
        </div>
      </section>

      {/* ── Donation tiers — $5 highlighted ── */}
      <section className="mb-4 animate-[fadeUp_0.6s_ease_0.2s_both]">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
          Anything helps. Really.
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 text-center mb-6">
          The average gift is $5. That's all it takes.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {[
            {
              amount: 3,
              emoji: "☕",
              label: "$3",
              desc: "Less than a coffee — but it adds up",
              popular: false,
            },
            {
              amount: 5,
              emoji: "⛽",
              label: "$5",
              desc: "A gallon of gas to get to work",
              popular: true,
            },
            {
              amount: 10,
              emoji: "🔧",
              label: "$10",
              desc: "Toward the repair I can't afford",
              popular: false,
            },
            {
              amount: 15,
              emoji: "🛒",
              label: "$15",
              desc: "A few days of groceries",
              popular: false,
            },
            {
              amount: 25,
              emoji: "💛",
              label: "$25",
              desc: "A week of breathing room",
              popular: false,
            },
          ].map((tier) => (
            <button
              key={tier.amount}
              className={`group glass-card relative flex flex-col items-center gap-2 rounded-2xl px-3 py-5 sm:py-6 cursor-pointer transition-all duration-300 text-zinc-200 hover:border-green-500/50 hover:bg-green-500/8 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(34,197,94,0.15)] active:scale-[0.97] ${
                tier.popular
                  ? "border-green-500/40! bg-green-500/6! ring-1 ring-green-500/20"
                  : ""
              }`}
              onClick={() => handleClick(tier.amount)}
            >
              {tier.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-green-500 text-black px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  Most given
                </span>
              )}
              <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-125">
                {tier.emoji}
              </span>
              <span className="text-lg sm:text-xl font-bold text-white">
                {tier.label}
              </span>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 text-center leading-snug px-1">
                {tier.desc}
              </span>
            </button>
          ))}
        </div>
      </section>

      {message && (
        <p className="text-center text-sm sm:text-base font-semibold text-green-400 my-5 animate-[fadeUp_0.4s_ease]">
          {message}
        </p>
      )}

      {/* ── Story ── */}
      <section className="my-10 sm:my-14 animate-[fadeUp_0.6s_ease_0.3s_both]">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-5 text-center">
          How I got here
        </h2>
        <div className="glass-card border-l-[3px] border-l-green-500 rounded-r-2xl p-5 sm:p-7 space-y-4">
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            I did everything I was told to do. Went to college, studied hard,
            graduated. I thought a degree would open doors. Instead, I graduated
            into a job market that doesn't want me — at least not yet.
          </p>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            While I keep applying to jobs in my field, I work retail to survive.
            Minimum wage. It barely covers rent and the minimum on my student
            loans. There's nothing left over. No savings. No safety net.
          </p>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Then my car broke down. And that's the only way I get to work.
            Without it, I lose the one thing keeping me above water. The repair
            costs more than I have. I've already borrowed what I can from the
            people around me.
          </p>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
            I'm not asking you to fix my life. I'm asking for help surviving the
            next few weeks while I figure this out. $5 from enough people and I
            can fix my car, keep my job, and keep going.
          </p>
        </div>
      </section>

      {/* ── Where the money goes ── */}
      <section className="mb-10 sm:mb-14 animate-[fadeUp_0.6s_ease_0.35s_both]">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-5 text-center">
          Where every dollar goes
        </h2>
        <div className="flex flex-col gap-2.5">
          {[
            {
              emoji: "🔧",
              item: "Car repair (transmission / engine work)",
              cost: "$800–1,200",
              primary: true,
            },
            {
              emoji: "⛽",
              item: "Gas to get to work",
              cost: "$60/week",
              primary: false,
            },
            {
              emoji: "🛒",
              item: "Groceries",
              cost: "$40/week",
              primary: false,
            },
            {
              emoji: "💊",
              item: "Anything left → loan minimums",
              cost: "whatever's left",
              primary: false,
            },
          ].map((row) => (
            <div
              key={row.item}
              className={`glass-card rounded-xl px-4 py-3 flex items-center justify-between ${
                row.primary ? "border-green-500/20! bg-green-500/4!" : ""
              }`}
            >
              <span className="text-sm text-zinc-300">
                <span className="mr-2">{row.emoji}</span>
                {row.item}
              </span>
              <span
                className={`text-sm font-semibold whitespace-nowrap ml-3 ${
                  row.primary ? "text-green-400" : "text-zinc-500"
                }`}
              >
                {row.cost}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-600 mt-3">
          The car repair is the priority. Everything else is survival.
        </p>
      </section>

      {/* ── The reality — numbers that hit ── */}
      <section className="mb-10 sm:mb-14 animate-[fadeUp_0.6s_ease_0.38s_both]">
        <div className="glass-card rounded-2xl p-5 sm:p-7">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-zinc-500 mb-4 text-center">
            My monthly reality
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 text-center">
              <p className="text-xs text-zinc-500 mb-1">Take-home pay</p>
              <p className="text-lg sm:text-xl font-bold text-white">~$1,600</p>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 text-center">
              <p className="text-xs text-zinc-500 mb-1">Rent</p>
              <p className="text-lg sm:text-xl font-bold text-red-400">−$950</p>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 text-center">
              <p className="text-xs text-zinc-500 mb-1">Loan minimums</p>
              <p className="text-lg sm:text-xl font-bold text-red-400">−$280</p>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 text-center">
              <p className="text-xs text-zinc-500 mb-1">
                Left for everything else
              </p>
              <p className="text-lg sm:text-xl font-bold text-amber-400">
                $370
              </p>
            </div>
          </div>
          <p className="text-center text-xs text-zinc-500 mt-4">
            $370 for food, gas, phone, and everything else. There's no room for
            a $1,000 car repair.
          </p>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="flex justify-center gap-4 sm:gap-8 flex-wrap mb-10 sm:mb-14 py-5 sm:py-6 border-y border-white/6 animate-[fadeIn_0.6s_ease_0.5s_both]">
        {[
          { icon: "🔒", text: "Secure via Stripe" },
          { icon: "🎯", text: "100% goes to me directly" },
          { icon: "🙏", text: "I'll pay it forward" },
        ].map((badge) => (
          <div
            key={badge.text}
            className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-500"
          >
            <span className="text-base sm:text-lg">{badge.icon}</span>
            <span>{badge.text}</span>
          </div>
        ))}
      </section>

      {/* ── Final CTA ── */}
      <section className="text-center mb-10 sm:mb-14 animate-[fadeUp_0.6s_ease_0.6s_both]">
        <p className="text-base sm:text-lg text-zinc-300 mb-2 font-medium">
          You read all of that.
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          Most people would've kept scrolling.
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 mb-8 max-w-sm mx-auto">
          $5 won't change your day.
          <br />
          But it might save mine.
        </p>
        <button
          className="cta-pulse bg-linear-to-br from-green-500 to-emerald-600 text-white text-base sm:text-lg font-bold border-none rounded-2xl px-10 sm:px-14 py-4 sm:py-5 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(34,197,94,0.45)] active:scale-[0.97]"
          onClick={() => handleClick(5)}
        >
          Give $5 — Help Me Keep Going
        </button>
        <p className="text-[11px] text-zinc-600 mt-4">
          No account needed. Secure checkout. Takes 10 seconds.
        </p>
      </section>

      <footer className="text-center pt-6 sm:pt-8 pb-4 border-t border-white/6">
        <p className="text-[11px] sm:text-xs text-zinc-600">
          Thank you for even reading this. It means more than you think. 💛
        </p>
      </footer>
    </div>
  );
}
