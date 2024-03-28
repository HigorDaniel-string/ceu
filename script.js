let totalDoacoes = 0;

function doacao() {
  totalDoacoes++;
  addStar();
}

function addStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  
  // Adicionando velocidades horizontais e verticais aleatórias
  const speedX = (Math.random() - 0.5) * 2; // Velocidade horizontal entre -1 e 1
  const speedY = (Math.random() - 0.5) * 2; // Velocidade vertical entre -1 e 1
  
  // Movendo as estrelas continuamente
  setInterval(() => {
    const rect = star.getBoundingClientRect();
    const newX = rect.left + speedX;
    const newY = rect.top + speedY;

    // Resetando a posição quando a estrela sai do céu
    if (newX < 0 || newX > window.innerWidth || newY < 0 || newY > window.innerHeight) {
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
    } else {
      star.style.left = newX + 'px';
      star.style.top = newY + 'px';
    }
  }, 50); // Tempo de atualização de movimento de estrelas em milissegundos
  
  document.getElementById('sky').appendChild(star);
}

// Adicionando algumas estrelas iniciais ao carregar a página
for (let i = 0; i <= 5; i++) {
  addStar();
}


document.getElementById('btn').addEventListener('click', function(event) {
    createBubble(event.clientX, event.clientY);
});

function createBubble(x, y) {
    var bubble = document.createElement('span');
    bubble.className = 'bubble';
    bubble.style.left = x - 10 + 'px';
    bubble.style.top = y - 10 + 'px';
    document.getElementById('sky').appendChild(bubble);

    setTimeout(function() {
        bubble.remove();
    }, 1000);
}