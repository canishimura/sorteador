# Sorteador de Números

![Status](https://img.shields.io/badge/status-concluído-brightgreen)

Uma aplicação web simples e robusta para sortear números únicos dentro de um intervalo especificado. O projeto foi desenvolvido com foco em boas práticas de programação, validação de dados e a utilização de algoritmos eficientes para garantir uma experiência de usuário segura e sem travamentos.

## 🖼️ Demonstração Visual

<img src="https://github.com/user-attachments/assets/4677a43c-f810-4a7f-a8a5-1b441cba9239" alt="Demonstração da interface do Sorteador de Números">

## ✨ Funcionalidades Principais

* **Sorteio Personalizado:** Defina a quantidade de números a serem sorteados, o número inicial ("De") e o número final ("Até") do intervalo.
* **Garantia de Números Únicos:** O sorteio garante que não haverá números repetidos no resultado final.
* **Validação de Entrada:** O sistema possui validações robustas para prevenir erros, como campos vazios, intervalos inválidos (onde "De" é maior ou igual a "Até") ou quantidades de sorteio impossíveis para o intervalo fornecido.
* **Interface Intuitiva:** Botões são habilitados e desabilitados dinamicamente para guiar o fluxo de uso do usuário, prevenindo ações indevidas.
* **Design Responsivo:** A interface se adapta para uma boa visualização em diferentes tamanhos de tela, ocultando elementos decorativos em telas menores para focar na funcionalidade.

## 🧠 Destaques Técnicos e Algoritmo

O principal diferencial deste projeto é a robustez do seu algoritmo de sorteio. A versão final utiliza o **Algoritmo de Embaralhamento Fisher-Yates**, uma abordagem profissional e altamente eficiente:

1.  **Criação do Pool de Números:** Primeiramente, um array é criado contendo todos os números possíveis dentro do intervalo especificado pelo usuário.
2.  **Embaralhamento (Shuffle):** Em seguida, este array é embaralhado de forma eficiente e comprovadamente aleatória.
3.  **Seleção do Resultado:** Por fim, os primeiros 'N' elementos do array embaralhado são selecionados como o resultado do sorteio.

Esta abordagem é tecnicamente superior a um método de "tentativa e erro" (sortear e verificar se o número já existe), pois é **extremamente performática** e **elimina completamente o risco de loops infinitos**, garantindo que a aplicação nunca trave, mesmo ao lidar com intervalos muito grandes.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Estilização e responsividade com Flexbox e Media Queries para uma experiência de usuário adaptável.
* **JavaScript (Vanilla JS):** Lógica do sorteio, validações robustas, manipulação do DOM e gerenciamento de eventos utilizando `addEventListener` para uma melhor separação de responsabilidades.
