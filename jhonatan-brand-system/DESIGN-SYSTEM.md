# Jhonatan Dev Design System

Este documento é a referência operacional da identidade visual Jhonatan Dev. Ele descreve como aplicar a marca em sites, landing pages, propostas comerciais, dashboards e materiais digitais sem depender de decisões visuais improvisadas.

> Página visual de referência: [`index.html`](./index.html)

## 1. Fundamento da marca

### Direção visual

A identidade combina tecnologia, performance e intenção comercial. A interface deve transmitir domínio técnico sem ficar genérica ou excessivamente futurista.

Princípios:

1. **Dark como padrão:** a base escura sustenta profundidade, contraste e o uso correto da wordmark branca.
2. **Cor com função:** vermelho chama para ação; ciano e azul indicam tecnologia, interação e foco ativo.
3. **Hierarquia antes de efeito:** tipografia, espaço e contraste devem organizar a tela antes de glow, blur ou gradientes.
4. **Movimento controlado:** animações orientam atenção ou confirmam interação; não existem apenas como decoração.
5. **Conversão como critério:** cards, títulos, CTAs e imagens devem ajudar o usuário a entender valor e próximo passo.

### Fontes de referência

O sistema foi estruturado a partir de:

- Site de referência `jhonatan.dev.br`, especialmente sua base preta, texto frio, CTA vermelho e hover ciano.
- Logo atual com símbolo vermelho/ciano e wordmark branca.
- Fontes selecionadas: Astromax, Centurion, Inter e Montserrat.

## 2. Paleta cromática

### 2.1 Neutros e superfícies

Os neutros compõem a maior parte da interface. Eles criam níveis de profundidade sem exigir muitos tons diferentes.

| Token | Valor | Nome de apoio | Uso principal |
| --- | --- | --- | --- |
| `--brand-bg` | `#000000` | Blackout | Fundo de hero, seções imersivas e base dark. |
| `--brand-bg-elevated` | `#050506` | Elevated black | Camada intermediária sobre o fundo principal. |
| `--brand-surface` | `#0C0C0C` | Carbon | Cards, painéis, blocos de conteúdo e códigos. |
| `--brand-surface-2` | `#111111` | Graphite | Controles, campos, estados inativos e elevações leves. |
| `--brand-surface-3` | `#202020` | Deep gray | Separação mais forte, fundos de apoio e contraste entre áreas. |
| `--brand-border` | `rgba(255, 255, 255, 0.12)` | Light border | Bordas de cards, campos e componentes ativos. |
| `--brand-border-muted` | `rgba(48, 48, 48, 0.37)` | Muted border | Separadores discretos e divisórias estruturais. |

### 2.2 Texto

| Token | Valor | Uso |
| --- | --- | --- |
| `--brand-text` | `#F6FAFF` | Títulos, textos de alto contraste e conteúdo prioritário. |
| `--brand-text-muted` | `#C5C5C5` | Parágrafos, descrições e informações secundárias. |
| `--brand-text-soft` | `#808185` | Metadados, legendas e detalhes de baixo peso visual. |

### 2.3 Acentos

| Token | Valor | Papel visual | Uso recomendado |
| --- | --- | --- | --- |
| `--brand-red` | `#E60000` | Signal Red | CTA primário, destaque comercial, alertas e palavras-chave. |
| `--brand-red-deep` | `#800808` | Deep Red | Profundidade em gradientes e estados de base do CTA. |
| `--brand-red-bright` | `#E90404` | Bright Red | Riscos, avisos e microdestaques pontuais. |
| `--brand-cyan` | `#06DEF3` | Neon Cyan | Hover, foco, ícones ativos, rim light e elementos técnicos. |
| `--brand-blue` | `#09C4FF` | Tech Blue | Segundo ponto do gradiente tech, feedback visual e interação. |
| `--brand-blue-deep` | `#0B66B4` | Deep Blue | Dados, links, informação institucional e escala de profundidade. |
| `--brand-green` | `#43CE9D` | Conversion Green | Sucesso, prova, métricas positivas e conclusão favorável. |

### Hierarquia de cor

Use a cor em ordem de prioridade:

1. **Preto e carbono** para estruturar fundo e superfícies.
2. **Branco frio e cinzas** para leitura e hierarquia textual.
3. **Vermelho** para a ação mais importante de cada contexto.
4. **Ciano e azul** para interação, estado ativo, foco e assinatura tecnológica.
5. **Verde** apenas para confirmação, sucesso ou dados positivos.

Não use vermelho e ciano competindo pela mesma chamada principal. Em uma seção ou bloco de decisão, um deles deve liderar e o outro deve apoiar.

## 3. Gradientes

Os gradientes fazem parte da assinatura, mas devem ser aplicados em elementos focais. Não usar como fundo genérico de página.

```css
--gradient-cta: linear-gradient(135deg, #e60000 0%, #800808 100%);
--gradient-tech: linear-gradient(135deg, #06def3 0%, #09c4ff 100%);
--gradient-data: linear-gradient(90deg, #0b66b4 0%, #43ce9d 100%);
```

| Gradiente | Uso |
| --- | --- |
| `--gradient-cta` | Botão primário, destaque de conversão, headline comercial curta. |
| `--gradient-tech` | Hover do CTA, ícone ativo, foco, linha de progresso e destaque técnico. |
| `--gradient-data` | Métricas, dados, prova, status e conteúdo informativo. |

### Fundos de seção

- Não usar fundos quadriculados ou malhas de grid como base visual de landing pages, seções institucionais ou páginas comerciais.
- Use superfícies lisas em preto, carbono ou branco frio; fundos decorativos de seção devem nascer apenas em wrappers de fluxo (`.dark-flow` e `.white-flow`), nunca em seções individuais.
- O brilho de fundo oficial usa um pseudo-elemento circular de `300px` com `filter: blur(200px)`. Não use radiais grandes de `rem`, múltiplos radiais ou `background: radial-gradient(...)` em wrappers de seção.
- Use os tokens `--section-glow-size: 300px`, `--section-glow-blur: 200px`, `--section-glow-dark`, `--section-glow-white` e `--section-glow-card`.
- Fundo white usa apenas `--section-glow-white`: um glow vermelho difuso, sem ciano, sem segundo brilho e sem variação por seção dentro do mesmo bloco white.
- O pseudo-elemento do glow deve usar `position: absolute`, `top`, `left`, `width: 300px`, `height: 300px`, `border-radius: 100%`, `filter: blur(200px)`, `z-index: 0`, `pointer-events: none` e `transform: translate(-50%, -50%)`.
- O conteúdo deve ficar em wrapper com `position: relative` e `z-index: 1`, garantindo que o glow fique acima do fundo e abaixo de texto, imagem, CTA e cards.
- Evite `inset` lateral negativo porque ele pode aumentar a largura real da página e quebrar o alinhamento central.
- Em transições entre seções dark e white, a divisão visual pode ter linha, border-radius, overlap ou sombra leve quando isso fizer parte da composição.
- Se duas seções consecutivas usam o mesmo tema, agrupe-as no mesmo flow wrapper e deixe as seções internas com fundo transparente. Não use um pseudo-elemento por seção.
- Componentes internos podem ter efeitos próprios, mas o fundo da seção não deve competir com texto, imagem, CTA ou cards.
- Antes de finalizar uma landing, rode `rg -n -- "--section-glow-x|--section-red-alpha|gradient-section-white|section--dark::before|section--light::before" src/styles` e corrija qualquer retorno que reative o padrão antigo.

## 4. Temas

### Tema escuro

É o tema padrão da marca. Use em:

- Site institucional e portfólio.
- Landing pages de conversão.
- Propostas comerciais de alto impacto.
- Páginas de serviço, desenvolvimento e tecnologia.
- Apresentações e capas digitais.

O tema escuro deve preservar profundidade entre `--brand-bg`, `--brand-surface` e `--brand-surface-2`. Evite colocar todos os blocos no mesmo preto.

### Tema claro

O tema claro existe para leitura mais longa e documentos densos. Use em:

- Propostas com muito conteúdo textual.
- Dashboards operacionais.
- Documentos, relatórios e páginas administrativas.

No tema claro, as superfícies mudam para `#F6FAFF`, `#FFFFFF`, `#EDF2F8` e `#DBE4EE`. Os acentos vermelho, ciano, azul e verde continuam os mesmos para manter reconhecimento de marca.

### Implementação atual

O arquivo [`script.js`](./script.js) alterna `data-theme` entre `dark` e `light`, persistindo a preferência no `localStorage` com a chave `jhonatan-brand-theme`.

```js
document.documentElement.dataset.theme = "light";
```

## 5. Tipografia

### Famílias

| Família | Papel | Onde usar | Onde não usar |
| --- | --- | --- | --- |
| **Astromax** | Display e impacto | Hero, capas, títulos muito curtos, grandes números e chamadas de campanha. | Parágrafos, tabelas, formulários e textos longos. |
| **Centurion** | Assinatura editorial | Frases curtas, selos, detalhes de marca, aberturas e ênfases pontuais. | Navegação, botões, campos e leitura contínua. |
| **Inter** | Títulos de seção e leitura institucional | H2, subtítulos de seção, blocos explicativos e interfaces que precisam de sobriedade. | Hero display, assinaturas editoriais e textos que precisam da personalidade Astromax/Centurion. |
| **Montserrat** | Texto e interface | Parágrafos, títulos convencionais, menus, botões, cards, formulários e documentos. | Nenhuma restrição relevante; é a fonte de sustentação. |

### Tokens

```css
--font-display: "Astromax", "Montserrat", "Segoe UI", sans-serif;
--font-signature: "Centurion", "Montserrat", "Segoe UI", sans-serif;
--font-heading: "Inter", "Montserrat", "Segoe UI", sans-serif;
--font-body: "Montserrat", "Segoe UI", sans-serif;
```

### Escala recomendada

| Estilo | Tamanho | Line-height | Família e peso | Aplicação |
| --- | --- | --- | --- | --- |
| Hero display | `96px` | `1.00` | Astromax regular | Hero e capas de forte impacto. |
| H1 | `64px` | `1.05` | Astromax ou Montserrat 800 | Título principal de página. |
| H2 | `max 48px / 3rem` | `1.08` | Inter 600 | Título de seção. |
| H3 | `28px` | `1.18` | Montserrat 700 | Título de card ou subseção. |
| H3 de serviço | `32px / 2rem` | `1.16` | Inter 600 | Título em painéis de serviço, módulos de oferta e detalhes de entrega. |
| Eyebrow de seção | `máx. 16px / 1rem` | `1.00` | Montserrat 600 | Pílulas e rótulos de seção em Title Case, como “Pra Quem É”, “O Que Fazemos”, “Como Funciona” e “Faq”. |
| Apoio de seção | `máx. 16px / 1rem` | `1.65` | Montserrat 500 | Parágrafos de apoio abaixo de headings de seção (`.section-heading p:not(.eyebrow)`). |
| Body | `16px` | `1.65` | Montserrat 400 | Texto corrido. |
| Micro | `12px` | `1.35` | Montserrat 600/800 | Metadados, legendas, labels internos e detalhes técnicos. |

### Regras tipográficas

- Use Astromax em caixa alta quando a intenção for tecnológica e direta.
- Use Centurion como contraste, nunca como tipografia dominante de uma tela.
- Use Inter semibold (`600`) em todos os H2. H2 não deve ultrapassar `3rem`, inclusive em landing pages.
- Use todos os rótulos de seção/pílulas `.eyebrow` com tamanho máximo de `1rem`, `font-weight: 600` e sem `text-transform: uppercase`; escreva o conteúdo em Title Case, com apenas a primeira letra de cada palavra maiúscula e as demais minúsculas.
- Use parágrafos de apoio dentro de `.section-heading` com tamanho máximo de `1rem` e `font-weight: 500`; não use `clamp()` que ultrapasse `1rem` nesses textos.
- Use H3 de painéis de serviço em Inter semibold (`600`) com `2rem`; não use Astromax ou escala display nesses blocos.
- Use Montserrat para garantir leitura em qualquer contexto.
- Não use letter-spacing negativo.
- Mantenha títulos curtos em áreas compactas; quebre linha em vez de reduzir excessivamente a legibilidade.
- Palavras em destaque podem receber gradiente vermelho ou ciano, desde que o restante do título mantenha contraste suficiente.

## 6. Logo e assinatura visual

### Arquivos disponíveis

| Arquivo | Aplicação |
| --- | --- |
| [`logo-wordmark.png`](./assets/images/logo-wordmark.png) | Logo completa com wordmark. Uso preferencial em fundo escuro. |
| [`logo-symbol.png`](./assets/images/logo-symbol.png) | Símbolo principal. Uso em fundos claros ou quando o nome já está explícito. |
| [`logo-smush.png`](./assets/images/logo-smush.png) | Símbolo compacto. Uso em avatar, favicon, selo e interfaces pequenas. |

### Regras de uso

- A wordmark branca deve aparecer sobre fundo preto, carbono ou imagem escura com overlay.
- Em fundo claro, use o símbolo isolado ou posicione a wordmark em uma faixa escura.
- Preserve uma área de respiro mínima equivalente à largura da haste vermelha do símbolo.
- Tamanho mínimo recomendado: `180px` de largura para a wordmark e `32px` para o símbolo em interfaces.
- Não aplicar sombras coloridas, distorção, contorno adicional ou alteração de cor no símbolo.
- Não aplicar a logo sobre imagens de alto contraste sem overlay suficiente.

## 7. Layout e espaçamento

### Estrutura

| Token ou regra | Valor | Uso |
| --- | --- | --- |
| `--container` | `1180px` | Largura máxima de conteúdo. |
| `--topbar-height` | `72px` | Altura da navegação principal. |
| Seção desktop | `96px 0` | Respiro vertical padrão entre blocos. |
| Seção tablet/mobile | `72px 0` | Respiro reduzido para telas menores. |
| Espaços de componente | `14px`, `16px`, `18px`, `24px` | Gaps entre controles, cards e grades. |
| `--radius-sm` | `5px` | Ícones, campos e superfícies pequenas. |
| `--radius-md` | `8px` | Cards, painéis e áreas de conteúdo. |
| Botões | `999px` | Exceção intencional para CTA em formato pill. |

### Grades

- Use 4 colunas para benefícios, regras de marca e cards curtos em desktop.
- Use 3 colunas para efeitos e blocos visuais médios.
- Use 2 colunas para conteúdo que exige explicação ou comparação.
- Em tablet e mobile, reduza gradualmente até uma coluna, sem sobreposição nem corte de texto.

## 8. Componentes

### Navegação

- Header fixo com fundo `rgba(0, 0, 0, 0.72)` e blur de `18px` no dark theme.
- Borda inferior discreta usando `--brand-border-muted`.
- Links em Montserrat 600, 13px, com hover em superfície clara translúcida.
- Controle de tema em formato toggle, com vermelho no dark e ciano no light.

### Botões

| Variante | Papel | Base | Hover/foco |
| --- | --- | --- | --- |
| `.button-primary` | CTA prioritário | `--gradient-cta` | Sobe `3px`, troca para `--gradient-tech` e recebe borda ciano. |
| `.button-cyan` | Ação secundária de destaque | `--gradient-tech` | Sobe `3px`; preserva texto escuro. |
| `.button-ghost` | Ação terciária | Fundo translúcido e borda neutra | Borda ciano e glow discreto. |

Regras:

- Altura mínima: `48px`.
- Ícones têm 18px e seguem a cor do texto.
- Botões devem ter estados de hover e `:focus-visible` claros.
- Em telas pequenas, botões de ações principais podem ocupar a largura completa.

### Cards e painéis

- Fundo principal: `--brand-surface` com borda de 1px.
- Raio máximo padrão: 8px.
- Cards ativos podem usar ícone ciano e `--shadow-cyan`.
- Cards inativos podem reduzir saturação e opacidade, nunca a ponto de prejudicar leitura.
- Painéis de conteúdo usam gradiente branco muito sutil sobre a superfície para sugerir materialidade, não profundidade excessiva.

### Formulários

- Campos com mínimo de `48px` de altura.
- Fundo: `--brand-surface-2`.
- Borda padrão: `--brand-border`.
- Em foco: borda ciano e halo `0 0 0 3px rgba(6, 222, 243, 0.16)`.
- Rótulos em Montserrat 700, 13px e cor secundária.

### Código e tokens

- Superfície em carbono, borda sutil e fonte monoespaçada.
- O botão de cópia usa ícone e muda para ciano quando a cópia é concluída.
- O bloco deve ser usado como fonte de verdade para iniciar novos projetos.

## 9. Efeitos e movimento

### Rim light ciano

Use para indicar foco, interação ou estado ativo. Pode aparecer em borda, sombra ou halo de ícone.

```css
--shadow-cyan: 0 0 54px rgba(6, 222, 243, 0.34);
```

### Glow vermelho

Use apenas em CTA primário ou em um destaque comercial relevante.

```css
--shadow-red: 0 17px 34px rgba(230, 0, 0, 0.24);
```

### Glass carbon

Use em headers, barras e painéis sobre imagens escuras. Combine transparência, borda discreta e `backdrop-filter`; não aplique vidro em todos os cards.

### Linhas animadas

Use scanlines e traces em separadores, barras de progresso, indicadores de estado ou transições de seção. A velocidade atual é de 2.5s com easing suave.

### Redução de movimento

O CSS implementa `prefers-reduced-motion: reduce`. Em contextos que respeitam essa preferência, animações e transições são praticamente removidas.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 10. Imagens e direção de arte

### Estilo de imagem

- Fundos escuros ou predominantemente escuros.
- Luz de recorte em vermelho e/ou ciano sobre sujeito, produto ou interface real.
- Contexto técnico visível: código, telas, produto, dispositivos, entregas ou bastidores relevantes.
- Imagens devem revelar o trabalho real; evitar foto meramente atmosférica ou abstrata quando a intenção é demonstrar serviço.

### Hero

O hero utiliza imagem full-bleed com overlay linear forte no lado do texto. O texto nunca deve depender de uma área visualmente ruidosa para permanecer legível.

### Referências internas

As imagens em `assets/images/` documentam a aplicação atual da identidade. Elas servem como direção de arte e não como templates rígidos.

## 11. Responsividade

| Breakpoint | Ajustes principais |
| --- | --- |
| Até `1100px` | Grades de 4 colunas passam para 2; grids complexos passam a 1 coluna; H1 reduz para 76px. |
| Até `820px` | Navegação textual é ocultada; hero reduz espaçamento; H1 passa para 58px; token strip passa para 3 colunas. |
| Até `560px` | H1 passa para 42px; botões viram coluna; grids ficam em uma coluna; hero recebe laterais de 16px. |

Critérios de qualidade:

- Sem scroll horizontal.
- Nenhum texto deve invadir outro elemento.
- Botões e campos mantêm altura estável.
- Imagens têm dimensão reservada e `object-fit` definido.
- O conteúdo prioritário deve continuar legível em 375px de largura.

## 12. Acessibilidade

- Priorizar `--brand-text` sobre fundos escuros para títulos e conteúdo importante.
- Usar `--brand-text-muted` apenas quando houver contraste suficiente para leitura secundária.
- Estados de foco são visíveis em botões, toggle e campos.
- Toda imagem de conteúdo deve ter `alt` descritivo; elementos decorativos devem ser `aria-hidden`.
- Não usar cor como único indicador de estado. Combine cor com borda, ícone, texto ou mudança de elevação.
- Respeitar `prefers-reduced-motion`.
- Em botões ciano, usar texto preto para preservar contraste.

## 13. Tokens CSS completos

```css
:root {
  --brand-bg: #000000;
  --brand-bg-elevated: #050506;
  --brand-surface: #0c0c0c;
  --brand-surface-2: #111111;
  --brand-surface-3: #202020;
  --brand-border: rgba(255, 255, 255, 0.12);
  --brand-border-muted: rgba(48, 48, 48, 0.37);

  --brand-text: #f6faff;
  --brand-text-muted: #c5c5c5;
  --brand-text-soft: #808185;

  --brand-red: #e60000;
  --brand-red-deep: #800808;
  --brand-red-bright: #e90404;
  --brand-cyan: #06def3;
  --brand-blue: #09c4ff;
  --brand-blue-deep: #0b66b4;
  --brand-green: #43ce9d;

  --gradient-cta: linear-gradient(135deg, #e60000 0%, #800808 100%);
  --gradient-tech: linear-gradient(135deg, #06def3 0%, #09c4ff 100%);
  --gradient-data: linear-gradient(90deg, #0b66b4 0%, #43ce9d 100%);
  --section-glow-size: 300px;
  --section-glow-blur: 200px;
  --section-glow-dark: rgba(230, 0, 0, 0.34);
  --section-glow-white: rgba(230, 0, 0, 0.16);
  --section-glow-card: rgba(230, 0, 0, 0.28);

  --font-display: "Astromax", "Montserrat", "Segoe UI", sans-serif;
  --font-signature: "Centurion", "Montserrat", "Segoe UI", sans-serif;
  --font-heading: "Inter", "Montserrat", "Segoe UI", sans-serif;
  --font-body: "Montserrat", "Segoe UI", sans-serif;

  --radius-sm: 5px;
  --radius-md: 8px;
  --container: 1180px;
  --topbar-height: 72px;
  --shadow-cyan: 0 0 54px rgba(6, 222, 243, 0.34);
  --shadow-red: 0 17px 34px rgba(230, 0, 0, 0.24);
}
```

## 14. Estrutura do projeto

```text
jhonatan-brand-system/
|- index.html                 # Página visual do design system
|- styles.css                 # Tokens, componentes, tema e responsividade
|- script.js                  # Toggle de tema e cópia dos tokens
|- DESIGN-SYSTEM.md           # Esta documentação
`- assets/
   |- fonts/                  # Astromax e Centurion locais
   `- images/                 # Logo e referências visuais
```

## 15. Manutenção e governança

Para manter consistência:

1. Atualize os tokens em `styles.css` antes de ajustar componentes isolados.
2. Ao criar landing pages, variações ou testes de layout, crie uma página/rota nova por padrão. Só altere uma página existente mediante aprovação explícita.
3. Ao criar um novo componente, comece por cor semântica, tipografia, espaçamento e estado de foco.
4. Registre aqui novas regras de marca que afetem mais de uma página ou canal.
5. Não adicione novos tons de vermelho, ciano ou azul sem uma função semântica explícita.
6. Não transforme a estética em uma coleção de glows e gradientes. Os efeitos devem reforçar informação e interação.
7. Verifique a licença de uso das fontes antes de distribuir projetos ou materiais comerciais.

## 16. Checklist de aplicação

- [ ] Fundo e superfícies usam os neutros oficiais.
- [ ] Landing pages e seções comerciais não usam fundo quadriculado; fundos usam superfícies lisas com glow controlado.
- [ ] Fundos decorativos ficam apenas em `.dark-flow` ou `.white-flow`, nunca em seções individuais.
- [ ] Glow de fundo usa pseudo-elemento circular de `300px` com `filter: blur(200px)`.
- [ ] Fundo white usa apenas `--section-glow-white`: um glow vermelho difuso, sem ciano, sem segundo brilho e sem variações por seção.
- [ ] O conteúdo da seção fica acima do glow em wrapper com `position: relative` e `z-index: 1`.
- [ ] Transições entre seções dark e white podem usar linha, border-radius, overlap ou sombra leve quando a mudança de tema é intencional.
- [ ] Seções consecutivas do mesmo tema compartilham o mesmo flow wrapper e não exibem linha, faixa, shadow, radius, borda ou glow cortado entre elas.
- [ ] A auditoria `rg -n -- "--section-glow-x|--section-red-alpha|gradient-section-white|section--dark::before|section--light::before" src/styles` não retorna reativação do padrão antigo.
- [ ] Há apenas um CTA primário por contexto visual importante.
- [ ] Vermelho e ciano não concorrem pelo mesmo foco.
- [ ] Astromax e Centurion não foram usados em textos corridos.
- [ ] H2 usa Inter 600 e não ultrapassa `3rem`.
- [ ] Rótulos de seção usam no máximo `1rem`, peso `600`, sem uppercase forçado e com texto em Title Case.
- [ ] Parágrafos de apoio em `.section-heading` usam no máximo `1rem` e peso `500`.
- [ ] H3 de painéis de serviço usa Inter 600 em `2rem`.
- [ ] Páginas existentes só foram alteradas com aprovação; novas landing pages foram criadas em rotas próprias.
- [ ] Wordmark branca está sobre fundo escuro ou faixa escura.
- [ ] Borda, foco e contraste estão presentes em controles interativos.
- [ ] Efeitos de movimento respeitam redução de movimento.
- [ ] A interface foi revisada em desktop, tablet e mobile.
- [ ] Tokens e documentação foram atualizados junto com mudanças estruturais.

## 17. Figma

O design system foi preparado para ser traduzido em variáveis, estilos e componentes no Figma. Para vincular esta documentação ao projeto **Proposta comercial**, é necessário ter a URL ou o `fileKey` do arquivo; a integração disponível não localiza arquivos somente pelo nome.
