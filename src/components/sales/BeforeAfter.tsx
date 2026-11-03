import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { TextPage } from "./Visuals";
import { INSIDE_PAGES } from "./Mockups";

// Drag-to-compare slider (pointer events, no library). touch-action: pan-y keeps vertical page scroll.
export function BeforeAfterSlider() {
  const [pos, setPos] = useState(55);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-label="Arraste para comparar a apostila comum com o caso visual"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onKeyDown={onKey}
      onPointerDown={(e: PointerEvent<HTMLDivElement>) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      style={{ touchAction: "pan-y" }}
      className="relative mx-auto aspect-[1054/1492] w-full max-w-[20rem] bg-background cursor-ew-resize select-none overflow-hidden rounded-2xl shadow-card ring-1 ring-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* DEPOIS (fundo) */}
      <img src={INSIDE_PAGES[1]!.l} width={640} height={906} alt="Caso 01 do material: O silêncio depois da mensagem" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" draggable={false} />

      {/* ANTES (recortado) */}
      <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <TextPage />
      </div>

      {/* Alça */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-coral"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-coral font-display text-[15px] font-extrabold text-navy shadow-cta">
          ‹›
        </span>
      </div>
    </div>
  );
}
