// Seleciona todos os itens da lista (botões)
let lista = document.querySelectorAll('.topicos ul li');

// Seleciona todos os contentores dos botões 
let quizzConts = document.querySelectorAll('.quizzCont');

// Função para esconder todas as divs de conteúdo
function esconderTodos() {
    let nCont = quizzConts.length;

    for (let i = 0; i < nCont; i++) {//para cada um dos <li> da lista <ul>
        quizzConts[i].style.display = 'none'; //e os outros estarão todos escondidos ("apagados")
    }
}
esconderTodos();


// Função para a posição dos divs serem aleatórias
function position() {
    quizzConts.forEach((quizzCont) => {
        // Torna o quizzContainer temporariamente visível caso esteja oculto para as dimensões retribuídas serem válidas
        let escondido = quizzCont.style.display === 'none';

        if (escondido) { //se o quiz estiver escondido (não estiver desenhado)
            quizzCont.style.display = 'block'; //torna-se temporariamente visível para que se 
                                               //tenha os valores do quizzContainer corretos
        }

        let quizzSize = quizzCont.getBoundingClientRect(); // Obtém dimensões corretas do quizzContainer
        let quizzWidth = quizzSize.width;
        let quizzHeight = quizzSize.height;

        if (escondido) { //no entanto, caso esteja visível fica novamente oculto, porque não queremos ver todos ao mesmo tempo
            quizzCont.style.display = 'none';
        }

        let squares = quizzCont.querySelectorAll('.square'); // Seleciona apenas os quadrados

        for (let i = 0; i < squares.length; i++) {
            let savedX = squares[i].getAttribute('data-x'); //salva as posições x e y já executadas
            let savedY = squares[i].getAttribute('data-y');

            if (savedX !== null && savedY !== null) {//se as posições não forem nulas, significa que já foram movidas
                squares[i].style.left = `${savedX}px`;
                squares[i].style.top = `${savedY}px`;

            } else { //se não, significa que temos de criar posições aletórias novas

                let randomX = Math.random() * (quizzWidth - 80); // Ajusta para largura do contêiner
                let randomY = Math.random() * (quizzHeight - 80); // Ajusta para altura do contêiner

                squares[i].style.left = `${randomX}px`;
                squares[i].style.top = `${randomY}px`;

                squares[i].setAttribute('data-x', randomX);
                squares[i].setAttribute('data-y', randomY);
            }

            squares[i].style.cursor = 'grab';
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
    let posX = 0, posY = 0;
    let arrasta = false;

    // Quando o mouse é pressionado sobre o quadrado
    square.addEventListener('mousedown', (e) => {
        arrasta = true;
        posX = e.clientX - square.offsetLeft; // Distância até a borda esquerda do quadrado
        posY = e.clientY - square.offsetTop;  // Distância até a borda superior do quadrado
        square.style.cursor = 'grabbing';  // Altera o cursor para "grabbing"

        e.preventDefault();
    });

    // Quando o mouse se move (arrastando)
    document.addEventListener('mousemove', (e) => {
        if (arrasta) {
            let newPosX = e.clientX - posX; // Atualiza a posição X
            let newPosY = e.clientY - posY; // Atualiza a posição Y

            // Atualiza os atributos data-x/data-y
            square.style.left = `${newPosX}px`;
            square.style.top = `${newPosY}px`;

            square.setAttribute('data-x', newPosX);
            square.setAttribute('data-y', newPosY);
        }
    });

    // Quando o mouse é solto (finaliza o arraste)
    document.addEventListener('mouseup', () => {
        arrasta = false;
        square.style.cursor = 'grab';  // Volta o cursor para "grab"
    });
}