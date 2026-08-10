# Lumy — Development Roadmap

## 1. Objetivo

Este roadmap define a ordem de desenvolvimento da Lumy.

O objetivo é construir o produto de maneira incremental, mantendo cada etapa funcional, testável e versionada.

A prioridade é validar primeiro os fundamentos antes de adicionar funcionalidades avançadas.

---

# 2. Estratégia

O desenvolvimento seguirá o princípio:

```text
Planejar
   ↓
Implementar
   ↓
Testar
   ↓
Validar
   ↓
Commit
   ↓
Próxima etapa
```

Nenhuma etapa deverá depender de várias funcionalidades ainda não testadas.

---

# 3. Fase 0 — Fundação

### Objetivo

Estabelecer a base técnica do projeto.

### Status

Concluída.

### Incluído

* Next.js;
* React;
* TypeScript;
* Tailwind;
* ESLint;
* App Router;
* Git;
* documentação inicial.

---

# 4. Fase 1 — Design System implementável

### Objetivo

Transformar o documento de design em tokens e componentes reutilizáveis.

### Implementar

* cores;
* tipografia;
* espaçamento;
* radius;
* sombras;
* Button;
* Input;
* Textarea;
* Card;
* Badge;
* Dialog;
* Toast;
* estados de loading;
* estados de erro.

### Resultado esperado

Uma pequena biblioteca visual própria da Lumy.

### Critério de conclusão

Uma página interna de demonstração deve conseguir apresentar os componentes principais do sistema.

---

# 5. Fase 2 — Shell da aplicação

### Objetivo

Criar a estrutura visual principal.

### Implementar

* layout;
* navegação;
* header;
* sidebar ou navegação mobile;
* área principal;
* responsividade;
* estados de navegação.

### Resultado esperado

O usuário consegue navegar pela estrutura básica da aplicação mesmo antes das funcionalidades reais existirem.

---

# 6. Fase 3 — Autenticação

### Objetivo

Permitir identificação segura do usuário.

### Implementar

* Firebase Authentication;
* criação de conta;
* login;
* logout;
* sessão;
* proteção de rotas;
* tratamento de erros.

### Resultado esperado

Um usuário consegue criar sua conta e acessar uma área autenticada.

---

# 7. Fase 4 — Perfil

### Objetivo

Criar a identidade básica do usuário dentro da Lumy.

### Implementar

* perfil;
* nome;
* preferências;
* objetivos iniciais;
* configurações básicas.

### Resultado esperado

A Lumy consegue identificar e armazenar corretamente o usuário autenticado.

---

# 8. Fase 5 — Chat sem IA

### Objetivo

Construir a experiência de conversa antes de integrar o modelo.

### Implementar

* interface de chat;
* mensagens;
* envio;
* histórico;
* loading;
* erros;
* persistência.

Nesta fase, a resposta da IA poderá ser simulada.

### Por que fazer isso?

Separar problemas.

Primeiro garantimos que:

```text
interface
   ↓
backend
   ↓
database
```

funciona.

Depois adicionamos:

```text
AI
```

---

# 9. Fase 6 — Integração Gemini

### Objetivo

Adicionar inteligência artificial ao chat.

### Implementar

* integração server-side;
* gerenciamento de API key;
* prompts;
* contexto;
* tratamento de erros;
* limites;
* controle de custos.

### Fluxo

```text
Usuário
   ↓
Chat
   ↓
API Lumy
   ↓
AI Service
   ↓
Gemini
   ↓
AI Service
   ↓
Chat
```

---

# 10. Fase 7 — AI Behavior

### Objetivo

Aplicar as regras definidas em `ai-behavior.md`.

### Implementar

* personalidade;
* contexto;
* comportamento conversacional;
* adaptação;
* limites;
* transparência;
* controle de respostas.

A lógica não deverá depender de um único prompt gigante.

---

# 11. Fase 8 — Safety Layer

### Objetivo

Implementar as primeiras camadas de segurança.

### Implementar

* avaliação de mensagens;
* estados de segurança;
* políticas de resposta;
* fluxos específicos;
* proteção contra manipulação;
* logs técnicos;
* testes.

### Estados iniciais

```text
NORMAL
ATTENTION
HIGH_RISK
EMERGENCY
```

---

# 12. Fase 9 — Check-in

### Objetivo

Permitir acompanhamento emocional estruturado.

### Implementar

* criação de check-in;
* estado emocional;
* intensidade;
* observações;
* histórico;
* visualização.

---

# 13. Fase 10 — Dashboard

### Objetivo

Criar uma visão resumida da jornada do usuário.

### Implementar

* resumo;
* últimos check-ins;
* objetivos;
* tendências;
* atalhos;
* ferramentas.

A dashboard não deverá transformar os dados em diagnóstico.

---

# 14. Fase 11 — Memória

### Objetivo

Permitir continuidade contextual nas conversas.

### Implementar inicialmente

* fatos relevantes;
* preferências;
* objetivos;
* contexto permitido;
* controle pelo usuário.

A memória deverá ser:

* explícita;
* limitada;
* editável;
* removível.

---

# 15. Fase 12 — Ferramentas

### Objetivo

Adicionar recursos estruturados de apoio.

Possíveis ferramentas:

* respiração;
* reflexão;
* diário;
* pensamentos;
* atenção plena;
* objetivos;
* hábitos;
* psicoeducação.

As ferramentas serão adicionadas individualmente.

Não implementar todas simultaneamente.

---

# 16. Fase 13 — Qualidade

### Objetivo

Aumentar a confiabilidade do sistema.

### Implementar

* testes unitários;
* testes de integração;
* testes de componentes;
* testes de fluxos críticos;
* validação de segurança;
* tratamento de erros;
* observabilidade.

---

# 17. Fase 14 — Performance

### Objetivo

Garantir uma experiência rápida e eficiente.

Avaliar:

* carregamento;
* bundle;
* imagens;
* cache;
* consultas ao banco;
* chamadas ao modelo;
* streaming;
* custo.

Otimização deverá ser baseada em métricas, não em suposições.

---

# 18. Fase 15 — Deploy

### Objetivo

Publicar uma primeira versão funcional.

Avaliar:

* hospedagem;
* domínio;
* variáveis de ambiente;
* Firebase;
* segurança;
* monitoramento;
* logs;
* limites de uso.

---

# 19. Fase 16 — Pós-MVP

Após o MVP, funcionalidades poderão incluir:

* personalização avançada;
* notificações;
* hábitos;
* objetivos avançados;
* relatórios;
* ferramentas adicionais;
* memória avançada;
* melhorias de segurança;
* serviços especializados;
* integrações externas.

---

# 20. O que NÃO entra no MVP

Para evitar escopo excessivo, inicialmente não serão prioridade:

* aplicativo mobile nativo;
* sistema para psicólogos;
* marketplace;
* integração com planos de saúde;
* diagnóstico automatizado;
* prescrição;
* sistema social;
* gamificação complexa;
* arquitetura distribuída;
* múltiplos backends sem necessidade.

---

# 21. Critério para avançar

Uma etapa só será considerada concluída quando:

1. estiver implementada;
2. estiver funcionando;
3. tiver sido testada;
4. não apresentar erros críticos;
5. estiver versionada no Git;
6. a documentação continuar coerente.

---

# 22. Regra de escopo

Quando surgir uma nova ideia, ela não deverá ser automaticamente implementada.

Primeiro devemos perguntar:

* resolve qual problema?
* é necessária agora?
* afeta segurança?
* afeta arquitetura?
* pertence ao MVP?
* pode esperar?

Se puder esperar, será adicionada ao backlog.

---

# 23. Desenvolvimento incremental

A Lumy será construída como uma sequência de pequenos sistemas funcionais.

Exemplo:

```text
Design System
      ↓
Shell
      ↓
Auth
      ↓
Profile
      ↓
Chat
      ↓
AI
      ↓
Safety
      ↓
Check-in
      ↓
Dashboard
      ↓
Memory
      ↓
Tools
```

Cada etapa deverá produzir uma melhoria perceptível no produto.

---

# 24. Estado atual

```text
FASE 0 — Fundação
████████████████████ 100%

FASE 1 — Design System
░░░░░░░░░░░░░░░░░░░░   0%

FASE 2 — Shell
░░░░░░░░░░░░░░░░░░░░   0%

FASE 3 — Auth
░░░░░░░░░░░░░░░░░░░░   0%

FASE 4 — Profile
░░░░░░░░░░░░░░░░░░░░   0%

FASE 5 — Chat
░░░░░░░░░░░░░░░░░░░░   0%

FASE 6 — Gemini
░░░░░░░░░░░░░░░░░░░░   0%
```

O desenvolvimento deve seguir essa ordem salvo quando uma decisão arquitetural justificar alteração.

---

# 25. Princípio final

A Lumy não precisa nascer completa.

Ela precisa nascer:

**funcional → segura → compreensível → testável → evolutiva.**

É melhor ter um MVP pequeno funcionando muito bem do que dezenas de funcionalidades incompletas.
