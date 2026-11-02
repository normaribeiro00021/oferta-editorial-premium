// Pure helpers for the urgency bar countdown (kept separate so they can be tested).

/** End of the promo: the fixed date's last second, or the end of `now`'s day when no date is set. */
export function getDeadline(now: Date, fixedEnd: string | null): Date {
  if (fixedEnd) {
    const [y, m, d] = fixedEnd.split("-").map(Number);
    return new Date(y, m - 1, d, 23, 59, 59, 999);
  }
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
}

export function formatDayMonth(date: Date): string {
  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`;
}

/** Remaining time as [hh, mm, ss]; hours can exceed 24 for fixed dates. Never negative. */
export function remaining(now: Date, deadline: Date): [string, string, string] {
  const total = Math.max(0, Math.floor((deadline.getTime() - now.getTime()) / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")) as [string, string, string];
}
