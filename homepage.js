// Seleciona todos os itens da lista (botões)
let lista = document.querySelectorAll('.topicos ul li');

// Seleciona todos os contentores dos botões 
let quizzConts = document.querySelectorAll('.quizzCont');

// Função para esconder todas as divs de conteúdo
function esconderTodos() {
    quizzConts.forEach(function (item) { //para cada um dos <li> da lista <ul>
        item.style.display = 'none'; //inicialmente estarão todos escondidos ("apagados")
    });
}

// Função para desenhar o contentor correspondente ao tópico carregado
function mostrarTopico(topico) {
    esconderTodos();  // "Apaga" todos os contentores antes de mostrar o tópico selecionado
    let contentor = document.querySelector('#' + topico);  // Seleciona a div correspondente
    contentor.style.display = 'block';  // Exibe o contentor

    // Atualiza a cor dos itens da lista
    lista.forEach(function (item) {
        item.style.color = '#c9c9c9';  //retoma a cor cinza inicial
    });

    // A cor do item onde se clicar vai ser verde
    let itemSelecionado = document.querySelector('#' + topico + 'Btn');
    itemSelecionado.style.color = '#507650';  //desenha na cor verde
}

// Adiciona uma interação de click a cada item da lista
lista.forEach(function (item) { //para cada um dos <li> da lista <ul>
    item.addEventListener('click', function () {
        // Desenha o conteúdo correspondente ao tópico clicado
        mostrarTopico(item.id.replace('Btn', '')); //como o que diferencia o nome dos id é o 'Btn', 
                                                   //se eu retirar isso (substituo 'Btn' por "nada" - ' ')
                                                   //fico com o nome do id do contentor (com 'Btn' é o id do topico)
    });
});
