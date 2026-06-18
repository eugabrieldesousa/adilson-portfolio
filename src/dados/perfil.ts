interface Perfil {
  nome: string;
  titulo: string;
  resumoHero: string;
  bioCurta: string;
  retratoHeroArquivo: string;
  retratoArquivo: string;
  retratoAlt: string;
  localizacao: string;
  contatoDemonstrativo: boolean;
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
    'Connecting portfolio strategy, engineering depth, and cross-functional execution from product development through market launch.',
  bioCurta:
    'A multidisciplinary career spanning product portfolio management, materials engineering, product development, and technical research. Adilson brings structure to complex programs, aligns global stakeholders, and translates technical priorities into disciplined execution.',
  retratoHeroArquivo: 'retrato-hero.png',
  retratoArquivo: 'retrato.png',
  retratoAlt: 'Professional portrait of Adilson for his online portfolio.',
  localizacao: '',
  contatoDemonstrativo: false,
  links: {
    email: '',
    telefone: '',
    linkedin: '',
    curriculo: ''
  }
};
