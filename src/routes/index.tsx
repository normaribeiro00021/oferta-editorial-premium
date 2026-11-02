import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/sales/SalesPage";
import { KIT_SIZES, KIT_SRC, KIT_SRCSET } from "@/components/sales/Mockups";

const TITLE = "40 Casos Visuais de Terapia do Esquema | Esquemas e modos na prática";
const DESCRIPTION =
  "40 casos ilustrados para estudantes de Psicologia entenderem esquemas, modos e estilos de enfrentamento na prática. A partir de R$ 9,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: KIT_SRC,
        imageSrcSet: KIT_SRCSET,
        imageSizes: KIT_SIZES,
        fetchPriority: "high",
      },
    ],
  }),
  component: SalesPage,
});
