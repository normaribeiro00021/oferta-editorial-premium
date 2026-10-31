import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/*
 * Lightweight CSS placeholders for product imagery (zero image bytes).
 * Swap each one for a real <img> when the final artwork is ready.
 */

function Person({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="size-6 rounded-full bg-navy" />
      <div className="mt-0.5 h-8 w-10 rounded-t-full bg-navy/85" />
    </div>
  );
}

function Scene({ thought, tone = "teal" }: { thought: string; tone?: "teal" | "coral" }) {
  return (
    <div
      className={cn(
        "relative flex h-[46%] items-end justify-center gap-6 overflow-hidden rounded-lg px-3 pb-2",
        tone === "teal" ? "bg-teal-soft" : "bg-coral-soft",
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 top-2 max-w-[80%] -translate-x-1/2 rounded-2xl bg-background px-2 py-1 text-center font-sans text-[8px] font-medium leading-tight text-navy shadow-card",
        )}
      >
        “{thought}”
      </div>
      <Person />
      <Person className="opacity-60" />
    </div>
  );
}

export function CaseSheet({
  n,
  title,
  block,
  thought = "Talvez ele vá me abandonar…",
  tone = "teal",
  className,
}: {
  n: string;
  title: string;
  block: string;
  thought?: string;
  tone?: "teal" | "coral" | undefined;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex aspect-[3/4] w-52 shrink-0 flex-col gap-2 rounded-xl bg-background p-3 shadow-card",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="rounded bg-navy px-1.5 py-0.5 font-display text-[8px] font-extrabold tracking-[0.15em] text-on-dark">
          CASO {n}
        </span>
        <span className="font-sans text-[7px] font-medium uppercase tracking-wider text-muted-foreground">
          {block}
        </span>
      </div>
      <p className="font-display text-[11px] font-extrabold leading-tight text-navy">{title}</p>
      <Scene thought={thought} tone={tone} />
      <div className="grid grid-cols-2 gap-1">
        {["Situação", "Esquema", "Emoções", "Modo"].map((l, i) => (
          <div key={l} className="rounded bg-muted px-1.5 py-1">
            <p
              className={cn(
                "font-display text-[7px] font-extrabold uppercase tracking-wider",
                i % 2 === 0 ? "text-teal" : "text-coral",
              )}
            >
              {l}
            </p>
            <div className="mt-0.5 h-1 w-4/5 rounded bg-border" />
            <div className="mt-0.5 h-1 w-3/5 rounded bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroMock() {
  return (
    <div className="relative mx-auto flex h-72 w-full max-w-xs items-center justify-center">
      <CaseSheet
        n="09"
        title="Abandono × Privação Emocional"
        block="Bloco 02"
        tone="coral"
        thought="Ninguém percebe o que eu sinto"
        className="absolute left-0 top-6 w-40 -rotate-8 opacity-90"
      />
      <CaseSheet
        n="25"
        title="A Criança Vulnerável diante do afastamento"
        block="Bloco 04"
        thought="E se eu ficar sozinha?"
        className="absolute right-0 top-6 w-40 rotate-8 opacity-90"
      />
      <CaseSheet
        n="01"
        title="O silêncio depois da mensagem"
        block="Bloco 01"
        className="relative z-10 w-48"
      />
    </div>
  );
}

function SheetFrame({ title, tag, children }: { title: string; tag: string; children: ReactNode }) {
  return (
    <div className="flex aspect-[3/4] w-52 shrink-0 flex-col gap-2 rounded-xl bg-background p-3 shadow-card">
      <span className="w-fit rounded bg-teal px-1.5 py-0.5 font-display text-[8px] font-extrabold uppercase tracking-[0.15em] text-on-dark">
        {tag}
      </span>
      <p className="font-display text-[11px] font-extrabold leading-tight text-navy">{title}</p>
      <div className="flex flex-1 flex-col gap-1.5">{children}</div>
    </div>
  );
}

export function SampleFlow() {
  const steps = ["Situação ativadora", "Esquema", "Emoções e crenças", "Modo e enfrentamento", "Consequências"];
  return (
    <SheetFrame tag="Diagrama" title="Leitura Visual de Padrões">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-1.5">
          <span className="grid size-4 shrink-0 place-items-center rounded-full bg-navy font-display text-[7px] font-extrabold text-on-dark">
            {i + 1}
          </span>
          <span className="flex-1 rounded bg-teal-soft px-1.5 py-1 font-sans text-[8px] font-medium text-navy">
            {s}
          </span>
        </div>
      ))}
    </SheetFrame>
  );
}

export function SampleCompare() {
  return (
    <SheetFrame tag="Lado a lado" title="Defectividade × Fracasso">
      <div className="grid flex-1 grid-cols-2 gap-1.5">
        {[
          { t: "Defectividade", c: "bg-teal-soft", q: "“Há algo errado em mim.”" },
          { t: "Fracasso", c: "bg-coral-soft", q: "“Não sou tão capaz.”" },
        ].map((x) => (
          <div key={x.t} className={cn("flex flex-col gap-1 rounded-lg p-1.5", x.c)}>
            <p className="font-display text-[8px] font-extrabold text-navy">{x.t}</p>
            <p className="font-sans text-[7px] italic text-navy/80">{x.q}</p>
            <div className="mt-auto h-1 w-full rounded bg-background" />
            <div className="h-1 w-3/4 rounded bg-background" />
            <div className="h-1 w-1/2 rounded bg-background" />
          </div>
        ))}
      </div>
    </SheetFrame>
  );
}

export function SampleModes() {
  const modes = ["Criança Vulnerável", "Criança Zangada", "Pai Exigente", "Pai Punitivo", "Protetor Desligado", "Adulto Saudável"];
  return (
    <SheetFrame tag="Modos" title="Modos esquemáticos em ação">
      <div className="grid grid-cols-2 gap-1">
        {modes.map((m, i) => (
          <div
            key={m}
            className={cn(
              "rounded-md px-1.5 py-2 text-center font-sans text-[7px] font-medium text-navy",
              i === 5 ? "bg-teal text-on-dark" : i % 2 ? "bg-coral-soft" : "bg-teal-soft",
            )}
          >
            {m}
          </div>
        ))}
      </div>
    </SheetFrame>
  );
}

export function SampleMap() {
  return (
    <SheetFrame tag="Mapa" title="Domínio 1 · Desconexão e Rejeição">
      <div className="relative mx-auto mt-1 grid size-24 place-items-center rounded-full bg-navy">
        <span className="px-2 text-center font-display text-[7px] font-extrabold text-on-dark">
          Necessidade: vínculo seguro
        </span>
      </div>
      <div className="mt-1 flex flex-wrap justify-center gap-1">
        {["Abandono", "Desconfiança", "Privação", "Defectividade", "Isolamento"].map((s) => (
          <span key={s} className="rounded-full bg-teal-soft px-1.5 py-0.5 font-sans text-[7px] font-medium text-navy">
            {s}
          </span>
        ))}
      </div>
    </SheetFrame>
  );
}

export function BonusArt({ icon, n, count }: { icon: string; n: number; count: string }) {
  return (
    <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-xl bg-navy">
      <div className="absolute -right-6 -top-6 size-24 rounded-full bg-teal/40" />
      <div className="absolute -bottom-8 -left-8 size-28 rounded-full bg-coral/30" />
      <div className="relative flex flex-col items-center gap-1">
        <span className="text-4xl" aria-hidden>
          {icon}
        </span>
        <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-dark">
          Bônus {String(n).padStart(2, "0")}
        </span>
        <span className="font-sans text-[10px] text-on-dark-muted">{count}</span>
      </div>
    </div>
  );
}

export function GuaranteeSeal() {
  return (
    <div className="relative mx-auto grid size-36 place-items-center rounded-full bg-teal shadow-card">
      <div className="absolute inset-2 rounded-full border-2 border-dashed border-on-dark/50" />
      <div className="relative text-center">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-dark">Garantia</p>
        <p className="font-display text-5xl font-extrabold leading-none text-on-dark">30</p>
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-dark">dias</p>
      </div>
    </div>
  );
}
