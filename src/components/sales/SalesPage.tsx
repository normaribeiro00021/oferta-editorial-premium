import {
  BEFORE_AFTER,
  BLOCKS,
  BONUSES,
  CONFIRM_GRID,
  FAQ,
  FLOW_STEPS,
  IDEAL_FOR,
  MAIN_ITEMS,
  PLANS,
  THEMES,
  VALUE_ITEMS,
} from "./content";
import {
  CheckIcon,
  CtaButton,
  Divider,
  GiftIcon,
  Kicker,
  Marquee,
  Section,
  SectionTitle,
  TopicList,
} from "./Primitives";
import {
  BonusArt,
  CaseSheet,
  GuaranteeSeal,
  HeroMock,
  SampleCompare,
  SampleFlow,
  SampleMap,
  SampleModes,
} from "./Visuals";
import { BeforeAfterSlider } from "./BeforeAfter";
import { PurchaseToast } from "./PurchaseToast";

export function SalesPage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Hero />
      <Themes />
      <WhyValuable />
      <Pain />
      <BeforeAfter />
      <SampleCarousel />
      <IdealFor />
      <Deliverables />
      <Bonuses />
      <Offer />
      <Guarantee />
      <HowAccess />
      <Faq />
      <Footer />
      <PurchaseToast />
    </main>
  );
}

/* Antes × Depois */
function BeforeAfter() {
  return (
    <Section>
      <Kicker className="text-center">Antes × Depois</Kicker>
      <SectionTitle className="mt-3">Do texto corrido ao raciocínio visual</SectionTitle>
      <p className="mt-3 text-center text-[15px] leading-relaxed text-muted-foreground">
        O mesmo conteúdo, de dois jeitos. Arraste e veja a diferença entre a apostila comum e um caso visual.
      </p>
      <div className="mx-auto mt-7 flex max-w-[20rem] items-center justify-between">
        <span className="rounded-full bg-navy px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-on-dark">
          ← Antes
        </span>
        <span className="rounded-full bg-teal px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-on-dark">
          Depois →
        </span>
      </div>
      <div className="mt-3">
        <BeforeAfterSlider />
      </div>
      <p className="mt-3 text-center text-[12.5px] font-medium text-muted-foreground">↔ Arraste para comparar</p>

      <div className="mt-7 overflow-hidden rounded-2xl border bg-card">
        <div className="grid grid-cols-2">
          <p className="bg-muted px-3 py-2.5 text-center font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
            Material comum
          </p>
          <p className="bg-teal px-3 py-2.5 text-center font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-on-dark">
            40 Casos Visuais
          </p>
        </div>
        {BEFORE_AFTER.map((r) => (
          <div key={r.before} className="grid grid-cols-2 border-t">
            <p className="flex items-start gap-2 px-3 py-3 text-[13px] leading-snug text-muted-foreground">
              <span className="font-display font-extrabold text-coral" aria-hidden>
                ✕
              </span>
              {r.before}
            </p>
            <p className="flex items-start gap-2 border-l bg-teal-soft px-3 py-3 text-[13px] font-medium leading-snug text-navy">
              <CheckIcon className="size-4" />
              {r.after}
            </p>
          </div>
        ))}
      </div>
      <CtaButton className="mt-8">Quero estudar pelo visual</CtaButton>
    </Section>
  );
}

/* DOBRA 1 — Promessa */
function Hero() {
  return (
    <Section className="bg-paper pb-12 pt-10">
      <div className="text-center">
        <Kicker>Psicologia · Terapia do Esquema</Kicker>
        <h1 className="mt-4 text-[1.85rem] font-extrabold leading-[1.1] text-navy">
          <span className="text-teal">40 Casos Visuais</span> de Terapia do Esquema para entender esquemas, modos e
          padrões emocionais <span className="text-coral">na prática</span>
        </h1>
        <Divider className="mt-5" />
      </div>

      <div className="mt-6">
        <HeroMock />
      </div>

      <p className="mt-6 text-center text-[15px] leading-relaxed text-muted-foreground">
        Um material ilustrado para estudantes de Psicologia e profissionais em início de formação. Cada caso segue o{" "}
        <strong className="font-semibold text-navy">Método de Leitura Visual de Padrões</strong>: uma cena do cotidiano
        organizada em situação, esquema, emoções, modos e consequências. Teoria conectada ao raciocínio, sem depender só
        de resumos.
      </p>

      <CtaButton className="mt-7" />
      <p className="mt-3 text-center text-[13px] text-muted-foreground">
        ⚡ Acesso imediato · Estude pelo celular, tablet ou computador
      </p>
    </Section>
  );
}

/* DOBRA 2 — Temas cobertos */
function Themes() {
  const sheets = [
    { n: "01", t: "O silêncio depois da mensagem", b: "Bloco 01", th: "Talvez ele vá me abandonar…" },
    { n: "12", t: "Busca de Aprovação × Padrões Inflexíveis", b: "Bloco 02", th: "Preciso que gostem de mim", tone: "coral" as const },
    { n: "17", t: "Concordar para evitar conflitos", b: "Bloco 03", th: "Melhor não discordar…" },
    { n: "34", t: "Perfeccionismo e medo de críticas no trabalho", b: "Bloco 05", th: "Se errar, vão perceber", tone: "coral" as const },
  ];
  return (
    <Section>
      <SectionTitle>O que você vai encontrar nos 40 casos</SectionTitle>
      <Marquee>
        {sheets.map((s) => (
          <CaseSheet key={s.n} n={s.n} title={s.t} block={s.b} thought={s.th} tone={s.tone} />
        ))}
      </Marquee>
      <p className="mt-2 text-center text-[15px] leading-relaxed text-muted-foreground">
        Os 18 esquemas de Young distribuídos em cinco blocos progressivos, com situações que você reconhece da vida real:
      </p>
      <TopicList items={THEMES} className="mt-6" />
      <CtaButton className="mt-8" />
    </Section>
  );
}

/* DOBRA 3 — Por que é valioso */
function WhyValuable() {
  return (
    <Section className="bg-teal-soft">
      <Kicker className="text-center">Por que funciona</Kicker>
      <SectionTitle className="mt-3">Por que esse material vale cada página</SectionTitle>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {VALUE_ITEMS.map((v) => (
          <div key={v.title} className="rounded-xl bg-card p-4 shadow-card">
            <span className="text-2xl" aria-hidden>
              {v.emoji}
            </span>
            <p className="mt-2 font-display text-[14px] font-extrabold leading-tight text-navy">{v.title}</p>
            <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* DOBRA 4 — Dor + mecanismo */
function Pain() {
  return (
    <section className="bg-navy">
      <div className="bg-coral px-5 py-4 text-center">
        <p className="mx-auto max-w-md font-display text-[15px] font-extrabold uppercase leading-snug tracking-wide text-navy">
          Você conhece os 18 esquemas… mas trava quando precisa reconhecê-los em um caso?
        </p>
      </div>
      <div className="px-5 py-12">
        <div className="mx-auto max-w-md">
          <p className="text-center text-[15px] leading-relaxed text-on-dark-muted">
            Slides, resumos e definições ensinam o nome de cada esquema. Mas, quando surge uma situação concreta, tudo
            parece se misturar: é abandono ou privação? É um modo ou um estilo de enfrentamento?
          </p>

          <div className="mt-8 rounded-2xl bg-card p-6 shadow-card">
            <Kicker>Conhecimento fragmentado</Kicker>
            <h3 className="mt-2 text-[1.35rem] font-extrabold leading-tight text-navy">
              Talvez o problema não seja falta de estudo, mas a forma como os conceitos estão conectados.
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
              Com a <strong className="font-semibold text-navy">Leitura Visual de Padrões</strong>, cada caso mostra o
              raciocínio em etapas. Veja um exemplo:
            </p>

            <ol className="mt-5 grid gap-2">
              {FLOW_STEPS.map((s, i) => (
                <li key={s.label} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-teal font-display text-xs font-extrabold text-on-dark">
                      {i + 1}
                    </span>
                    {i < FLOW_STEPS.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-3">
                    <p className="font-display text-[13.5px] font-extrabold text-navy">{s.label}</p>
                    <p className="text-[13px] leading-snug text-muted-foreground">{s.example}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="rounded-lg bg-muted p-3 text-[12px] leading-snug text-muted-foreground">
              Exemplo ilustrativo, não uma interpretação clínica definitiva. Cada caso traz hipóteses alternativas para
              evitar leituras automáticas.
            </p>
            <CtaButton className="mt-6">Quero estudar assim</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* DOBRA 5 — Amostra do conteúdo */
function SampleCarousel() {
  return (
    <Section className="bg-paper pb-10">
      <Kicker className="text-center">Espie por dentro</Kicker>
      <SectionTitle className="mt-3">Diagramas, comparações e mapas em cada ficha</SectionTitle>
      <Marquee reverse>
        {[<SampleFlow key="f" />, <SampleCompare key="c" />, <SampleModes key="m" />, <SampleMap key="p" />]}
      </Marquee>
    </Section>
  );
}

/* DOBRA 6 — Ideal para você */
function IdealFor() {
  return (
    <Section>
      <SectionTitle>Ideal para você que deseja</SectionTitle>
      <TopicList items={IDEAL_FOR} className="mt-8" />
      <CtaButton className="mt-8" />
    </Section>
  );
}

/* DOBRA 7 — Tudo o que você vai receber */
function Deliverables() {
  return (
    <Section className="bg-teal-soft">
      <div className="rounded-2xl bg-card p-6 shadow-card">
        <div className="flex justify-center">
          <span className="rounded-full bg-teal px-3 py-1 font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-on-dark">
            ⚡ Acesso imediato
          </span>
        </div>
        <h2 className="mt-4 text-center text-[1.45rem] font-extrabold leading-tight text-navy">
          Tudo o que você vai receber
        </h2>
        <div className="mt-4">
          <HeroMock />
        </div>
        <ul className="mt-4 grid gap-2.5">
          {MAIN_ITEMS.map((i) => (
            <li key={i} className="flex gap-2.5 text-[14px] leading-snug text-navy">
              <CheckIcon />
              <span>{i}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {CONFIRM_GRID.map((c) => (
            <div key={c.label} className="rounded-lg bg-muted px-2 py-3 text-center">
              <span className="text-xl" aria-hidden>
                {c.emoji}
              </span>
              <p className="mt-1 text-[11px] font-medium leading-tight text-navy">{c.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="font-display text-[13px] font-extrabold uppercase tracking-[0.18em] text-teal">
            Os 5 blocos · toque para ver os casos
          </p>
          <div className="mt-3 grid gap-2">
            {BLOCKS.map((b) => (
              <details key={b.n} className="group rounded-xl border bg-background">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-navy font-display text-xs font-extrabold text-on-dark">
                    {b.n}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[14px] font-extrabold leading-tight text-navy">
                      {b.title}
                    </span>
                    <span className="text-[12px] text-muted-foreground">{b.range}</span>
                  </span>
                  <span className="font-display text-lg text-teal transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t px-3 pb-3 pt-2">
                  <p className="text-[12.5px] italic leading-snug text-muted-foreground">{b.fn}</p>
                  <ol className="mt-2 grid gap-1">
                    {b.cases.map((c, i) => (
                      <li key={c} className="flex gap-2 text-[13px] text-navy">
                        <span className="w-6 shrink-0 font-display font-extrabold text-coral">
                          {String(Number(b.n) * 8 - 7 + i).padStart(2, "0")}
                        </span>
                        {c}
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stars() {
  return (
    <span className="text-[13px] tracking-wider text-coral" aria-label="5 estrelas">
      ★★★★★
    </span>
  );
}

/* DOBRA 8 — Bônus */
function Bonuses() {
  return (
    <Section>
      <div className="flex justify-center">
        <span className="rounded-full bg-coral px-3 py-1 font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-navy">
          🎁 4 bônus exclusivos
        </span>
      </div>
      <SectionTitle className="mt-4">Bônus exclusivos do Plano Completo</SectionTitle>
      <p className="mt-3 text-center text-[14.5px] text-muted-foreground">
        25 pranchas e fichas extras para consultar, comparar e treinar o raciocínio.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {BONUSES.map((b) => (
          <div key={b.n} className="flex flex-col rounded-xl border bg-card p-3 shadow-card">
            <Stars />
            <div className="mt-2">
              <BonusArt icon={b.icon} n={b.n} count={b.count} />
            </div>
            <span className="mt-3 w-fit rounded bg-teal px-1.5 py-0.5 font-display text-[10px] font-extrabold uppercase tracking-[0.15em] text-on-dark">
              Bônus Nº {b.n}
            </span>
            <p className="mt-2 font-display text-[13.5px] font-extrabold leading-tight text-navy">{b.title}</p>
            <p className="mt-1 flex-1 text-[12px] leading-snug text-muted-foreground">{b.desc}</p>
            <p className="mt-3 text-[13px]">
              <span className="text-muted-foreground line-through">{b.from}</span>{" "}
              <span className="font-display font-extrabold text-teal">GRÁTIS</span>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* DOBRA 9 — Oferta (âncora) */
function Offer() {
  const { basico, completo } = PLANS;
  return (
    <Section id="oferta" className="scroll-mt-4 bg-paper">
      <Kicker className="text-center text-coral">Condição especial de lançamento</Kicker>
      <SectionTitle className="mt-3">Garanta hoje os 40 casos pelo menor preço</SectionTitle>
      <p className="mt-2 text-center text-[15px] text-muted-foreground">Escolha a opção ideal para você</p>

      {/* Básico — always first */}
      <div className="mt-8 rounded-2xl border bg-card p-6">
        <p className="font-display text-[1.25rem] font-extrabold text-navy">{basico.title}</p>
        <p className="font-display text-[14px] font-semibold text-teal">{basico.subtitle}</p>
        <p className="mt-2 text-[13.5px] leading-snug text-muted-foreground">{basico.desc}</p>
        <ul className="mt-4 grid gap-2.5">
          {MAIN_ITEMS.map((i) => (
            <li key={i} className="flex gap-2.5 text-[13.5px] leading-snug text-navy">
              <CheckIcon />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 text-center">
          <p className="text-[14px] text-muted-foreground">
            De <span className="line-through">{basico.anchor}</span> por
          </p>
          <p className="font-display text-[2.6rem] font-extrabold leading-none text-navy">
            <span className="text-lg align-top">R$</span> {basico.price}
          </p>
          <p className="mt-1 text-[12.5px] text-muted-foreground">Pagamento único · Produto digital</p>
        </div>
        <a
          href={basico.href}
          className="mt-5 flex min-h-13 w-full items-center justify-center rounded-xl border-2 border-navy px-5 py-3.5 font-display text-[14px] font-extrabold uppercase tracking-wide text-navy transition-transform active:scale-[0.98]"
        >
          Quero o Plano Básico
        </a>
      </div>

      {/* Completo — highlighted */}
      <div className="relative mt-8 rounded-2xl bg-navy p-6 pt-8 shadow-card ring-4 ring-coral">
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-coral px-4 py-1.5 font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-navy">
          ★ Mais vendido
        </span>
        <p className="font-display text-[1.25rem] font-extrabold text-on-dark">{completo.title}</p>
        <p className="font-display text-[14px] font-semibold text-coral">{completo.subtitle}</p>
        <p className="mt-2 text-[13.5px] leading-snug text-on-dark-muted">{completo.desc}</p>
        <div className="mt-2">
          <HeroMock />
        </div>
        <ul className="mt-2 grid gap-2.5">
          {MAIN_ITEMS.map((i) => (
            <li key={i} className="flex gap-2.5 text-[13.5px] leading-snug text-on-dark">
              <CheckIcon />
              <span>{i}</span>
            </li>
          ))}
          {BONUSES.map((b) => (
            <li key={b.n} className="flex gap-2.5 text-[13.5px] leading-snug text-on-dark">
              <GiftIcon />
              <span>
                <strong className="font-semibold text-coral">Bônus {String(b.n).padStart(2, "0")}</strong> — {b.title} (
                {b.count})
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <p className="text-[14px] text-on-dark-muted">
            De <span className="line-through">{completo.anchor}</span> por apenas
          </p>
          <p className="font-display text-[3.2rem] font-extrabold leading-none text-on-dark">
            <span className="text-xl align-top">R$</span> {completo.price}
          </p>
          <p className="mt-1 text-[12.5px] text-on-dark-muted">Pagamento único · Produto digital</p>
        </div>
        <CtaButton href={completo.href} className="mt-5">
          Quero o Plano Completo
        </CtaButton>
        <p className="mt-3 text-center text-[12.5px] text-on-dark-muted">
          Só R$ 10 a mais para levar os 4 bônus
        </p>
      </div>

      <p className="mt-8 text-center text-[14.5px] leading-relaxed text-muted-foreground">
        Menos que um lanche na faculdade para ter <strong className="font-semibold text-navy">40 casos ilustrados</strong>{" "}
        que você vai consultar em todas as revisões — e, no Completo, mais 25 materiais para treinar o raciocínio.
      </p>
    </Section>
  );
}

/* DOBRA 10 — Garantia */
function Guarantee() {
  return (
    <Section>
      <GuaranteeSeal />
      <SectionTitle className="mt-6">Garantia incondicional de 30 dias</SectionTitle>
      <p className="mt-3 text-center text-[15px] leading-relaxed text-muted-foreground">
        Acesse o material, estude os casos e veja na prática se ele ajuda nas suas revisões. Se em até 30 dias você
        achar que não é para você, basta pedir o reembolso e devolvemos 100% do valor.{" "}
        <strong className="font-semibold text-navy">Sem perguntas e sem burocracia.</strong> O risco é todo nosso.
      </p>
    </Section>
  );
}

/* DOBRA 11 — Como funciona o acesso */
function HowAccess() {
  const steps = [
    { title: "Escolha seu plano", items: ["Básico: os 40 casos visuais", "Completo: 40 casos + 4 bônus"] },
    { title: "Finalize o pagamento", items: ["Ambiente de compra seguro", "Pagamento único, sem mensalidade"] },
    { title: "Receba o acesso no e-mail", items: ["Envio logo após a confirmação", "Confira também a caixa de spam"] },
    { title: "Comece a estudar", items: ["No celular, tablet ou computador", "Ou imprima em A4 se preferir"] },
  ];
  return (
    <Section className="bg-teal-soft">
      <SectionTitle>Como funciona o acesso</SectionTitle>
      <p className="mt-2 text-center text-[15px] text-muted-foreground">Em poucos minutos você já está estudando</p>
      <div className="mt-8 grid gap-3">
        {steps.map((s, i) => (
          <div key={s.title} className="flex gap-4 rounded-xl bg-card p-4 shadow-card">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy font-display text-lg font-extrabold text-on-dark">
              {i + 1}
            </span>
            <div>
              <p className="font-display text-[15px] font-extrabold text-navy">{s.title}</p>
              <ul className="mt-2 grid gap-1.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-[13.5px] text-muted-foreground">
                    <CheckIcon className="size-4" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <CtaButton className="mt-8">Quero meu acesso agora</CtaButton>
    </Section>
  );
}

/* DOBRA 12 — FAQ */
function Faq() {
  return (
    <Section>
      <SectionTitle>Perguntas frequentes</SectionTitle>
      <div className="mt-8 grid gap-2">
        {FAQ.map((f) => (
          <details key={f.q} className="group rounded-xl border bg-card">
            <summary className="flex cursor-pointer list-none items-start gap-3 p-4">
              <span className="flex-1 font-display text-[14.5px] font-extrabold leading-snug text-navy">{f.q}</span>
              <span className="font-display text-lg leading-none text-teal transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="px-4 pb-4 text-[13.5px] leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* DOBRA 13 — Rodapé */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy px-5 py-10">
      <div className="mx-auto max-w-md space-y-3 text-center text-[11.5px] leading-relaxed text-on-dark-muted">
        <p className="font-display text-[13px] font-extrabold text-on-dark">
          © {year} 40 Casos Visuais de Terapia do Esquema. Todos os direitos reservados.
        </p>
        <p>
          Este site não é afiliado ao Facebook, Instagram, Google, TikTok ou a qualquer outra plataforma. Essas marcas
          pertencem aos seus respectivos proprietários.
        </p>
        <p>
          Todo o conteúdo deste material, incluindo textos, ilustrações e diagramas, é protegido pela Lei de Direitos
          Autorais (Lei nº 9.610/98).
        </p>
        <p>
          É proibida a reprodução, distribuição ou revenda, total ou parcial, sem autorização prévia por escrito. Material
          de caráter educacional: não substitui formação especializada, avaliação psicológica ou supervisão clínica.
        </p>
      </div>
    </footer>
  );
}
