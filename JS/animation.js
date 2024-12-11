document.addEventListener('DOMContentLoaded', function() {
    // Guardar as imagens das animacoes em arrays
    //front page
    const anim_dog = [];
    const anim_headless = [];
    const anim_money = [];
    // local
    const anim_sewing = [];
    const anim_cinema = [];
    // arma
    const anim_car = [];
    const anim_clock = [];
    const anim_razor = [];
    const anim_stapler = [];
    const anim_wine = [];
    const anim_cut_paper = [];
    // assassino
    const anim_smirk = [];
    // vitima
    const anim_freezing = [];
    const anim_losing_blood = [];
    const anim_eyes = [];
    //motivo
    const anim_jukebox = [];
    const anim_ink = [];
    const anim_sweat = [];
    const anim_cup = [];
    const anim_paper = [];

    // Array de sons correspondentes a cada animação
    const soundFiles = {
        'dog': 'sounds/dog.mov',
        'coffee': 'sounds/coffee.mov',
        'sewing': 'sounds/sewing.mov',
        'car': 'sounds/car.mov',
        'clock': 'sounds/clock.mov',
        'stapler': 'sounds/stapler.mov',
        'cup': 'sounds/cup.mov',
        'cinema': 'sounds/cinema.mov',
        'wine': 'sounds/wine.mov',
        'cut_paper': 'sounds/cut_paper.mov',
        'headless': 'sounds/headless.mov'
    };

    for (let i = 0; i < 2; i++) {
        anim_dog.push(`frontpage/dog/dog${i}.png`);
        anim_sewing.push(`quizz/sewing/sewing${i}.png`);
        anim_stapler.push(`quizz/stapler/stapler${i}.png`);
    }
    for (let i = 0; i < 3; i++){
        anim_smirk.push(`quizz/smirk/smirk${i}.png`);
    }
    for (let i = 0; i < 4; i++) {
        anim_headless.push(`frontpage/headless/headless${i}.png`);
        anim_car.push(`quizz/car/car${i}.png`);
        anim_cut_paper.push(`quizz/cut_paper/cut_paper${i}.png`);
        anim_losing_blood.push(`quizz/losing_blood/losing_blood${i}.png`);
        anim_jukebox.push(`quizz/jukebox/jukebox${i}.png`);
        anim_eyes.push(`quizz/eyes/eyes${i}.png`);
    }
    for (let i = 0; i < 6; i++) {
        anim_cinema.push(`quizz/cinema/cinema${i}.png`); 
        anim_clock.push(`quizz/clock/clock${i}.png`); 
        anim_razor.push(`quizz/razor/razor${i}.png`); 
        anim_freezing.push(`quizz/freezing/freezing${i}.png`); 
        anim_ink.push(`quizz/ink/ink${i}.png`); 
        anim_sweat.push(`quizz/sweat/sweat${i}.png`); 
        anim_paper.push(`quizz/paper/paper${i}.png`); 
        anim_wine.push(`quizz/wine/wine${i}.png`);
    }
    for (let i = 0; i < 8; i++) {
        anim_cup.push(`quizz/cup/cup${i}.png`);
    }
    for (let i = 0; i < 9; i++) {
        anim_money.push(`midlepages/money/money${i}.png`);
    }

    // Função para animacao 
    function createImageAnimation(elementId, imageArray, soundFile) {
        let currentIndex = 0; // Começa com a primeira imagem
        const element = document.getElementById(elementId);
        const sound = new Audio(soundFile);
        sound.loop = true; // Configura o som para tocar em loop

        // Função para mudar a imagem
        function changeImage() {
            currentIndex = (currentIndex + 1) % imageArray.length; // Muda para a próxima imagem
            element.src = imageArray[currentIndex]; // Atualiza a imagem exibida
        }

        // Inicia a troca de imagens quando o mouse entra
        element.addEventListener('mouseenter', function () {
            currentIndex = 0; // Reset para a primeira imagem
            sound.currentTime = 0; // Garante que o som recomece do início
            sound.play(); // Toca o som em loop
            intervalId = setInterval(changeImage, 270); // Troca de imagem a cada 270ms
        });

        // Para a troca de imagens quando o mouse sai
        element.addEventListener('mouseleave', function () {
            clearInterval(intervalId); // Para o intervalo quando o mouse sai
            element.src = imageArray[0]; // Define a imagem inicial ao sair
            sound.pause(); // Para o som quando o mouse sai
            sound.currentTime = 0; // Reset o tempo do som para começar novamente
        });
    }

    // Aplica a animação a todos os elementos
    createImageAnimation('headless', anim_headless, soundFiles.headless);
    createImageAnimation('dog', anim_dog, soundFiles.dog);
    createImageAnimation('losingblood', anim_losing_blood, soundFiles.dog);
    createImageAnimation('money', anim_money, soundFiles.dog);
    createImageAnimation('sewing', anim_sewing, soundFiles.sewing);
    createImageAnimation('cinema', anim_cinema, soundFiles.cinema);
    createImageAnimation('car', anim_car, soundFiles.car);
    createImageAnimation('clock', anim_clock, soundFiles.clock);
    createImageAnimation('razor', anim_razor, soundFiles.car);
    createImageAnimation('stapler', anim_stapler, soundFiles.stapler);
    createImageAnimation('wine', anim_wine, soundFiles.wine);
    createImageAnimation('cut_paper', anim_cut_paper, soundFiles.cut_paper);
    createImageAnimation('smirk', anim_smirk, soundFiles.dog);
    createImageAnimation('freezing', anim_freezing, soundFiles.dog);
    createImageAnimation('headless_quizz', anim_headless, soundFiles.headless);
    createImageAnimation('losing_blood', anim_losing_blood, soundFiles.dog);
    createImageAnimation('eyes', anim_eyes, soundFiles.dog);
    createImageAnimation('jukebox', anim_jukebox, soundFiles.dog);
    createImageAnimation('ink', anim_ink, soundFiles.dog);
    createImageAnimation('sweat', anim_sweat, soundFiles.dog);
    createImageAnimation('cup', anim_cup, soundFiles.cup);
    createImageAnimation('paper', anim_paper, soundFiles.dog);
    createImageAnimation('dog_quizz', anim_dog, soundFiles.dog);
});