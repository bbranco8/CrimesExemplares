//função para arrastar os elementos através da biblioteca
// target elements with the "draggable" class
function mover(quadrado) {
    interact(quadrado).draggable({
        // Permitir inércia ao soltar o objeto
        inertia: true,
        // Restringir o movimento ao contêiner pai
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: '#thirdContainer', // Limita ao contêiner pai
                endOnly: true
            })
        ],
        
        // Configurar os eventos de arraste
        listeners: {
            // Atualiza a posição do elemento enquanto ele é arrastado
            move: function (event) {
                const target = event.target;

                // Recupera as posições anteriores ou define como 0
                let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                // Atualiza a transformação CSS do elemento
                target.style.transform = `translate(${x}px, ${y}px)`;

                // Atualiza os atributos de posição
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            },
        }
    });
}


