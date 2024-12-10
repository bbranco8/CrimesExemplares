//seleciona todos os itens da lista (botões)
let topicos = document.querySelectorAll('.topicos ul li');

//seleciona todos os quadrados
let squares = document.querySelectorAll(".square");


//função para calcular a distância entre dois pontos (usada nos quadrados)
function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


function position() {

    const displayContainer = document.querySelector('#fourthScreen');
    const displayRect = displayContainer.getBoundingClientRect(); // Obtém as dimensões da div display

    for (let i = 0; i < squares.length; i++) {

        //calcula o tamanho de cada quadrado
        const rect = squares[i].getBoundingClientRect();
        const squareWidth = rect.width;  // Largura do quadrado
        const squareHeight = rect.height; // Altura do quadrado

        //calcula a largura e altura da secção (tela)
        const displayWidth = displayRect.width / 2;
        const displayHeight = displayRect.height - 150;

        //guardam as posições x e y dos quadrados
        let savedX = squares[i].getAttribute('data-x');
        let savedY = squares[i].getAttribute('data-y');

        if (savedX !== null && savedY !== null) { // Se as posições já foram definidas
            squares[i].style.left = `${savedX}px`;
            squares[i].style.top = `${savedY}px`;
        } else {
            let randomX = 0, randomY = 0;
            let sobreposto = true;

            //gera posições até que não haja sobreposição de quadrados
            while (sobreposto) {
                randomX = Math.random() * (displayWidth - squareWidth); 
                randomY = Math.random() * (displayHeight - squareHeight); 
                sobreposto = false;

                for (let j = 0; j < i; j++) {
                    let otherSquare = squares[j];
                    let otherX = parseFloat(otherSquare.getAttribute('data-x'));
                    let otherY = parseFloat(otherSquare.getAttribute('data-y'));

                    //se a distancia entre dois quadrados for menor que 100
                    if (dist(randomX, randomY, otherX, otherY) < 150) { 
                        sobreposto = true;
                        break;
                    }
                }
            }

            //define novas posições para os quadrados
            squares[i].style.left = `${randomX}px`;
            squares[i].style.top = `${randomY}px`;
            squares[i].setAttribute('data-x', randomX);
            squares[i].setAttribute('data-y', randomY);
        }
    }
}



//função dedicada à parte de arrastar os elementos
function mover(square) {
    let posX = 0, posY = 0;
    let arrasta = false;

    //momento em que o rato agarra o quadrado
    square.addEventListener('mousedown', (e) => {
        arrasta = true;
        posX = e.clientX - square.offsetLeft;  //distância até a borda esquerda do quadrado
        posY = e.clientY - square.offsetTop;   //distância até a borda superior do quadrado
        square.style.cursor = 'grabbing'; 

        e.preventDefault();  //previne que quando se arrasta o texto não fique selecionado

        //momento em que o rato arrasta o quadrado
        const onMouseMove = (e) => {
            if (arrasta) {
                let container = document.querySelector('#fourthScreen');
                let containerRect = container.getBoundingClientRect();  //calcula as dimensões do contentor

                //atualiza a posição de X e Y com base no movimento do rato
                let newPosX = e.clientX - posX;
                let newPosY = e.clientY - posY;

                //restringe os valores para os limites da secção (tela)
                newPosX = Math.max(0, Math.min(newPosX, containerRect.width - square.offsetWidth));
                newPosY = Math.max(0, Math.min(newPosY, containerRect.height - square.offsetHeight));

                //atualiza as posições dos quadrados
                square.style.left = `${newPosX}px`;
                square.style.top = `${newPosY}px`;
                square.setAttribute('data-x', newPosX);
                square.setAttribute('data-y', newPosY);
            }
        };

        //momento em que o rato larga o quadrado
        const onMouseUp = () => {
            arrasta = false;
            square.style.cursor = 'grab';  
            //remove o evento de movimento
            document.removeEventListener('mousemove', onMouseMove); 
            document.removeEventListener('mouseup', onMouseUp); 
        };

        //adiciona o evento de movimento
        document.addEventListener('mousemove', onMouseMove);  
        document.addEventListener('mouseup', onMouseUp);
    });
}


//chamada das funções de interção de clique, arraste e da determinação das posições dos quadrados
adicionarEventosClique();
position();


//função que permite mudar de tópicos, visualizando apenas os quadrados respetivos
function adicionarEventosClique() {
    for (let i = 0; i < topicos.length; i++) {
        topicos[i].addEventListener("click", function () {
            let topicId = topicos[i].id.replace('Btn', ''); // Determina qual é o tópico que vai ser exibido

            //atualiza a cor dos tópicos conforme o selecionado
            atualizarCorTopicos(i);

            for (let j = 0; j < squares.length; j++) {

                //se o quadrado for filho do contentor cujo id é o mesmo que o tópico
                if (squares[j].parentElement.id == topicId) {
                    squares[j].style.display = "block"; //então o quadrado é desenhado
                    mover(squares[j]);  //adiciona o arrastar a cada um dos quadrados
                } else {
                    //calcula a posição de cada quadrado em relação ao contentor
                    const rect = squares[j].getBoundingClientRect();

                    //seleciona o contentor display e calcula a sua dimensão
                    const displayContainer = document.querySelector('.display');
                    const displayRect = displayContainer.getBoundingClientRect();

                    const squareRight = rect.left + rect.width;  //posição direita do quadrado
                    const squareBottom = rect.top + rect.height;  //posição inferior do quadrado

                    //verifica se os quadrados estão dentro do contentor .display
                    if (rect.left >= displayRect.left && rect.top >= displayRect.top &&
                        squareRight <= displayRect.right && squareBottom <= displayRect.bottom) {
                        squares[j].style.display = "block"; //se estiverem não são apagados
                    } else {
                        squares[j].style.display = "none";//se não estiverem são apagados
                    }
                }
            }
        });

        //simula um clique inicial no tópico da arma para que os quadrados deste possam ser arrastáveis e desenhados logo como default
        if (topicos.length > 0) {
            topicos[0].click();
        }
    }
}


//função que muda a cor dos tópicos consoante aquele que está selecionado
function atualizarCorTopicos(selectedIndex) {
    for (let i = 0; i < topicos.length; i++) {
        if (i === selectedIndex) {
            topicos[i].style.color = "#507650"; // Se estiver selecionado, fica verde
        } else {
            topicos[i].style.color = "#c9c9c9"; // Se não, fica cinza
        }
    }
}











