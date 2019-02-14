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


### branch: 9-ng-style
- Vamos aprender a aplicar atributos css dinamicamente
- vamos usar uma condicao ternaria para aplicar a cor de checked-in


### branch: 10-pipes
- Pipes transforma os valores vindos do nosso componente para serem exibidos na pagina, exemplo: toUpperCase
- eles nao afetam o dado apenas para sua exibicao, nos bastidores tudo permanece a mesma coisa
- e um mecanismo de transformacao de informacao somente para exibicao
- podemos aplicar diversos pipes de uma so vez e o resultado de uma reflete na outra. Exemplo: imagine que temos um pipe
  de upperCase e um que traduz de ingles para o portugues. Se o primeiro pipe a ser aplicado for o upperCase, entao o segundo que será o
  de traducao, ele fará a traducao a partir do valor processado pelo upperCase, ou seja, vai traduzir a frase que esta com letras maiusculas
- para os exemplos, iremos adicionar mais um campo no nosso modelo passenger
- podemos criar nossos proprios pipes, so que nao sera oberdado aqui
- lista de pipes disponiveis: https://angular.io/guide/pipes#built-in-pipes


### branch: 11-safe-navigation
- Para os exemplos vamos adicionar mais um modelo Child e o attr children em passenger
- Utilizamos safe navigation para evitar receber um 'cannot read property length of null'


### branch: 12-smart-component-overview
- Sao os componentes principais de cada modulo
- E ele que possui os servicos e transmite-os para os outros componentes da arvore
- Tambem conhecido como Container Component
- Ele que vai renderizam os componentes filho
- Estruturar o projeto com Container components e considerado uma boa pratica
- Nos exemplos dessa branch teremos a criacao de um novo modulo e o seu Container Component
- nosso modulo se chama passenger-dashboard
  1 - criado o modulo do zero
  2 - adicionado novo module no modulo principal da aplicacao no array de imports (app.module.ts
  3 - adicionado pasta containers e o novo container component
  4 - remover parte do html e ts do app.component para passenger-dashboard
  5 - importar esse component no passenger-dashboard.module
  6 - adicionar nova collection no moduleDecorator para exportar o component criado
  7 - adicionar a tag criada no selector do component no html do nosso app.component
  8 - movemos as interfaces para pasta models que e irma de containers
  

### branch: 13-ngOnInit-lifecycle-hook
- Uma function invocada pelo angular quando um component e inicializado
- e o local ideal buscar dados de um service que sao consumidos pela tela.  (listas, objetos)
- precisamos implementar a funcao ngOnInit da interface OnInit
- assim que o componente estiver pronto, o angular vai invocar a function


### branch: 14-creating-children-components
- Nessa branch vamos criar os outros components que faram parte do modulo passenger-dashboard onde ja foi criado o ContainerComponent
- teremos mais dois components (passenger-count e passenger-details)
- as pastas containers e models terao mais um irmao, components
- lembrando que, os componentes filhos, serao stateless, ou seja, nao guardam estado
- nossos novos components terao suas tags inseridas no html do passengerContainer
- por fim, temos que adicionar os components criados no modulo - passenger module.
- Veja que no decorator do modulo, adicionaremos os componentes apenas no array declarations, pois eles nao ficarao
  acessiveis externamento. Lembrando que o ponto de entrada e o container, portanto, ele que deve estar no assay exports.
  Obs: o o componente que vc estiver criando deve ser acessado externamente, tu deve colocar no array exports.
