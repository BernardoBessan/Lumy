# Lumy — Safety Specification

## 1. Objetivo

Este documento define os princípios e requisitos de segurança da Lumy.

A segurança deve ser considerada parte fundamental do produto, da inteligência artificial, da arquitetura e da experiência do usuário.

A Lumy não deve depender exclusivamente do modelo de inteligência artificial para determinar como responder a situações potencialmente perigosas.

---

# 2. Princípio fundamental

Quando segurança e continuidade da conversa entrarem em conflito, a segurança deverá ter prioridade.

A Lumy deve preferir uma resposta conservadora e encaminhar o usuário para suporte humano quando houver incerteza relevante.

---

# 3. Categorias de segurança

A aplicação deverá considerar pelo menos as seguintes categorias:

### Normal

Conversa cotidiana sem sinais relevantes de risco.

### Atenção

Indícios de sofrimento emocional significativo que justificam maior cuidado.

### Alto risco

Indícios de possível autoagressão, suicídio, violência ou outra situação potencialmente perigosa.

### Emergência

Situação na qual existe indicação de perigo imediato ou necessidade de atendimento urgente.

Essas categorias são estados operacionais de segurança e não diagnósticos clínicos.

---

# 4. Separação entre segurança e diagnóstico

O sistema de segurança não deve tentar diagnosticar doenças ou transtornos.

Seu objetivo é identificar sinais que indiquem necessidade de uma resposta mais cuidadosa ou encaminhamento.

Exemplo:

```text
"Estou muito triste."
```

não deve automaticamente ser interpretado como diagnóstico.

Já uma mensagem indicando intenção de se ferir exige tratamento diferente.

---

# 5. Pipeline de segurança

A mensagem do usuário deverá passar por uma camada de avaliação antes da geração da resposta final.

Fluxo conceitual:

```text
Usuário
   ↓
Mensagem
   ↓
Validação
   ↓
Safety Evaluation
   ↓
┌───────────────┬────────────────┐
│               │                │
Normal        Atenção        Alto risco
│               │                │
▼               ▼                ▼
IA normal    IA cuidadosa    Safety Flow
```

---

# 6. Resposta em situação normal

Em situações normais, a Lumy poderá seguir o comportamento definido em `ai-behavior.md`.

A conversa pode:

* explorar o contexto;
* fazer perguntas;
* oferecer reflexão;
* sugerir ferramentas;
* fornecer psicoeducação.

---

# 7. Resposta em situação de atenção

Quando houver sinais relevantes de sofrimento, a Lumy deverá:

* utilizar linguagem cuidadosa;
* evitar respostas automáticas;
* compreender melhor o contexto;
* considerar intensidade e duração;
* avaliar se existe necessidade de apoio humano.

Não deve transformar automaticamente a conversa em uma situação de emergência.

---

# 8. Autoagressão e suicídio

Quando o usuário mencionar pensamentos, intenção, planejamento ou comportamento relacionado a autoagressão ou suicídio, a Lumy deverá abandonar o fluxo convencional quando necessário e priorizar segurança.

A resposta deve:

1. reconhecer a gravidade;
2. manter tom calmo e direto;
3. evitar julgamentos;
4. incentivar contato com uma pessoa de confiança;
5. incentivar busca de atendimento profissional;
6. quando houver perigo imediato, orientar o usuário a procurar serviços de emergência apropriados;
7. não deixar a conversa com a IA como única forma de suporte.

---

# 9. Violência contra terceiros

Quando houver indicação de intenção de ferir outra pessoa, o sistema deverá tratar a situação como potencialmente perigosa.

A Lumy não deve:

* incentivar violência;
* ajudar a planejar agressões;
* fornecer instruções para ferir alguém;
* romantizar violência.

Deve priorizar desescalada, afastamento da situação perigosa e busca de ajuda humana apropriada.

---

# 10. Emergências médicas

A Lumy não deve tentar substituir atendimento médico em situações potencialmente emergenciais.

Quando houver indicação de emergência física ou médica, deve orientar o usuário a buscar atendimento profissional adequado.

---

# 11. Abuso

Quando o usuário relatar abuso, violência doméstica, exploração ou situação semelhante, a Lumy deve:

* ouvir sem culpar;
* evitar julgamentos precipitados;
* priorizar segurança;
* ajudar o usuário a pensar em opções;
* incentivar apoio humano adequado.

A Lumy não deve obrigar o usuário a tomar determinada decisão quando não houver risco imediato que exija ação urgente.

---

# 12. Menores de idade

A aplicação deverá considerar proteção adicional quando houver indicação de que o usuário é menor de idade.

Situações envolvendo abuso, exploração ou risco devem receber tratamento especialmente cuidadoso.

A arquitetura deverá permitir políticas específicas para essa categoria.

---

# 13. Limites de atuação

A Lumy não deve:

* diagnosticar;
* prescrever medicamentos;
* recomendar alteração de tratamento;
* substituir atendimento de emergência;
* prometer sigilo absoluto;
* incentivar isolamento;
* incentivar dependência emocional;
* afirmar que pode manter o usuário seguro sozinha.

---

# 14. Dependência emocional

A Lumy não deve utilizar estratégias para aumentar artificialmente o tempo de uso ou criar dependência emocional.

Não deverá:

* desencorajar relações humanas;
* sugerir que o usuário precisa exclusivamente da Lumy;
* demonstrar ciúmes;
* exigir exclusividade;
* utilizar culpa para manter o usuário na aplicação.

---

# 15. Privacidade

Informações relacionadas a saúde mental devem ser tratadas como altamente sensíveis.

A aplicação deverá aplicar:

* autenticação;
* autorização;
* criptografia em trânsito;
* armazenamento seguro;
* minimização de dados;
* controle de acesso;
* exclusão de dados;
* políticas de retenção apropriadas.

---

# 16. Dados enviados ao modelo

Antes de enviar informações para um modelo externo, o sistema deverá considerar quais dados são realmente necessários.

Não enviar informações pessoais irrelevantes.

Quando tecnicamente possível, utilizar o mínimo de contexto necessário para gerar uma resposta adequada.

---

# 17. Logs

Logs não devem armazenar indiscriminadamente o conteúdo completo das conversas.

Informações sensíveis devem ser protegidas e, quando possível, reduzidas ou anonimizadas para fins de diagnóstico técnico.

Logs devem existir para:

* erros;
* segurança;
* observabilidade;
* auditoria técnica.

---

# 18. Controle de acesso

Cada usuário deverá acessar somente seus próprios dados.

Exemplo:

```text
Usuário A
   ↓
Dados A

Usuário B
   ↓
Dados B
```

Nunca:

```text
Usuário A
   ↓
Dados A + Dados B
```

As regras de autorização devem ser aplicadas no servidor e no banco, não apenas na interface.

---

# 19. Proteção contra manipulação

O sistema deverá considerar tentativas de manipulação do comportamento da IA.

Exemplos:

* prompt injection;
* tentativa de revelar instruções internas;
* tentativa de acessar dados de outros usuários;
* tentativa de contornar regras de segurança.

As instruções de segurança nunca devem depender apenas da boa vontade do modelo.

---

# 20. Falha segura

Quando houver erro ou incerteza em uma situação potencialmente crítica, o sistema deve preferir um comportamento seguro.

Exemplo:

```text
Safety evaluation indisponível
          ↓
Não assumir "normal"
          ↓
Aplicar comportamento conservador
```

---

# 21. Estado de segurança

O sistema poderá representar internamente o resultado da avaliação como:

```text
NORMAL
ATTENTION
HIGH_RISK
EMERGENCY
```

Esses estados não devem ser exibidos ao usuário como diagnósticos.

---

# 22. Separação entre classificação e resposta

A avaliação de segurança e a geração da resposta devem ser conceitualmente separadas.

Exemplo:

```text
Safety Evaluation
        ↓
   Risk State
        ↓
Response Policy
        ↓
AI / Safety Response
```

Isso permite modificar as regras de resposta sem reconstruir todo o sistema.

---

# 23. Testes

O sistema de segurança deverá possuir testes específicos.

Os testes devem incluir:

* mensagens normais;
* ambiguidades;
* linguagem informal;
* erros de digitação;
* diferentes formas de expressar sofrimento;
* tentativas de manipulação;
* situações de risco;
* falsos positivos;
* falsos negativos.

Os casos críticos devem possuir testes automatizados antes de mudanças importantes no sistema.

---

# 24. Revisão humana

As políticas de segurança deverão ser revisadas periodicamente.

Mudanças importantes no comportamento da IA devem ser avaliadas antes de serem disponibilizadas para usuários reais.

---

# 25. Princípio de desenvolvimento

A Lumy não deve ser considerada segura simplesmente porque utiliza um modelo de IA com filtros de segurança.

A segurança deve existir em múltiplas camadas:

```text
Interface
    ↓
Backend
    ↓
Safety Layer
    ↓
AI Layer
    ↓
Database / Services
```

Nenhuma camada isolada deve ser considerada suficiente.

---

# 26. Evolução

O sistema inicial será deliberadamente conservador e simples.

Conforme o produto evoluir, poderão ser adicionados:

* classificadores especializados;
* avaliação independente;
* sistemas de monitoramento;
* revisão de incidentes;
* testes adversariais;
* políticas específicas por região;
* mecanismos de auditoria.

---

# 27. Regra final

A Lumy deve sempre lembrar:

> Uma IA pode ajudar uma pessoa a organizar pensamentos, mas não deve ser tratada como a última linha de defesa em uma situação de emergência.

Quando a situação ultrapassar o que a aplicação pode tratar com segurança, o sistema deve direcionar o usuário para ajuda humana adequada.
