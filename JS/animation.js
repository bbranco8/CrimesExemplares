document.addEventListener('DOMContentLoaded', function() {
    // Guardar as imagens das animacoes em arrays
    //front page
    const anim_dog = [];
    const anim_headless = [];
    const anim_money = [];
    const anim_broken_clock = [];
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
    const anim_barber = [];
    const anim_woman = [];
    // vitima
    const anim_freezing = [];
    const anim_losing_blood = [];
    //motivo
    const anim_jukebox = [];
    const anim_ink = [];
    const anim_sweat = [];
    const anim_cup = [];
    const anim_paper = [];

    // Array de sons correspondentes a cada animação
    const soundFiles = {
        'broken_clock': 'sounds/broken_clock.mov',
        'dog': 'sounds/dog.mov',
        'money': 'sounds/money.mov',
        'crowd': 'sounds/crowd.mov',
        'coffee': 'sounds/coffee.mov',
        'sewing': 'sounds/sewing.mov',
        'car': 'sounds/car.mov',
        'clock': 'sounds/clock.mov',
        'stapler': 'sounds/stapler.mov',
        'cup': 'sounds/cup.mov',
        'cinema': 'sounds/cinema.mov',
        'wine': 'sounds/wine.mov',
        'cut_paper': 'sounds/cut_paper.mov',
        'headless': 'sounds/headless.mov',
        'paper': 'sounds/paper.mov',
        'sweat': 'sounds/sweat.mov',
        'ink': 'sounds/ink.mov',
        'losing_blood': 'sounds/losing_blood.mov',
        'razor': 'sounds/razor.mov',
        'freezing': 'sounds/freezing.mov',
        'smirk': 'sounds/smirk.mov',
        'barber': 'sounds/barber.mov',
        'jukebox': 'sounds/jukebox.mov',
        'woman': 'sounds/woman.mov'
    };

    for (let i = 0; i < 2; i++) {
        anim_dog.push(`frontpage/dog/dog${i}.png`);
        anim_sewing.push(`quizz/sewing/sewing${i}.png`);
        anim_stapler.push(`quizz/stapler/stapler${i}.png`);
    }
    for (let i = 0; i < 3; i++){
        anim_smirk.push(`quizz/smirk/smirk${i}.png`);
        anim_car.push(`quizz/car/car${i}.png`);
    }
    for (let i = 0; i < 4; i++) {
        anim_headless.push(`frontpage/headless/headless${i}.png`);
        anim_cut_paper.push(`quizz/cut_paper/cut_paper${i}.png`);
        anim_losing_blood.push(`quizz/losing_blood/losing_blood${i}.png`);
        anim_barber.push(`quizz/barber/barber${i}.png`);
        anim_jukebox.push(`quizz/jukebox/jukebox${i}.png`);
        anim_woman.push(`quizz/woman/woman${i}.png`);
    }
    for (let i = 0; i < 5; i++) {
        anim_sweat.push(`quizz/sweat/sweat${i}.png`); 
    }
    for (let i = 0; i < 6; i++) {
        anim_broken_clock.push(`frontpage/broken_clock/broken_clock${i}.png`);
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
    createImageAnimation('losingblood', anim_losing_blood, soundFiles.losing_blood);
    createImageAnimation('broken_clock', anim_broken_clock, soundFiles.broken_clock);
    createImageAnimation('crowd', anim_crowd, soundFiles.crowd);
    createImageAnimation('money', anim_money, soundFiles.money);
    createImageAnimation('sewing', anim_sewing, soundFiles.sewing);
    createImageAnimation('cinema', anim_cinema, soundFiles.cinema);
    createImageAnimation('car', anim_car, soundFiles.car);
    createImageAnimation('clock', anim_clock, soundFiles.clock);
    createImageAnimation('razor', anim_razor, soundFiles.razor);
    createImageAnimation('stapler', anim_stapler, soundFiles.stapler);
    createImageAnimation('wine', anim_wine, soundFiles.wine);
    createImageAnimation('cut_paper', anim_cut_paper, soundFiles.cut_paper);
    createImageAnimation('smirk', anim_smirk, soundFiles.smirk);
    createImageAnimation('barber', anim_barber, soundFiles.barber);
    createImageAnimation('woman', anim_woman, soundFiles.woman);
    createImageAnimation('freezing', anim_freezing, soundFiles.freezing);
    createImageAnimation('headless_quizz', anim_headless, soundFiles.headless);
    createImageAnimation('losing_blood', anim_losing_blood, soundFiles.losing_blood);
    createImageAnimation('jukebox', anim_jukebox, soundFiles.jukebox);
    createImageAnimation('ink', anim_ink, soundFiles.ink);
    createImageAnimation('sweat', anim_sweat, soundFiles.sweat);
    createImageAnimation('cup', anim_cup, soundFiles.cup);
    createImageAnimation('paper', anim_paper, soundFiles.paper);
    createImageAnimation('dog_quizz', anim_dog, soundFiles.dog);
});