/// <reference types="astro/client" />

declare module 'vanta/dist/vanta.fog.min' {
  type EfeitoVanta = {
    destroy: () => void;
    resize?: () => void;
  };

  const FOG: (opcoes: Record<string, unknown>) => EfeitoVanta;
  export default FOG;
}
