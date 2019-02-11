# angular-todd-course

Curso de angular: do basico ao avançado.

### branch: configuracao-projeto
- Deixei o projeto na forma mais minimalista possivel utilizando o cli
- Foi adicionado ao projeto o bootstrap
- Foram removidos todos os arquivos referentes a testes gerados pelo cli
- A pasta environments tambem foi removido
- Os arquivos index.html, main.js e angular.json foram alterados
- Os dados do componente app tambem foram modificados


### branch: 1-interpolation-and-expressions
- podemos usar ternario
- podemos concatenar
- podemos realizar operacoes matematicas 
- tudo acima dentro de uma interpolacao


### branch: 2-property-binding
- podemos atribuir o valor de uma variavel a uma propriedade de uma tab HTML
- foi realizado um ajuste no arquivo angular.json para apontar qual diretorio vamos colocar conteudos estaticos.


### branch: 3-event-binding
- podemos ligar um evento de uma tag, como click em um function declarada no nosso ts.
- quando passamos o event para a function citada acima, podemos acessar seu valor com o caminho: event.target.value
- podemos utilizar event binding para atualizar um valor de input, como o attr name utilizado nesse exemplo
- o evento input visto no exemplo, funciona como two way data binding.


### branch: 4-two-way-databinding
- e quando uma variavel pode ser alterada dos dois lados, usar com cautela pois diminui a performance.
- e considerada o ponto negativo no angularJS
- usamos twd localmente, comunicacao entre components vamos usar listeners.
- nesse exemplo vamos utilizar formulario, portanto precisamos importar o modulo FormsModule no app.module.ts


### branch: 5-template-ref-variables
- podemos criar variaveis dentro do proprio html para ser utilizado como parametro de alguma function em eventBinding da vida.


### branch: 6-ng-if
- ng-if e uma diretiva estrutural (que adiciona elementos html na pagina
- ngIf adiciona e remove e/ou elementos da DOM 
- Temos dois exemplos: a verboso e o sugar syntax


### branch: 7-ng-for
- ng-for prove uma forma de iterar as nossas collections na pagina
- da mesmo forma que o ngIf, ele tbm tem sugar syntax por meio da *
- nesses exemplos vamos aprender a trabalhar com interfaces para descrever nossos modulos (objetos)
- temos exemplo de como acessar o index do array no html



### branch: 8-ng-class
- Vamos aprender a aplicar classes css de forma dinamica
- temos exemplo que adiciona uma classe dinamicamente
- temos exemplo que adiciona multiplas classes dinamicamente

