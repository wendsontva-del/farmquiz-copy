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
