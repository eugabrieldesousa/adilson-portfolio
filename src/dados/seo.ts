import { perfil } from './perfil';

const urlBase = 'https://adilson-portfolio.vercel.app';

export const seo = {
  urlBase,
  titulo: `${perfil.nome} | Product Portfolio & Technical Leadership`,
  descricao:
    'Adilson is a senior product portfolio and technical leader with experience in materials engineering, product development, and global program execution.',
  imagemSocial: '/social-image.jpg',
  imagemSocialAlt: `${perfil.nome} — ${perfil.titulo}`,
  canonical: `${urlBase}/`
} as const;
