# Especificação visual do FarmQuiz

## Referência e abordagem escolhida

Esta é uma tarefa de reprodução. O site `https://farmquiz-nghhu3pa.manus.space/` é a especificação visual e comportamental de origem. A fidelidade ao original prevalece sobre a criação de uma identidade visual alternativa.

## Design Movement

Interface de quiz educacional editorial, com composição central estreita, contraste cromático alto e acabamento de cartão lúdico. A referência combina um fundo azul elétrico, pergunta em verde-oliva e respostas em coral, com tipografia serifada e feedback cromático direto.

## Core Principles

1. Reproduzir a hierarquia visual, proporções e ordem dos elementos observados na referência.
2. Manter o fluxo de uma pergunta por vez, com seleção única, feedback imediato e avanço explícito.
3. Tornar todos os estados compreensíveis por cor, ícone, texto e foco de teclado.
4. Preservar a atmosfera simples, concentrada e sem navegação adicional.

## Color Philosophy

O azul intenso ocupa o campo inteiro e cria uma tela imersiva. O verde-oliva diferencia a pergunta como área de conhecimento e o coral sinaliza alternativas ainda não avaliadas. Verde/teal indica acerto e o botão verde confirma uma ação positiva. Bordas brancas espessas separam os blocos do fundo azul e mantêm legibilidade em telas pequenas.

## Layout Paradigm

Uma coluna vertical compacta, com largura máxima próxima de 320px em desktop e adaptação fluida para mobile. O conteúdo fica centralizado vertical e horizontalmente, preservando bastante espaço azul ao redor, como na referência. O cabeçalho é uma linha com título e pontuação; a barra de progresso segue imediatamente abaixo; pergunta, alternativas e ação final aparecem em sequência.

## Signature Elements

O cartão de pergunta verde-oliva com borda branca arredondada, as alternativas coral numeradas em círculos brancos e o selo discreto "Made with Manus" no canto inferior direito são os três sinais visuais recorrentes.

## Interaction Philosophy

Cada toque deve produzir confirmação clara: a opção selecionada revela se está correta, a pontuação atualiza sem atraso e a próxima ação só aparece quando o estado da questão está definido. O foco de teclado e os estados disabled devem manter a mesma linguagem cromática do mouse/toque.

## Animation

As respostas entram com uma transição curta de opacidade e deslocamento vertical mínimo. O feedback usa apenas cor, ícone e uma leve mudança de escala, sem transformar a composição. O avanço de questão faz um crossfade rápido. Todas as animações respeitam `prefers-reduced-motion`.

## Typography System

A referência usa uma serifada clássica para título, pergunta e respostas. A implementação usa Georgia como fallback local para manter o caráter editorial sem depender de rede. Título em 18–20px e peso forte; indicador e microcopy em 12–14px; pergunta em 15–17px, itálico e forte; respostas em 13–15px.

## Brand Essence

Um treinamento rápido de produtos Farmasi para consultoras e equipes que precisam revisar conhecimento em poucos minutos. Personalidade: direta, didática e vibrante.

## Brand Voice

As perguntas devem ser objetivas e os botões devem nomear a ação de forma curta. Exemplos: "Próxima →" e "Você completou o treinamento Farmasi.". Não usar mensagens genéricas que não existam na referência.

## Wordmark & Logo

Não adicionar um logotipo externo que não exista na referência. O wordmark textual "Quiz Farmasi" no cabeçalho é o elemento de marca principal, usando a mesma tipografia serifada e o mesmo alinhamento.

## Signature Brand Color

Azul Farmasi Quiz `#2859d8`, usado como base da tela inteira, com uma variação sutil para evitar aparência plana sem alterar a leitura da referência.
