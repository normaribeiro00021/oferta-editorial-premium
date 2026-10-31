import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/sales/SalesPage";

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
  }),
  component: SalesPage,
});
