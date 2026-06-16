import { perfil } from './perfil';

const urlBase = 'https://adilson-portfolio.vercel.app';

export const seo = {
  urlBase,
  titulo: `${perfil.nome} | ${perfil.titulo}`,
  descricao:
    'Professional portfolio and online resume for Adilson, focused on technical leadership, portfolio execution, product launches, and materials knowledge.',
  imagemSocial: '/social-image.svg',
  canonical: urlBase
} as const;
