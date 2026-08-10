# Lumy — Architecture

## 1. Objetivo

Este documento define a arquitetura técnica inicial da Lumy.

A arquitetura deve priorizar:

* simplicidade;
* segurança;
* manutenção;
* escalabilidade gradual;
* separação de responsabilidades;
* facilidade de desenvolvimento;
* possibilidade de evolução futura.

A arquitetura inicial deve evitar complexidade desnecessária.

---

# 2. Visão geral

A Lumy será inicialmente construída como uma aplicação web utilizando Next.js como principal camada de aplicação.

A arquitetura inicial será:

```text
                    ┌──────────────────────┐
                    │       Usuário        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Next.js        │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Next.js Server    │
                    │   API / Application  │
                    └───────┬───────┬──────┘
                            │       │
                    ┌───────┘       └────────┐
                    ▼                        ▼
             ┌─────────────┐          ┌─────────────┐
             │  Firebase   │          │ Gemini API  │
             │ Auth/DB     │          │     AI      │
             └─────────────┘          └─────────────┘
```

---

# 3. Frontend

## Tecnologia

* Next.js
* React
* TypeScript
* Tailwind CSS

## Responsabilidades

O frontend será responsável pela experiência visual e interação com o usuário.

Entre suas responsabilidades:

* renderização das páginas;
* navegação;
* componentes;
* formulários;
* chat;
* check-ins;
* dashboard;
* feedback visual;
* acessibilidade;
* gerenciamento de estado de interface.

O frontend não deve conter segredos ou credenciais privadas.

---

# 4. Backend

Inicialmente, o backend será implementado utilizando os recursos server-side do próprio Next.js.

Isso evita a criação prematura de múltiplos servidores.

## Responsabilidades

A camada server-side será responsável por:

* validar requisições;
* aplicar regras de negócio;
* verificar autenticação;
* controlar acesso aos dados;
* interagir com o Firebase;
* chamar APIs externas;
* proteger credenciais;
* processar respostas da IA;
* aplicar regras de segurança.

---

# 5. Comunicação com a inteligência artificial

A comunicação com o Gemini deverá ocorrer exclusivamente pelo servidor.

Fluxo:

```text
Usuário
   ↓
Interface de chat
   ↓
Next.js
   ↓
API interna
   ↓
Gemini
   ↓
API interna
   ↓
Interface
```

A chave da API do Gemini nunca deverá ser enviada ao navegador.

As credenciais deverão permanecer em variáveis de ambiente no ambiente server-side.

---

# 6. Camada de inteligência artificial

A integração com o modelo de IA não deverá ficar espalhada pelo código da aplicação.

Deverá existir uma camada própria para a integração com modelos.

Exemplo conceitual:

```text
src/
└── lib/
    └── ai/
        ├── client
        ├── prompts
        ├── safety
        └── service
```

Essa separação permitirá trocar ou adicionar modelos futuramente sem reescrever toda a aplicação.

---

# 7. Firebase

Firebase será utilizado inicialmente para autenticação e armazenamento de dados.

## Authentication

Responsável por:

* criação de contas;
* login;
* logout;
* gerenciamento de sessão;
* identificação do usuário.

## Firestore

Responsável inicialmente por dados como:

* perfil;
* preferências;
* conversas;
* mensagens;
* check-ins;
* objetivos;
* configurações.

A estrutura definitiva dos documentos será definida antes da implementação do banco.

---

# 8. Segurança

A segurança será tratada como parte da arquitetura.

Princípios:

* credenciais somente no servidor;
* autenticação obrigatória para dados privados;
* autorização baseada no usuário;
* validação de entradas;
* menor privilégio possível;
* proteção contra acesso cruzado entre usuários;
* controle das informações enviadas para serviços externos;
* tratamento cuidadoso de dados sensíveis.

Nenhuma informação de um usuário deverá ser acessível por outro usuário.

---

# 9. Dados sensíveis

A Lumy poderá lidar com informações relacionadas à saúde mental.

Por isso, a arquitetura deverá adotar o princípio de minimização de dados.

Devemos armazenar apenas o que for necessário para oferecer as funcionalidades do produto.

Sempre que possível:

* limitar dados armazenados;
* definir políticas de retenção;
* permitir exclusão;
* controlar acesso;
* evitar exposição desnecessária;
* registrar operações importantes.

---

# 10. Separação de responsabilidades

A aplicação deverá evitar componentes que concentrem responsabilidades excessivas.

Exemplo ruim:

```text
Chat.tsx
 ├── interface
 ├── autenticação
 ├── banco
 ├── Gemini
 ├── segurança
 └── regras de negócio
```

Preferir:

```text
Chat
 │
 ├── UI
 │
 ├── hooks
 │
 ├── services
 │
 └── API
```

A interface deve se preocupar principalmente com apresentação e interação.

As regras de negócio devem permanecer em camadas apropriadas.

---

# 11. Estrutura inicial esperada

A estrutura poderá evoluir, mas a direção inicial será semelhante a:

```text
src/
├── app/
│   ├── page.tsx
│   ├── chat/
│   ├── dashboard/
│   ├── check-in/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── chat/
│   ├── dashboard/
│   └── check-in/
│
├── lib/
│   ├── firebase/
│   ├── ai/
│   ├── auth/
│   └── utils/
│
├── services/
│   ├── chat/
│   ├── check-in/
│   └── user/
│
├── types/
│
└── hooks/
```

Essa estrutura é uma direção arquitetural e não deve ser criada integralmente antes das funcionalidades que justificam cada parte.

---

# 12. Python

Python não será introduzido no MVP apenas por preferência de linguagem.

Poderá ser utilizado posteriormente quando existir uma necessidade clara, como:

* processamento especializado;
* análise de dados;
* pipelines;
* experimentos;
* serviços independentes;
* processamento assíncrono.

A introdução de Python deverá ser justificada pela necessidade técnica.

---

# 13. Java

Java também não fará parte do backend inicial sem uma necessidade concreta.

Sua utilização poderá ser considerada posteriormente para:

* serviços independentes;
* sistemas de maior escala;
* processamento especializado;
* integração com outros sistemas;
* componentes que justifiquem sua utilização.

---

# 14. Escalabilidade

A Lumy será desenvolvida inicialmente como um sistema simples.

A arquitetura deverá permitir evolução gradual:

```text
MVP
 │
 ├── Next.js
 ├── Firebase
 └── Gemini
       ↓
Crescimento
       ↓
Serviços especializados
       ↓
Arquitetura distribuída quando necessário
```

Não devemos antecipar problemas de escala que ainda não existem.

---

# 15. Princípio de evolução

Nenhuma decisão arquitetural deverá ser considerada permanente.

A arquitetura poderá ser modificada quando:

* surgir uma necessidade real;
* houver evidência de limitação;
* segurança exigir mudança;
* custo justificar mudança;
* manutenção se tornar problemática.

A prioridade é construir uma base simples, segura e compreensível.

---

# 16. Regra fundamental

Toda nova tecnologia adicionada ao projeto deve responder claramente:

> Qual problema real esta tecnologia resolve?

Se não houver uma resposta concreta, a tecnologia não deverá ser adicionada.

A Lumy deve crescer por necessidade, não por acúmulo de ferramentas.
