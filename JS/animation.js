document.addEventListener('DOMContentLoaded', function() {
    // Definição das animações
    const anim_dog = [];
    const anim_headless = [];
    const anim_losing_blood = [];
    const anim_money = [];

    for (let i = 0; i < 2; i++) {
        anim_dog.push(`frontpage/dog/dog${i}.png`);
    }

    for (let i = 0; i < 6; i++) {
        anim_headless.push(`frontpage/headless/headless${i}.png`);
    }

    for (let i = 0; i < 6; i++) {
        anim_losing_blood.push(`frontpage/losing_blood_c/losing_blood_c${i}.png`);
    }

    for (let i = 0; i < 9; i++) {
        anim_money.push(`midlepages/money/money${i}.png`);
    }

    // Função genérica para mudar as imagens
    function createImageAnimation(elementId, imageArray) {
        let currentIndex = 0; // Começa com a primeira imagem
        const element = document.getElementById(elementId);

        // Função para mudar a imagem
        function changeImage() {
            currentIndex = (currentIndex + 1) % imageArray.length; // Muda para a próxima imagem
            element.src = imageArray[currentIndex]; // Atualiza a imagem exibida
        }

        // Inicia a troca de imagens a cada 300ms quando o mouse entra
        element.addEventListener('mouseenter', function () {
            currentIndex = 0; // Reseta para a primeira imagem
            intervalId = setInterval(changeImage, 300); // Troca de imagem a cada 300ms
        });

        // Para a troca de imagens quando o mouse sai
        element.addEventListener('mouseleave', function () {
            clearInterval(intervalId); // Para o intervalo quando o mouse sai
            element.src = imageArray[0]; // Define a imagem inicial ao sair
        });
    }

    // Aplicando a animação a todos os elementos

    // Chama a função genérica para cada animação
    createImageAnimation('headless', anim_headless);
    createImageAnimation('dog', anim_dog);
    createImageAnimation('losingblood', anim_losing_blood);
    createImageAnimation('money', anim_money);

});