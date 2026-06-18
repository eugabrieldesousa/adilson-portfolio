import { perfil } from './perfil';

const urlBase = 'https://adilson-portfolio.vercel.app';

export const seo = {
  urlBase,
  titulo: `${perfil.nome} | Product Portfolio & Materials Engineering Leader`,
  descricao:
    'Professional portfolio of Adilson, a senior product portfolio and materials engineering leader with experience in product development, launch governance, cost PMO, and global execution.',
  imagemSocial: '/social-image.jpg',
  imagemSocialAlt: `${perfil.nome} — ${perfil.titulo}`,
  canonical: `${urlBase}/`
} as const;
