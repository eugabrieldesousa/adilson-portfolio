interface Perfil {
  nome: string;
  titulo: string;
  resumoHero: string;
  bioCurta: string;
  retratoArquivo: string;
  retratoAlt: string;
  localizacao: string;
  links: {
    email: string;
    linkedin: string;
    curriculo: string;
  };
}

export const perfil: Perfil = {
  nome: 'Adilson',
  titulo: 'Senior Technical and Portfolio Leader',
  resumoHero:
    'Technical leadership, portfolio execution, product launch experience, and materials-focused project delivery.',
  bioCurta:
    'Adilson presents a career profile focused on technical leadership, strategic project delivery, portfolio execution, multicultural work, and materials knowledge.',
  retratoArquivo: 'retrato.png',
  retratoAlt: 'Professional portrait of Adilson for his online portfolio.',
  localizacao: '',
  links: {
    email: '',
    linkedin: '',
    curriculo: ''
  }
};
