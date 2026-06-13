# Henrique e Castro Advogados

Site institucional do escritório Henrique e Castro Advogados.

## Stack

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion
- React Router DOM
- React Helmet Async

## Setup

```bash
npm install
npm run dev
```

## Deploy

Conectar o repositório na Vercel. O `vercel.json` já configura as rewrites para SPA.

## Configuração

Copiar `.env.example` para `.env` e preencher:

- `VITE_FORMSPREE_ID`: ID do formulário no Formspree

## Estrutura de páginas

| Rota | Página |
|---|---|
| `/` | Home |
| `/sobre` | O Escritório |
| `/areas-de-atuacao` | Áreas de Atuação |
| `/equipe` | Nossa Equipe |
| `/blog` | Blog |
| `/blog/:slug` | Artigo individual |
| `/contato` | Contato |
| `/proposta` | Proposta comercial (rota oculta) |
