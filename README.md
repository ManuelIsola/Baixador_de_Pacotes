# Baixador de Pacotes

## Descrição

O **Package Downloader** é uma aplicação web simples que permite aos usuários baixar múltiplos pacotes ou bibliotecas a partir de URLs fornecidas. Os usuários podem definir a quantidade de pacotes que desejam baixar, inserir as URLs correspondentes, e o aplicativo faz o download dos pacotes, sugerindo uma organização com base nas extensões dos arquivos.

## Funcionalidades

- **Entrada Dinâmica de URLs**: O usuário pode definir o número de pacotes a serem baixados, e a aplicação gera os campos de entrada de URL dinamicamente.
- **Download Automático**: Cada URL fornecida é baixada automaticamente, com a sugestão de nomeação e organização em pastas baseadas na extensão do arquivo.
- **Interface Responsiva**: Usando Bootstrap, a interface é moderna, limpa e funciona bem em dispositivos móveis e desktops.
- **Mensagens de Progresso**: Informações sobre o sucesso ou erro dos downloads são exibidas ao usuário, com sugestões de como organizar os arquivos.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3 (Bootstrap 5.3)**: Para estilizar e tornar a interface responsiva.
- **JavaScript**: Manipulação dos elementos DOM, geração de inputs, e realização dos downloads.

## Como Usar

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/usuario/package-downloader.git
