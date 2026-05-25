#  Serralheria - Landing Page

![Header Image](./readme-assets/gravacao.gif)

## 🌍 Deploy ao Vivo

Veja o projeto em produção:

[https://serralheria-inky.vercel.app/](https://serralheria-inky.vercel.app/)

> Um showcase moderno e animado para o serviço de serralheria do Vanderley, criado com React, Vite e muito metalurgia visual.
>
> Objetivo: construir uma página para a serralheria do meu pai, destacando serviços, portfólio e contato direto por WhatsApp.

---

## ✨ Destaques do Projeto

- Landing page responsiva para um serralheiro autônomo do Distrito Federal
- Animações elegantes com `GSAP` e `AOS`
- Menu móvel com toggle, portfólio filtrável, depoimentos em carrossel e contato direto por WhatsApp
- Sessões: Hero, Serviços, Portfólio, Diferenciais, Depoimentos, Sobre e Contato
- Modal de serviço e visualização ampliada de imagens do portfólio



##  Estrutura do Projeto

- `src/App.jsx`: componente principal com a renderização da página inteira
- `src/components/`: componentes reutilizáveis como `Header`, `Hero`, `Services`, `Portfolio`, `Differentials`, `Testimonials`, `About`, `Contact` e `Footer`
- `public/videos/`: vídeos de fundo e demonstração para as seções de hero e sobre
- `public/images/`: imagens do portfólio e clientes

##  Tecnologias Utilizadas

- React 19
- Vite
- GSAP
- AOS
- React Icons
- ESLint

##  Como Executar

```bash
npm install
npm run dev
```

Abra o link exibido no terminal para ver o projeto em execução local.

##  Funcionalidades principais

- Menu fixo com header que muda ao rolar
- Chamadas diretas para WhatsApp com mensagem pronta
- Cards interativos de serviços com modal de detalhes
- Filtro de portfólio por categoria
- Carrossel de depoimentos automático
- Seção "Sobre" com vídeo e efeito hover

##  Professor Orientador

Este projeto foi orientado pelo professor:

- [Hudson Neves](https://github.com/HudsonNeves)

Obrigado ao professor Hudson Neves pela orientação técnica e apoio durante o desenvolvimento.



Se quiser usar este projeto como base ou testar a página localmente, basta seguir os passos acima e explorar o `src/components`.

---

##  Observações

- O design foi pensado para refletir a confiança e a robustez de um serviço de serralheria
- O foco é apresentação visual, interação e conversão via WhatsApp
- Pode ser facilmente adaptado para outros nichos de pequenos negócios
