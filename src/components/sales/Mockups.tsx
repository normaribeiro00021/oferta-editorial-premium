import { cn } from "@/lib/utils";
import kit480 from "@/assets/mockups/kit_completo_480.webp.asset.json";
import kit720 from "@/assets/mockups/kit_completo_720.webp.asset.json";
import kit1080 from "@/assets/mockups/kit_completo_1080.webp.asset.json";
import main480 from "@/assets/mockups/produto_principal_480.webp.asset.json";
import main720 from "@/assets/mockups/produto_principal_720.webp.asset.json";
import main1080 from "@/assets/mockups/produto_principal_1080.webp.asset.json";
import b1s from "@/assets/mockups/bonus_01_mapa_esquemas_360.webp.asset.json";
import b1l from "@/assets/mockups/bonus_01_mapa_esquemas_540.webp.asset.json";
import b2s from "@/assets/mockups/bonus_02_estilos_360.webp.asset.json";
import b2l from "@/assets/mockups/bonus_02_estilos_540.webp.asset.json";
import b3s from "@/assets/mockups/bonus_03_modos_360.webp.asset.json";
import b3l from "@/assets/mockups/bonus_03_modos_540.webp.asset.json";
import b4s from "@/assets/mockups/bonus_04_caderno_360.webp.asset.json";
import b4l from "@/assets/mockups/bonus_04_caderno_540.webp.asset.json";

/*
 * Real product mockups (square WebP, white background).
 * Each ships in several widths so phones download only what they need.
 */

const BIG_SIZES = "(max-width: 480px) 92vw, 420px";

export const KIT_SRCSET = `${kit480.url} 480w, ${kit720.url} 720w, ${kit1080.url} 1080w`;
export const KIT_SRC = kit720.url;
export const KIT_SIZES = BIG_SIZES;

const MAIN_SRCSET = `${main480.url} 480w, ${main720.url} 720w, ${main1080.url} 1080w`;

const BONUS_IMAGES: Record<number, { s: string; l: string; alt: string }> = {
  1: { s: b1s.url, l: b1l.url, alt: "Capa do Bônus 01: Mapa Visual dos 18 Esquemas" },
  2: { s: b2s.url, l: b2l.url, alt: "Capa do Bônus 02: Guia Visual dos 3 Estilos de Enfrentamento" },
  3: { s: b3s.url, l: b3l.url, alt: "Capa do Bônus 03: Modos Esquemáticos, Guia de Consulta" },
  4: { s: b4s.url, l: b4l.url, alt: "Capa do Bônus 04: Caderno de Treino do Raciocínio em Esquemas" },
};

type Props = { className?: string; priority?: boolean };

/* Kit completo: 40 casos + 4 bônus */
export function KitImage({ className, priority }: Props) {
  return (
    <img
      src={KIT_SRC}
      srcSet={KIT_SRCSET}
      sizes={KIT_SIZES}
      width={1080}
      height={1080}
      alt="Kit completo: livro dos 40 Casos Visuais, tablet com um caso aberto, os 4 bônus e fichas de casos"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={cn("mx-auto aspect-square h-auto w-full max-w-[420px]", className)}
    />
  );
}

/* Produto principal: os 40 casos */
export function MainProductImage({ className }: Props) {
  return (
    <img
      src={main720.url}
      srcSet={MAIN_SRCSET}
      sizes={BIG_SIZES}
      width={1080}
      height={1080}
      alt="Livro dos 40 Casos Visuais, tablet com o Caso 20 e fichas dos casos 01 e 37"
      loading="lazy"
      decoding="async"
      className={cn("mx-auto aspect-square h-auto w-full max-w-[420px]", className)}
    />
  );
}

export function BonusImage({ n, className }: { n: number; className?: string }) {
  const img = BONUS_IMAGES[n];
  if (!img) return null;
  return (
    <img
      src={img.s}
      srcSet={`${img.s} 360w, ${img.l} 540w`}
      sizes="(max-width: 480px) 45vw, 220px"
      width={540}
      height={540}
      alt={img.alt}
      loading="lazy"
      decoding="async"
      className={cn("aspect-square h-auto w-full rounded-xl bg-paper", className)}
    />
  );
}

/* Páginas reais do material (miolo), 320w/640w */
const PAGE_FILES = import.meta.glob("@/assets/paginas/*.asset.json", { eager: true, import: "default" }) as Record<
  string,
  { url: string; original_filename: string }
>;
export const INSIDE_PAGES = Array.from({ length: 10 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const find = (w: number) => Object.values(PAGE_FILES).find((a) => a.original_filename === `pagina_${n}_${w}.webp`)!.url;
  return { s: find(320), l: find(640) };
});

export function InsidePage({ s, l }: { s: string; l: string }) {
  return (
    <img
      src={s}
      srcSet={`${s} 320w, ${l} 640w`}
      sizes="220px"
      width={640}
      height={906}
      alt="Página interna do material 40 Casos Visuais"
      loading="lazy"
      decoding="async"
      className="h-auto w-[220px] shrink-0 rounded-xl bg-background shadow-card"
    />
  );
}
