# Ajustes de fidelidade pendentes

- [x] Reproduzir o estado de resposta correta exatamente como a referência, incluindo cor, opacidade, ícone e pontuação.
- [x] Reproduzir o estado de resposta incorreta exatamente como a referência, incluindo destaque da alternativa correta e tratamento da escolhida.
- [x] Confirmar se a pontuação muda apenas em acertos e se a seleção fica bloqueada depois da primeira escolha.
- [x] Confirmar o texto e a transição dos botões "Próxima →" e "Finalizar".
- [x] Confirmar a tela final e o comportamento de reinício.
- [x] Testar desktop e mobile, salvar checkpoint e atualizar o repositório público.

## Observação confirmada na referência

Ao escolher a alternativa 2 incorreta na questão 1, a pontuação permanece em 0. A alternativa correta (1) fica verde/teal com check. A alternativa errada escolhida fica dourado/mostarda, enquanto as outras alternativas incorretas ficam rosa/avermelhadas. O botão "Próxima →" aparece e as opções permanecem bloqueadas.

## Valores medidos

No estado de erro, o botão correto usa `rgb(34, 197, 94)` com opacidade `0.75`; a alternativa errada escolhida usa `rgb(251, 191, 36)` com texto escuro `rgb(31, 41, 55)` e opacidade `0.75`; as outras alternativas permanecem em `rgb(239, 68, 68)` com texto branco e opacidade `0.75`. Todas as alternativas ficam `disabled: true`. O estado correto observado visualmente usa o mesmo verde para a opção correta, alternativas restantes em vermelho/rosa desbotado e a pontuação incrementada.

## Teste da cópia corrigida

Na prévia corrigida, selecionar a alternativa 2 produz pontuação 0, alternativa correta verde com check, escolha errada dourada/mostarda com texto escuro, demais alternativas vermelhas desbotadas e botão "Próxima →". As alternativas ficam bloqueadas e o controle de áudio é ativado após a interação.

## Correção de áudio

- [x] Confirmar como a referência inicia, mantém e pausa a trilha durante o fluxo.
- [x] Garantir reprodução contínua ao mudar de questão sem recriar ou interromper o elemento de áudio.
- [x] Garantir que reiniciar o quiz preserve o estado esperado do áudio.
- [x] Fazer o botão de som refletir corretamente tocar/pausar e lidar com bloqueio de autoplay.
- [x] Testar o áudio no navegador, compilar, salvar checkpoint e atualizar o GitHub.

## Observação inicial do áudio original

A referência usa um elemento `<audio>` com `autoplay: false`, `loop: false`, `muted: false`, `volume: 1`, `controls: false` e `paused: true` no carregamento. O arquivo carregado é `/quiz-audio.mp3`. A trilha não inicia automaticamente no carregamento; ela precisa ser iniciada por uma interação permitida pelo navegador.

## Comparação após a correção

A cópia agora apresenta `loop: false`, `volume: 1`, `currentTime: 0` e chama `play()` no carregamento e sempre que `questionIndex` muda, igual à lógica encontrada no bundle original. O navegador mantém `paused: true` no carregamento inicial por bloqueio de autoplay, comportamento esperado sem gesto do usuário.

## Teste de troca de questão

Após uma seleção e o avanço para a questão 2, o elemento de áudio apresentou `paused: false`, `ended: false`, `loop: false`, `volume: 1` e `currentTime` avançando, confirmando que a faixa foi reiniciada e está tocando durante a nova questão.

## Ajuste de marca

- [x] Remover completamente “✣ Made with Manus” da interface e validar a publicação pública.
