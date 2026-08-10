# Lumy — Design System

## 1. Objetivo

O Design System da Lumy define os princípios visuais e de experiência que deverão orientar toda a aplicação.

A interface deve transmitir:

* acolhimento;
* segurança;
* tranquilidade;
* confiança;
* simplicidade;
* modernidade.

A aparência não deve parecer excessivamente clínica, hospitalar ou infantil.

---

# 2. Princípios de design

## 2.1 Clareza

O usuário deve entender rapidamente:

* onde está;
* o que pode fazer;
* o que aconteceu;
* qual é o próximo passo.

Evitar interfaces visualmente carregadas.

---

## 2.2 Acolhimento

A interface deve transmitir uma sensação de espaço seguro.

Isso deve ser obtido através de:

* espaçamento generoso;
* hierarquia visual clara;
* linguagem amigável;
* animações discretas;
* elementos visuais suaves.

Acolhimento não significa excesso de elementos decorativos.

---

## 2.3 Simplicidade

A Lumy deve evitar complexidade desnecessária.

Cada tela deve possuir uma ação principal claramente identificável.

---

## 2.4 Consistência

Componentes equivalentes devem possuir comportamento visual equivalente.

Por exemplo:

* todos os botões primários devem seguir o mesmo padrão;
* inputs devem possuir estados consistentes;
* mensagens de erro devem seguir o mesmo sistema;
* espaçamentos devem seguir uma escala.

---

# 3. Identidade visual

A Lumy deve possuir uma identidade visual contemporânea e tranquila.

A estética deve combinar:

* minimalismo;
* tecnologia;
* bem-estar;
* confiança.

Evitar:

* excesso de gradientes;
* excesso de neon;
* interfaces extremamente corporativas;
* aparência de aplicativo médico tradicional;
* excesso de elementos "fofos".

---

# 4. Cores

A paleta deverá ser baseada em tons suaves e naturais.

## Cor principal

A cor principal deverá representar:

* tranquilidade;
* confiança;
* equilíbrio.

Uma família de tons entre azul e verde suave poderá ser utilizada como referência inicial.

## Background

O fundo principal deverá utilizar tons claros e pouco saturados.

O objetivo é evitar branco puro em grandes áreas quando isso prejudicar o conforto visual.

## Texto

O texto principal deverá possuir contraste adequado.

Textos secundários devem possuir contraste suficiente para acessibilidade sem competir visualmente com o conteúdo principal.

## Estados

Devem existir cores específicas para:

* sucesso;
* informação;
* atenção;
* erro;
* risco.

Essas cores devem ser utilizadas com moderação.

---

# 5. Tipografia

A tipografia deve priorizar:

* legibilidade;
* aparência moderna;
* boa leitura em telas pequenas;
* diferenciação clara entre títulos e conteúdo.

A escala tipográfica deverá possuir níveis consistentes.

Exemplo conceitual:

```text
Display
Heading 1
Heading 2
Heading 3
Body
Body Small
Caption
```

Não utilizar tamanhos arbitrários em cada componente.

---

# 6. Espaçamento

A aplicação deverá utilizar uma escala consistente de espaçamento.

Como referência:

```text
4
8
12
16
24
32
48
64
```

Componentes devem utilizar valores dessa escala sempre que possível.

Isso cria consistência visual e facilita manutenção.

---

# 7. Bordas

A Lumy deve utilizar bordas suaves e discretas.

Cards e elementos interativos poderão utilizar bordas arredondadas.

Evitar arredondamento exagerado em todos os elementos.

A forma deve reforçar a identidade sem prejudicar a hierarquia.

---

# 8. Sombras

Sombras devem ser sutis.

A interface não deve depender de sombras pesadas para separar elementos.

Preferir:

* contraste de superfície;
* bordas;
* espaçamento.

Sombras devem indicar hierarquia ou elevação quando necessário.

---

# 9. Botões

Devem existir pelo menos três níveis:

### Primary

Utilizado para a ação principal da tela.

### Secondary

Utilizado para ações importantes, porém secundárias.

### Ghost

Utilizado para ações de menor destaque.

Os botões devem possuir estados para:

* normal;
* hover;
* focus;
* active;
* disabled;
* loading.

---

# 10. Inputs

Inputs devem possuir:

* label;
* placeholder quando necessário;
* estado normal;
* foco;
* erro;
* disabled;
* feedback de validação.

O placeholder nunca deverá substituir o label.

---

# 11. Cards

Cards poderão ser utilizados para:

* check-ins;
* objetivos;
* indicadores;
* ferramentas;
* informações resumidas.

Cards não devem ser utilizados simplesmente para colocar uma borda em cada pequeno elemento da interface.

Devem existir quando houver uma necessidade clara de agrupamento.

---

# 12. Chat

O chat é o principal componente da experiência Lumy.

A interface deve priorizar a conversa.

Mensagens do usuário e da Lumy devem ser facilmente diferenciáveis sem depender apenas de cores.

A experiência deverá incluir:

* mensagens;
* timestamp quando necessário;
* indicador de carregamento;
* estado de erro;
* possibilidade de tentar novamente;
* campo de entrada;
* envio;
* feedback durante processamento.

A interface não deve parecer um aplicativo de mensagens convencional.

A conversa deve transmitir continuidade e acolhimento.

---

# 13. Estado de carregamento

A Lumy não deve deixar o usuário sem feedback durante operações demoradas.

Utilizar:

* skeletons;
* indicadores de carregamento;
* estados progressivos;
* feedback contextual.

Evitar spinners em excesso.

---

# 14. Erros

Erros devem ser:

* claros;
* humanos;
* acionáveis;
* não culpabilizantes.

Evitar mensagens técnicas como:

```text
Error 500
FirebaseError
API request failed
```

na interface final.

O usuário deve receber uma explicação compreensível e, quando possível, uma ação para resolver o problema.

---

# 15. Estados críticos

Situações relacionadas à segurança devem possuir uma linguagem visual distinta.

Entretanto, a interface não deve utilizar elementos alarmistas desnecessários.

Quando houver risco potencial, a prioridade visual deve ser:

1. segurança;
2. orientação;
3. ação;
4. informações complementares.

---

# 16. Navegação

A navegação deve ser simples.

As áreas principais poderão incluir:

* início;
* conversa;
* check-in;
* evolução;
* ferramentas;
* perfil.

A navegação deverá se adaptar ao dispositivo.

No mobile, deve priorizar acessibilidade e facilidade de uso com uma mão.

---

# 17. Responsividade

A Lumy deverá ser desenvolvida com abordagem mobile-first.

A interface deve funcionar adequadamente em:

* smartphones;
* tablets;
* notebooks;
* monitores grandes.

Nenhuma funcionalidade essencial deve depender exclusivamente de uma tela grande.

---

# 18. Acessibilidade

A acessibilidade será requisito desde o início.

A interface deverá considerar:

* contraste;
* navegação por teclado;
* foco visível;
* labels apropriados;
* textos alternativos;
* áreas de toque adequadas;
* hierarquia semântica;
* suporte a leitores de tela;
* redução de movimento quando solicitado pelo sistema.

Nunca utilizar somente cor para transmitir uma informação importante.

---

# 19. Animações

As animações devem ser:

* curtas;
* suaves;
* funcionais;
* discretas.

Devem servir para:

* indicar mudança de estado;
* melhorar percepção de continuidade;
* orientar o usuário.

Evitar animações constantes ou decorativas que possam causar distração.

---

# 20. Linguagem visual da IA

A Lumy deve possuir uma identidade própria sem tentar representar uma pessoa real.

O sistema pode utilizar:

* nome Lumy;
* ícone;
* avatar abstrato;
* elemento gráfico próprio.

Evitar representar a IA como uma pessoa específica.

Isso ajuda a manter clareza sobre a natureza artificial do sistema.

---

# 21. Design mobile

No mobile:

* o conteúdo principal deve ocupar a maior parte da tela;
* os controles devem ser facilmente alcançáveis;
* o campo de mensagem deve permanecer acessível;
* textos devem continuar legíveis;
* elementos secundários podem ser ocultados ou reorganizados.

---

# 22. Dark mode

O sistema deverá ser preparado para suportar modo escuro futuramente.

A implementação inicial não precisa necessariamente incluir todas as telas em dark mode, mas as decisões de cores e componentes não devem impedir sua implementação posterior.

---

# 23. Sistema de componentes

Quando começarmos a implementar a interface, os componentes deverão ser reutilizáveis.

Exemplos:

```text
Button
Input
Card
Dialog
Toast
Avatar
Badge
Tabs
Dropdown
Textarea
MessageBubble
ChatInput
LoadingState
ErrorState
```

Componentes genéricos devem permanecer independentes das regras específicas da Lumy sempre que possível.

---

# 24. Regra de consistência

Antes de criar um novo componente visual, devemos verificar se já existe um componente equivalente.

Não criar múltiplas versões visualmente diferentes da mesma função sem uma necessidade clara.

---

# 25. Princípio final

A interface da Lumy deve desaparecer em segundo plano quando o usuário estiver conversando.

A tecnologia deve parecer simples.

O usuário não deve precisar pensar:

> "Estou usando uma aplicação complexa de inteligência artificial."

A experiência ideal é:

> "Estou em um espaço simples onde consigo organizar o que estou sentindo."
