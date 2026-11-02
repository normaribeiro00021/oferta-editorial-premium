// Single source for all sales page copy, prices and checkout links.

// TODO: replace with the real checkout links when available.
export const CHECKOUT_BASICO = "#oferta";
export const CHECKOUT_COMPLETO = "#oferta";

export const PRODUCT_NAME = "40 Casos Visuais de Terapia do Esquema";

export const FLOW_STEPS = [
  { label: "Situação ativadora", example: "O parceiro demora a responder a mensagem." },
  { label: "Esquema possivelmente ativado", example: "Hipótese: Abandono/Instabilidade." },
  { label: "Emoções e crenças", example: "Medo, ansiedade · “Talvez ele vá me abandonar.”" },
  { label: "Modos e enfrentamento", example: "Criança Vulnerável · checar o celular sem parar." },
  { label: "Consequências e manutenção", example: "A resposta afeta a relação e reforça o padrão." },
];

export const THEMES = [
  { title: "Abandono e instabilidade", desc: "O medo de perder quem importa, em cenas do dia a dia." },
  { title: "Privação emocional", desc: "Quando ninguém parece perceber suas necessidades." },
  { title: "Defectividade e vergonha", desc: "A sensação de ter algo “errado” em si mesmo." },
  { title: "Fracasso e padrões inflexíveis", desc: "Autocobrança, perfeccionismo e medo de errar." },
  { title: "Subjugação e autossacrifício", desc: "Anular os próprios desejos para agradar ou cuidar." },
  { title: "Desconfiança e vulnerabilidade", desc: "Esperar o pior das pessoas e do mundo." },
  { title: "Estilos de enfrentamento", desc: "Resignação, evitação e hipercompensação na prática." },
  { title: "Modos esquemáticos", desc: "Da Criança Vulnerável ao Adulto Saudável, em ação." },
];

export const VALUE_ITEMS = [
  { emoji: "🧠", title: "Teoria que vira raciocínio", desc: "Cada caso mostra o passo a passo por trás do padrão." },
  { emoji: "🎨", title: "Visual de verdade", desc: "Cenas ilustradas ocupam metade de cada ficha." },
  { emoji: "🔍", title: "Diferenças lado a lado", desc: "8 comparações entre esquemas que costumam confundir." },
  { emoji: "🧩", title: "Os 18 esquemas de Young", desc: "Distribuídos pelos cinco domínios ao longo da coleção." },
  { emoji: "⚖️", title: "Hipóteses, não rótulos", desc: "Alternativas e observações que evitam leituras automáticas." },
  { emoji: "📱", title: "Estude em qualquer lugar", desc: "PDF para celular, tablet, computador ou impressão A4." },
];

// Antes × Depois: material comum (texto corrido) vs. caso visual.
export const BEFORE_AFTER = [
  { before: "Blocos de texto corrido", after: "Cenas ilustradas do cotidiano" },
  { before: "Definições soltas", after: "Raciocínio em 5 etapas" },
  { before: "Conceitos que se misturam", after: "Comparações lado a lado" },
  { before: "Horas para revisar", after: "Uma ficha, poucos minutos" },
];

// TODO: exemplos ilustrativos — substitua por compras reais (nome e cidade autorizados).
export const PURCHASE_FEED = [
  { name: "Mariana", city: "Recife", uf: "PE", plan: "Plano Completo" },
  { name: "Lucas", city: "Belo Horizonte", uf: "MG", plan: "Plano Completo" },
  { name: "Ana Clara", city: "Curitiba", uf: "PR", plan: "Plano Básico" },
  { name: "Juliana", city: "Salvador", uf: "BA", plan: "Plano Completo" },
  { name: "Gabriel", city: "Fortaleza", uf: "CE", plan: "Plano Completo" },
  { name: "Beatriz", city: "Porto Alegre", uf: "RS", plan: "Plano Básico" },
  { name: "Camila", city: "Goiânia", uf: "GO", plan: "Plano Completo" },
  { name: "Rafaela", city: "Campinas", uf: "SP", plan: "Plano Completo" },
  { name: "Thiago", city: "Manaus", uf: "AM", plan: "Plano Básico" },
  { name: "Larissa", city: "Florianópolis", uf: "SC", plan: "Plano Completo" },
  { name: "Fernanda", city: "Natal", uf: "RN", plan: "Plano Completo" },
  { name: "Isabela", city: "Rio de Janeiro", uf: "RJ", plan: "Plano Completo" },
];

export const IDEAL_FOR = [
  { emoji: "🎓", title: "Ir bem nas disciplinas", desc: "Revisar abordagens cognitivo-comportamentais com clareza." },
  { emoji: "🧭", title: "Parar de confundir conceitos", desc: "Separar esquema, modo e enfrentamento sem travar." },
  { emoji: "📚", title: "Sair do resumo abstrato", desc: "Estudar com exemplos concretos, e não só definições." },
  { emoji: "💬", title: "Participar das discussões", desc: "Chegar às aulas e grupos de estudo com repertório." },
  { emoji: "🌱", title: "Começar bem na abordagem", desc: "Ter uma base organizada antes da formação." },
  { emoji: "⏱️", title: "Revisar nos intervalos", desc: "Abrir uma ficha no celular e estudar em minutos." },
];

export const MAIN_ITEMS = [
  "40 Casos Visuais de Terapia do Esquema",
  "5 blocos didáticos progressivos (8 casos cada)",
  "Cobertura dos 18 esquemas iniciais desadaptativos",
  "Casos cotidianos, comparativos, de enfrentamento, de modos e integrativos",
  "Estrutura visual de leitura e raciocínio em cada caso",
  "PDF A4 vertical, colorido, digital e imprimível",
  "Índice de navegação com numeração de cada caso",
];

export const CONFIRM_GRID = [
  { emoji: "💬", label: "Esquemas no cotidiano" },
  { emoji: "🔀", label: "Esquemas que se confundem" },
  { emoji: "🛡️", label: "Estilos de enfrentamento" },
  { emoji: "🎭", label: "Modos esquemáticos" },
  { emoji: "🧩", label: "Casos integrativos" },
  { emoji: "📝", label: "Observações didáticas" },
];

export const BLOCKS = [
  {
    n: "01",
    title: "Esquemas no Cotidiano",
    range: "Casos 01–08",
    fn: "Reconhecer manifestações possíveis de esquemas em situações familiares, acadêmicas e sociais.",
    cases: [
      "O silêncio depois da mensagem",
      "Quando ninguém percebe sua necessidade",
      "O medo de não ser suficientemente bom",
      "A vergonha de se expor",
      "Sentir-se de fora mesmo estando presente",
      "O medo constante de que algo ruim aconteça",
      "A dificuldade de decidir sozinho",
      "Quando nada parece bom o suficiente",
    ],
  },
  {
    n: "02",
    title: "Esquemas que Podem Ser Confundidos",
    range: "Casos 09–16",
    fn: "Diferenças conceituais a partir de histórias contrastantes.",
    cases: [
      "Abandono × Privação Emocional",
      "Defectividade × Fracasso",
      "Subjugação × Autossacrifício",
      "Busca de Aprovação × Padrões Inflexíveis",
      "Desconfiança/Abuso × Vulnerabilidade",
      "Isolamento Social × Defectividade",
      "Emaranhamento × Dependência/Incompetência",
      "Negativismo/Pessimismo × Vulnerabilidade",
    ],
  },
  {
    n: "03",
    title: "Estilos de Enfrentamento",
    range: "Casos 17–24",
    fn: "Resignação, evitação e hipercompensação ligadas a esquemas ativados.",
    cases: [
      "Concordar para evitar conflitos",
      "Fugir da intimidade por medo de sofrer",
      "Demonstrar superioridade para esconder insegurança",
      "Controlar tudo para evitar ser enganado",
      "Mudar de opinião para ser aceito",
      "Evitar situações percebidas como perigosas",
      "A dificuldade de tolerar frustrações",
      "Anular necessidades para cuidar dos outros",
    ],
  },
  {
    n: "04",
    title: "Modos Esquemáticos em Ação",
    range: "Casos 25–32",
    fn: "Estados emocionais e respostas associadas aos modos, distintos de esquemas e enfrentamento.",
    cases: [
      "A Criança Vulnerável diante do afastamento",
      "A Criança Zangada diante da frustração",
      "A Criança Impulsiva em um conflito",
      "O Pai/Mãe Punitivo após um erro",
      "O Pai/Mãe Exigente antes de uma avaliação",
      "O Protetor Desligado após uma discussão",
      "O Rendição Complacente diante da pressão",
      "O Adulto Saudável em uma conversa difícil",
    ],
  },
  {
    n: "05",
    title: "Casos Integrativos",
    range: "Casos 33–40",
    fn: "Múltiplas hipóteses de esquemas, modos e enfrentamento, incluindo os limites da interpretação.",
    cases: [
      "A preocupação excessiva diante da incerteza",
      "Perfeccionismo e medo de críticas no trabalho",
      "A culpa depois de dizer não",
      "Antecipar o pior em uma mudança de vida",
      "Conflitos quando os próprios desejos sempre prevalecem",
      "Comparação social, vergonha e busca de aprovação",
      "Quando demonstrar tristeza parece proibido",
      "A autopunição após uma falha",
    ],
  },
];

export const BONUSES = [
  {
    n: 1,
    title: "Mapa Visual dos 18 Esquemas",
    desc: "5 pranchas panorâmicas, uma por domínio, com necessidades emocionais e distinções essenciais. Sua referência rápida durante os 40 casos.",
    count: "5 pranchas",
    from: "R$ 17,90",
    icon: "🗺️",
  },
  {
    n: 2,
    title: "Guia Visual dos 3 Estilos de Enfrentamento",
    desc: "6 mapas ilustrados sobre resignação, evitação e hipercompensação. Entenda por que padrões parecidos geram respostas tão diferentes.",
    count: "6 mapas",
    from: "R$ 14,90",
    icon: "🛡️",
  },
  {
    n: 3,
    title: "Modos Esquemáticos: Guia de Consulta",
    desc: "6 pranchas organizadas por grupos de modos, com características, funções possíveis e diferenças relevantes, para consulta em segundos.",
    count: "6 pranchas",
    from: "R$ 14,90",
    icon: "🎭",
  },
  {
    n: 4,
    title: "Caderno de Treino do Raciocínio em Esquemas",
    desc: "8 fichas de exercícios com vinhetas fictícias inéditas, perguntas orientadoras e comentários explicativos para testar o que aprendeu.",
    count: "8 fichas",
    from: "R$ 19,90",
    icon: "✍️",
  },
];

export const PLANS = {
  basico: {
    title: "Plano Básico",
    subtitle: "Os 40 casos visuais",
    desc: "Para quem quer o material principal e estudar os casos ilustrados.",
    anchor: "R$ 29,90",
    price: "9,90",
    href: CHECKOUT_BASICO,
  },
  completo: {
    title: "Plano Completo",
    subtitle: "40 casos + 4 bônus exclusivos",
    desc: "Para quem quer ler, comparar, consultar e treinar o raciocínio.",
    anchor: "R$ 59,90",
    price: "19,90",
    href: CHECKOUT_COMPLETO,
  },
};

export const FAQ = [
  {
    q: "É só mais um PDF com os conceitos que já vejo nas aulas?",
    a: "Não. As aulas e resumos trazem definições. Aqui cada conceito aparece dentro de uma cena ilustrada, com a sequência situação → esquema → emoções → modo → consequência. É o “como aparece na prática” que costuma faltar.",
  },
  {
    q: "Preciso já saber Terapia do Esquema para aproveitar?",
    a: "Ajuda ter noções básicas de psicopatologia e psicoterapias, mas o material é progressivo: começa por situações do cotidiano e só depois chega às comparações, modos e casos integrativos.",
  },
  {
    q: "Serve para quem já é formado?",
    a: "Sim, especialmente para recém-formados que querem revisar e organizar a base teórica da abordagem com exemplos visuais.",
  },
  {
    q: "Os casos são reais?",
    a: "Não. Todos os casos são fictícios e didáticos, criados para estudo. Nenhuma história expõe pacientes reais.",
  },
  {
    q: "Posso usar o material para diagnosticar alguém?",
    a: "Não. O objetivo é desenvolver compreensão teórica e raciocínio didático. O material não substitui formação especializada, avaliação psicológica ou supervisão clínica.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Logo após a confirmação do pagamento, você recebe o acesso no e-mail informado na compra. É imediato.",
  },
  {
    q: "Consigo ler no celular?",
    a: "Sim. O PDF foi pensado para ter boa leitura no celular, mas também funciona no tablet, no computador e pode ser impresso em A4.",
  },
  {
    q: "Qual a diferença entre o Básico e o Completo?",
    a: "O Básico traz os 40 casos visuais. O Completo traz os 40 casos + 4 bônus (25 pranchas e fichas extras) para consultar, comparar e treinar. A diferença é de apenas R$ 10.",
  },
  {
    q: "É assinatura ou pagamento único?",
    a: "Pagamento único. Sem mensalidade e sem cobranças futuras.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 30 dias de garantia. Se achar que o material não é para você, é só pedir o reembolso e devolvemos 100% do valor, sem burocracia.",
  },
];

// Urgency bar. With URGENCY_END_DATE = null the deadline rolls to the end of the visitor's current day.
// Set a real date ("2026-11-30") once the launch promo has a fixed end, so the countdown stops resetting.
export const URGENCY_END_DATE: string | null = null;
export const URGENCY_TEXT = "Promoção de lançamento + 4 bônus válida até";
