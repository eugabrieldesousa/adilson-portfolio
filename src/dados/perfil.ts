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
  retratoHeroArquivo: 'retrato.png',
  retratoArquivo: 'retrato-hero.png',
  retratoAlt: 'Professional portrait of Adilson for his online portfolio.',
  localizacao: 'Benton Harbor, Michigan, USA',
  links: {
    email: 'adilsonsalcher@gmail.com',
    telefone: '',
    linkedin: 'https://www.linkedin.com/in/adilson-salcher-90975947/',
    curriculo: ''
  }
};
