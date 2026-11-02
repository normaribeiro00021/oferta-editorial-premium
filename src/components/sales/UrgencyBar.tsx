import { useEffect, useState } from "react";
import { URGENCY_END_DATE, URGENCY_TEXT } from "./content";
import { formatDayMonth, getDeadline, remaining } from "./urgency";

// Sticky top bar: launch promo + bonuses valid until the date shown, with a live countdown.
// Date/time are filled after hydration (placeholders on the server) to avoid mismatches.
export function UrgencyBar() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const deadline = now ? getDeadline(now, URGENCY_END_DATE) : null;
  const isToday = !URGENCY_END_DATE;
  const dateLabel = deadline ? `${isToday ? "hoje, " : ""}${formatDayMonth(deadline)}` : "--/--";
  const [h, m, s] = now && deadline ? remaining(now, deadline) : ["--", "--", "--"];

  return (
    <a
      href="#oferta"
      className="sticky top-0 z-40 block overflow-hidden bg-urgency text-on-dark shadow-urgency"
      aria-label={`${URGENCY_TEXT} ${dateLabel}. Ver oferta`}
    >
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-shine bg-shine" aria-hidden />
      <div className="relative mx-auto flex max-w-md items-center gap-3 px-4 py-2">
        <span className="relative flex size-2.5 shrink-0" aria-hidden>
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-coral opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-coral" />
        </span>
        <p className="flex-1 text-[11.5px] font-medium leading-tight">
          {URGENCY_TEXT}{" "}
          <strong className="whitespace-nowrap font-display font-extrabold uppercase text-urgency-highlight">
            {dateLabel}
          </strong>
        </p>
        <div className="flex shrink-0 items-center gap-0.5 font-display tabular-nums" role="timer">
          {[h, m, s].map((v, i) => (
            <span key={i} className="flex items-center gap-0.5">
              <span className="min-w-[1.6rem] rounded-md bg-on-dark px-1 py-1 text-center text-[13px] font-extrabold leading-none text-navy">
                {v}
              </span>
              {i < 2 && <span className="text-[12px] font-extrabold text-urgency-highlight">:</span>}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
