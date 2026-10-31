import { useEffect, useState } from "react";
import { PURCHASE_FEED } from "./content";

const FIRST_DELAY = 6000;
const VISIBLE_FOR = 4500;
const MIN_PAUSE = 9000;
const MAX_PAUSE = 15000;

// "Fulano de Cidade Y comprou o Plano X" — fades in, stays a few seconds, then pauses before the next one.
export function PurchaseToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    let timer: ReturnType<typeof setTimeout>;
    let i = 0;
    const show = () => {
      setIndex(i);
      setVisible(true);
      timer = setTimeout(hide, VISIBLE_FOR);
    };
    const hide = () => {
      setVisible(false);
      i = (i + 1) % PURCHASE_FEED.length;
      timer = setTimeout(show, MIN_PAUSE + Math.random() * (MAX_PAUSE - MIN_PAUSE));
    };
    timer = setTimeout(show, FIRST_DELAY);
    return () => clearTimeout(timer);
  }, [closed]);

  if (closed) return null;
  const p = PURCHASE_FEED[index];
  const initials = p.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-sm items-center gap-3 rounded-2xl border bg-card p-3 pr-2 shadow-card transition-all duration-700 ease-out motion-reduce:transition-opacity ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-teal font-display text-[13px] font-extrabold text-on-dark">
        {initials}
      </span>
      <p className="flex-1 text-[12.5px] leading-snug text-muted-foreground">
        <strong className="font-semibold text-navy">{p.name}</strong>, de {p.city} ({p.uf}), comprou o{" "}
        <strong className="font-semibold text-teal">{p.plan}</strong>
        <span className="mt-0.5 block text-[11px]">⚡ Acesso liberado no e-mail</span>
      </p>
      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="Fechar notificações"
        className="grid size-7 shrink-0 place-items-center self-start rounded-full text-[14px] text-muted-foreground"
      >
        ×
      </button>
    </div>
  );
}
