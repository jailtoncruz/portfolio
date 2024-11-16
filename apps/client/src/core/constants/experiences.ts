import { LanguageSupported } from "../enum/language-supported";
import { ExperienceItem } from "../interfaces/experience-item";

export const experiencesListEN: ExperienceItem[] = [
  {
    company: "Stefanini",
    location: "São Paulo-Brazil",
    role: "Mid Software Developer",
    startDate: "2024 September",
    endDate: "Current",
    description:
      "I develop scalable and reliable .NET, Angular, and Azure solutions for the commercial team. My focus is on optimizing business processes and delivering innovative, high-quality applications tailored to both current and future needs.",
  },
  {
    company: "All Tax Platform",
    location: "São Paulo-Brazil",
    role: "Mid Software Developer",
    startDate: "2023 December",
    endDate: "2024 September",
    description:
      "I collaborated with the product support team to enhance SAP HANA integrations and develop efficient JavaScript solutions. I ensured seamless operations and optimized performance across projects.",
  },
  {
    company: "Infinity Hub Solutions",
    location: "São Paulo-Brazil",
    role: "Partner & Senior Developer",
    startDate: "2022 March",
    endDate: "2023 May",
    description:
      "I led the development of innovative products and tools to enhance team agility, improve solution distribution, and scale product capacity. I spearheaded technological strategies to accelerate company growth.",
  },
  {
    company: "Infinity IT Services",
    location: "São Paulo-Brazil",
    role: "Senior Developer",
    startDate: "2020 December",
    endDate: "2022 March",
    description:
      "I designed and developed prototypes for new solutions while improving legacy systems. My focus was on creating tools to enhance development processes and ensure seamless integrations.",
  },
  {
    company: "RDM Sistemas de Gestão",
    location: "São Paulo-Brazil",
    role: "Systems Analyst",
    startDate: "2015 September",
    endDate: "2020 December",
    description:
      "I analyzed and resolved complex issues as a Level 2 Systems Analyst. I managed, maintained, and implemented client management systems, delivering robust solutions for business operations.",
  },
  {
    company: "Câmara Municipal de Osasco",
    location: "São Paulo-Brazil",
    role: "Trainee",
    startDate: "2013 September",
    endDate: "2015 September",
    description:
      "I provided IT support for hardware and software installations. I assisted users with basic technology issues, ensuring smooth daily operations and enhancing my technical knowledge.",
  },
];

export const experienceListPt: ExperienceItem[] = [
  {
    company: "Stefanini",
    location: "São Paulo-Brasil",
    role: "Desenvolvedor de Software Pleno",
    startDate: "Setembro de 2024",
    endDate: "Atualmente",
    description:
      "Desenvolvo soluções escaláveis e confiáveis em .NET, Angular e Azure para a equipe comercial. Foco em otimizar processos de negócios e entregar aplicações inovadoras e de alta qualidade, adaptadas às necessidades atuais e futuras.",
  },
  {
    company: "All Tax Platform",
    location: "São Paulo-Brasil",
    role: "Desenvolvedor de Software Pleno",
    startDate: "Dezembro de 2023",
    endDate: "Setembro de 2024",
    description:
      "Colaborei com a equipe de suporte ao produto para aprimorar integrações com SAP HANA e desenvolver soluções eficientes em JavaScript. Garanti operações consistentes e desempenho otimizado nos projetos.",
  },
  {
    company: "Infinity Hub Solutions",
    location: "São Paulo-Brasil",
    role: "Sócio e Desenvolvedor Sênior",
    startDate: "Março de 2022",
    endDate: "Maio de 2023",
    description:
      "Liderei o desenvolvimento de produtos e ferramentas inovadoras para melhorar a agilidade da equipe, otimizar a distribuição de soluções e aumentar a capacidade de escalabilidade dos produtos. Defini estratégias tecnológicas para acelerar o crescimento da empresa.",
  },
  {
    company: "Infinity IT Services",
    location: "São Paulo-Brasil",
    role: "Desenvolvedor Sênior",
    startDate: "Dezembro de 2020",
    endDate: "Março de 2022",
    description:
      "Projetei e desenvolvi protótipos de novas soluções enquanto aprimorava sistemas legados. Foquei na criação de ferramentas para melhorar processos de desenvolvimento e garantir integrações eficazes.",
  },
  {
    company: "RDM Sistemas de Gestão",
    location: "São Paulo-Brasil",
    role: "Analista de Sistemas",
    startDate: "Setembro de 2015",
    endDate: "Dezembro de 2020",
    description:
      "Analisei e resolvi problemas complexos como Analista de Sistemas Nível 2. Gerenciei, mantive e implementei sistemas de gestão de clientes, entregando soluções robustas para as operações empresariais.",
  },
  {
    company: "Câmara Municipal de Osasco",
    location: "São Paulo-Brasil",
    role: "Estagiário",
    startDate: "Setembro de 2013",
    endDate: "Setembro de 2015",
    description:
      "Prestei suporte de TI para instalações de hardware e software. Auxiliei usuários com problemas básicos de tecnologia, garantindo operações diárias eficientes e ampliando meu conhecimento técnico.",
  },
];

export function getExperieceList(language: LanguageSupported) {
  switch (language) {
    case LanguageSupported.US:
      return experiencesListEN;
    case LanguageSupported.PT:
      return experienceListPt;
  }
}
