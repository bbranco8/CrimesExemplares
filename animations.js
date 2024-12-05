
// Variáveis globais
let money = [];
let n = 0;
let t = 0;
let ratio, w, h;
let canvas, ctx;

// Carregar imagens
function preload() {
    for (let i = 1; i < 17; i++) {
        let imgMoney = new Image();
        imgMoney.src = `middlepages/money/money${i}.png`; 
        money.push(imgMoney); //adicionar cada imagem ao array money
    }
}

function setup() {
    // Criar o canvas
    canvas = document.createElement('canvas');
    document.getElementById('money').appendChild(canvas);
    ctx = canvas.getContext('2d');

    // Definir a largura e altura do canvas
    resizeCanvas();

    // Adicionar o movimento do mouse
    canvas.addEventListener('mousemove', (event) => {
        draw(event); // Passar o mouse para a função draw
    });
}

// Função para desenhar a animação
function draw(event) {
    t += 0.5;

    ratio = money[0].height / money[0].width;
    w = canvas.width;
    h = w * ratio;

    // Atualiza a imagem com base na posição do mouse
    if (t % 2 === 0) {
        n = Math.floor(Math.random() * 3);
    }

    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // Verificar se o mouse está dentro da área do canvas
    if (mouseX > canvas.offsetLeft + (canvas.width / 2) - (w / 2) &&
        mouseX < canvas.offsetLeft + (canvas.width / 2) + (w / 2) &&
        mouseY > canvas.offsetTop + (canvas.height / 2) - (h / 2) &&
        mouseY < canvas.offsetTop + (canvas.height / 2) + (h / 2)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas
        ctx.drawImage(money[n], (canvas.width / 2) - (w / 2), (canvas.height / 2) - (h / 2), w, h);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas
        ctx.drawImage(money[1], (canvas.width / 2) - (w / 2), (canvas.height / 2) - (h / 2), w, h);
    }
}

// Função de redimensionamento da janela
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    // Ajustar o tamanho do canvas conforme o tamanho da janela
    canvas.width = window.innerWidth / 4.8;
    canvas.height = canvas.width * 0.5; // A altura será baseada na largura
}

// Carregar as imagens e iniciar a animação
preload();
setup();
