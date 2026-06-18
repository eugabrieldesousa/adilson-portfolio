interface Perfil {
  nome: string;
  titulo: string;
  resumoHero: string;
  bioCurta: string;
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
  nome: 'Adilson',
  titulo: 'Senior Product Portfolio and Technical Leader',
  resumoHero:
    'Senior leader connecting product portfolio strategy, materials engineering, cost governance, and cross-functional execution from product development through launch.',
  bioCurta:
    'A multidisciplinary career spanning product portfolio management, materials engineering, product development, cost governance, and technical research. Adilson aligns global stakeholders and translates engineering and category priorities into disciplined execution.',
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
