
// carregar imagens
const money = [];
for (let i = 0; i < 9; i++) {
    money.push(`midlepages/money/money${i}.png`);
}

const imagem = document.querySelector('.animation');
let index = 0; // começa com a primeira imagem 

// Função para mudar as imagens
function changeImage() {
    index = (index + 1) % money.length; // muda para a próxima imagem
    imagem.src = money[index]; // atualiza a imagem exibida
}

// inicia a troca de imagens a cada 300ms quando mouseenter
imagem.addEventListener('mouseenter', function () {
    index = 0;
    interval = setInterval(changeImage, 300); 
});

// Pára a troca de imagens quando mouseleave e volta para a imagem inicial 
imagem.addEventListener('mouseleave', function () {
    clearInterval(interval); 
    imagem.src = money[0]; 
});