import { describe, expect, it } from "vitest";
import { BONUSES, PLANS, PURCHASE_FEED } from "@/components/sales/content";

describe("Offer rules", () => {
  it("Plano Básico costs R$ 9,90 with anchor R$ 29,90", () => {
    expect(PLANS.basico.price).toBe("9,90");
    expect(PLANS.basico.anchor).toBe("R$ 29,90");
  });

  it("Plano Completo costs R$ 17,90 with anchor R$ 59,90", () => {
    expect(PLANS.completo.price).toBe("17,90");
    expect(PLANS.completo.anchor).toBe("R$ 59,90");
  });

  it("Plano Completo includes 4 bonuses totaling 25 extra materials", () => {
    expect(BONUSES).toHaveLength(4);
    const total = BONUSES.reduce((sum, b) => sum + Number.parseInt(b.count, 10), 0);
    expect(total).toBe(25);
  });
});

describe("Purchase notifications", () => {
  it("only mention plans that exist in the offer", () => {
    const valid = [PLANS.basico.title, PLANS.completo.title];
    for (const p of PURCHASE_FEED) expect(valid).toContain(p.plan);
  });
});
