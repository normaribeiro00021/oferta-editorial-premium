import { describe, expect, it } from "vitest";
import { formatDayMonth, getDeadline, remaining } from "@/components/sales/urgency";

describe("Urgency bar deadline", () => {
  it("rolls to the end of the current day when no fixed date is set", () => {
    const now = new Date(2026, 10, 2, 14, 29, 0);
    const d = getDeadline(now, null);
    expect(formatDayMonth(d)).toBe("02/11");
    expect(remaining(now, d)).toEqual(["09", "30", "59"]);
  });

  it("moves to the next date when the day changes", () => {
    const d = getDeadline(new Date(2026, 10, 3, 0, 0, 1), null);
    expect(formatDayMonth(d)).toBe("03/11");
  });

  it("uses the fixed end date when one is set", () => {
    const d = getDeadline(new Date(2026, 10, 2, 12, 0, 0), "2026-11-30");
    expect(formatDayMonth(d)).toBe("30/11");
  });

  it("never shows a negative countdown after the fixed date passes", () => {
    const d = getDeadline(new Date(2026, 11, 5), "2026-11-30");
    expect(remaining(new Date(2026, 11, 5), d)).toEqual(["00", "00", "00"]);
  });
});
