import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const camposCurriculo = z.object({
  titulo: z.string(),
  organizacao: z.string().optional(),
  periodo: z.string().optional(),
  localizacao: z.string().optional(),
  resumo: z.string().optional(),
  destaques: z.array(z.string()).default([]),
  competencias: z.array(z.string()).default([]),
  ordem: z.number().default(0),
  rascunho: z.boolean().default(true)
});

const experiencias = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiencias' }),
  schema: camposCurriculo
});

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projetos' }),
  schema: camposCurriculo
});

const patentes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/patentes' }),
  schema: z.object({
    titulo: z.string(),
    numero: z.string().optional(),
    jurisdicao: z.string().optional(),
    status: z.string().optional(),
    data: z.string().optional(),
    url: z.url().optional(),
    ordem: z.number().default(0),
    rascunho: z.boolean().default(true)
  })
});

const certificacoes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certificacoes' }),
  schema: camposCurriculo
});

const educacao = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/educacao' }),
  schema: camposCurriculo
});

export const collections = {
  experiencias,
  projetos,
  patentes,
  certificacoes,
  educacao
};
