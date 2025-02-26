// Animação de digitação na Home
const typewriter = document.querySelector('.typewriter');
const text = "Olá, eu sou Eloisa Lima";
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

type();

 // Função para inicializar um carrossel
function initCarousel(carouselInner, prevButton, nextButton) {
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * 33.33; // Move o carrossel em 33.33% por vez
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < carouselInner.children.length / 3 - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  }
  
  // Inicializar carrossel de projetos
  const projetosCarouselInner = document.querySelector('#projetos .carousel-inner');
  const projetosPrevButton = document.querySelector('#projetos .carousel-prev');
  const projetosNextButton = document.querySelector('#projetos .carousel-next');
  initCarousel(projetosCarouselInner, projetosPrevButton, projetosNextButton);
  
  // Inicializar carrossel de certificados
  const certificadosCarouselInner = document.querySelector('#certificados .carousel-inner');
  const certificadosPrevButton = document.querySelector('#certificados .carousel-prev');
  const certificadosNextButton = document.querySelector('#certificados .carousel-next');
  initCarousel(certificadosCarouselInner, certificadosPrevButton, certificadosNextButton);
  
  // Inicializar carrossel de soft skills
  const softSkillsCarouselInner = document.querySelector('#soft-skills .carousel-inner');
  const softSkillsPrevButton = document.querySelector('#soft-skills .carousel-prev');
  const softSkillsNextButton = document.querySelector('#soft-skills .carousel-next');
  initCarousel(softSkillsCarouselInner, softSkillsPrevButton, softSkillsNextButton);
  
// Efeito de Partículas na Home
tsParticles.load("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#E83F6F", // Cor das partículas
      },
      shape: {
        type: "circle", // Formato das partículas
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#E83F6F", // Cor das linhas
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Efeito ao passar o mouse
        },
      },
    },
  });