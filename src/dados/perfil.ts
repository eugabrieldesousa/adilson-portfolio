interface Perfil {
  nome: string;
  titulo: string;
  resumoHero: string;
  bioSobre: string[];
  retratoHeroArquivo: string;
  retratoArquivo: string;
  retratoAlt: string;
  localizacao: string;
  links: {
    email: string;
    telefone: string;
    linkedin: string;
    curriculo: string;
  };
}

export const perfil: Perfil = {
  nome: 'Adilson Salcher',
  titulo: 'Turning Strategy into Execution',
  resumoHero:
    'Leading cross-functional teams to deliver product innovation, portfolio value creation, and cost transformation from concept through launch.',
  bioSobre: [
    'I am a Portfolio and Product Development Leader with expertise in Materials Science, Program Management, and Cost Transformation. Throughout my career, I have led cross-functional teams in different countries (Brazil, China, India, Europe and US) in the development and launch of innovative consumer products, driving value creation through strategic portfolio management, product innovation, and project management systems.',
    'My experience spans product development, materials engineering, supplier collaboration, manufacturing readiness, and portfolio governance. I specialize in translating business strategy into executable programs that deliver measurable results.'
  ],
  retratoHeroArquivo: 'retrato-hero.png',
  retratoArquivo: 'retrato.png',
  retratoAlt: 'Professional portrait of Adilson for his online portfolio.',
  localizacao: '',
  links: {
    email: 'adilson@example.com',
    telefone: '+1 (202) 555-0147',
    linkedin: '',
    curriculo: ''
  }
};
