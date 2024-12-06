// Seleciona todos os itens da lista (botões)
let lista = document.querySelectorAll('.topicos ul li');

// Seleciona todos os contentores dos botões 
let quizzConts = document.querySelectorAll('.quizzCont');

// Função para esconder todas as divs de conteúdo
function esconderTodos() {
    let nCont = quizzConts.length;

    for (let i = 0; i < nCont; i++) {//para cada um dos <li> da lista <ul>
        quizzConts[i].style.border = 'solid blue';
        quizzConts[i].style.display = 'none'; //e os outros estarão todos escondidos ("apagados")
    }
}
esconderTodos();


// Função para a posição dos divs serem aleatórias
function position() {
    quizzConts.forEach((quizzCont) => {//para cada um dos contentores do quizz
        let quizzSize = quizzCont.getBoundingClientRect(); // Obtém as dimensões reais do quizzContainer
        let quizzWidth = quizzSize.width;
        let quizzHeight = quizzSize.height;

        let squares = quizzCont.querySelectorAll('.square'); // Seleciona apenas os squares dentro do contêiner atual

        for (let i = 0; i < squares.length; i++) {
            let randomX = Math.random() * (quizzWidth - 80); // Ajusta para largura do contêiner
            let randomY = Math.random() * (quizzHeight - 80); // Ajusta para altura do contêiner

            squares[i].style.left = `${randomX}px`;
            squares[i].style.top = `${randomY}px`;

            mover(squares[i]);
        }
    });
}


// Função para desenhar o contentor correspondente ao tópico carregado
function mostrarTopico(topico) {
    esconderTodos();  // "Apaga" todos os contentores antes de mostrar o tópico selecionado
    let contentor = document.querySelector('#' + topico);  // Seleciona a div correspondente
    contentor.style.display = 'block';  // Exibe o contentor

    position();

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



//função para arrastar os elementos
function mover(square) {
    let posX, posY;
    let arrasta = false;

    //momento em que pego na imagem
    square.addEventListener('mousedown', (e) => {
        arrasta = true;
        posX = e.clientX - square.getBoundingClientRect().left;
        posY = e.clientY - square.getBoundingClientRect().top;
        square.style.cursor = 'grabbing';
    });

    //momento em que estou a arrastar a imagem
    square.addEventListener('mousemove', (e) => {
        if (arrasta) {
            let posX = e.clientX - offsetX;
            let posY = e.clientY - offsetY;

            // Define as novas posições para o quadrado
            square.style.left = `${posX}px`;
            square.style.top = `${posY}px`;
        }
    });

    //momento em que largo a imagem
    document.addEventListener('mouseup', () => {
        arrasta = false;
        square.style.cursor = 'grab'; // Volta o cursor para "grab"
    });
}

