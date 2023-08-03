# Memoteca
O que seria a Memoteca


# O que é esse projeto??
* É um projeto que demonstra as etapas de leitura, criação, edição e exclusão de formulários, reutilizando componentes
* Usuários podem guardar qualquer anotação que desejam, editar, visualizar e excluir
* A Aplicação contem página, é possível ir carregando mais e mais conteúdo conforme for sendo adicionado
* Contém também filtro para os pensamentos, sendo possível buscar pelos pensamentos ou autores

Para desenvolver esse projeto, eu usei a versão 15.2.9 do Angular.
É um formulário reativo que passa por validadores e indica os possíveis erros aos usuários
Não foi utilizado bootstrap nesse projeto, todas as classes foram feitas e editadas no SCSS para tentar atender a responsividade da aplicação no uso de telas de computador.
Foi utilizado um backend simples, o json server, para rodar a aplicação e demonstrar as comunicações http do angular.

# Instalação e uso
Para testar essa aplicação siga as instruções:

1. Faça um clone do projeto (ou por git clone ou baixar ele compactado)
2. Ao fazer o o clone do projeto, abra a pasta dele (que vira por git clone ou pela extração do projeto compactado) e abra algum terminal que possa usar comandos CLI
3. Dentro do terminal, adicione os pacotes pelo comando 'npm i --save'
4. Ao instalar os pacotes necessários para rodar a aplicação, use o comando 'ng version' para saber se foram instalados todos os pacotes. Caso de algum erro, o pacote Angular não foi instalado corretamente, repita a etapa 3 novamente, atente-se para estar dentro da pasta do projeto para rodar o comando. no CLI pode usar o comando 'ls' para verificar quais arquivos se encontram na pasta, você deve ver os arquivos 'package.json', 'angular.json', 'package-lock.json'.
5. Entre na pasta 'backend' para instalar os pacotes de dependência do nosso backend. Digite npm i --save.
6. Inicio o backend com o comando 'npm start'
7. Volte a pasta do projeto com 'cd ..'.
8. Com os pacotes todos instalados, use o comando 'ng serve -o' para rodar a aplicação


# Desenvolvimento
Foi desenvolvido utilizando o Angular 15, muito CSS para personalização e artes prontas do curso além de um json server para executar um pequeno servidor e realizar
as operações com requisição HTTP. 

para outras informações, veja as instruções do Angular a baixo

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
