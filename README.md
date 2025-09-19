# Vmusic

## **Descrição do Projeto**

Trata-se de um aplicativo similar ao spotify para escutar músicas, ver artistas, albuns e afins, utilizando a api do deezer para buscar esses dados, infelizmente a api do deezer só permite a reprodução de 30 segundos de uma música.

---

## **Preview**

<img width="1858" height="927" alt="Captura de tela de 2025-09-18 21-59-14" src="https://github.com/user-attachments/assets/ec270071-9edf-4b5c-915d-6217f25242ed" />


## **Tecnologias Utilizadas**

O projeto foi construído utilizando as seguintes tecnologias:

- **Next.js**
- **ContextAPI**
- **CSS Modules**
- **Swiper**

---

## **Funcionalidades**

- **Layout responsivo**
- **HTML Semântico**
- **Animações em CSS**
- **Player de música 100% funcional**

---

## **Estrutura e Arquitetura**

### **Como pensei o projeto**

- **Next.js e SSR**: Fiz a grande parte dos fetchs no lado do servidor, exceto pela busca, onde usei debounce e fiz o fetch por um client component.
- **ContextAPI**: Gerenciei o estado principalmente do player e da fila com o contextAPI.

---

## **Instalação e Execução**

Siga os passos abaixo para rodar a aplicação localmente.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (ou yarn)

### 1. Clonar o repositório

`git clone` 

### 2. Instalar as dependências

`npm install`

### 4. Rodar o projeto (Modo de Desenvolvimento)

`npm run dev`

Acesse `http://localhost:3000` no seu navegador.

## **Autor**

**Víttor Franceschi**

- **GitHub**: https://github.com/Vacf04
- **LinkedIn**: https://www.linkedin.com/in/vittor-franceschi/
