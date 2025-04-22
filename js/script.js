
// Atualiza o ano no footer
document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Animação da seção CTA
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(ctaSection);
    }
});

  // Filtro do portfólio
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterButtons.length > 0 && portfolioItems.length > 0) {
      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              filterButtons.forEach(btn => btn.classList.remove('active'));
              this.classList.add('active');
              
              const filterValue = this.getAttribute('data-filter');
              
              portfolioItems.forEach(item => {
                  if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              });
          });
      });
  }


// Formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Envia o formulario e mensagem viaFormSubmit.co usando Fetch API
            fetch('https://formsubmit.co/ajax/wirlly.silva@gmail.com', {
                method: 'POST',
                body: new FormData(contactForm)
            })
            .then(response => response.json())
            .then(data => {                
                window.location.href = 'http://127.0.0.1:5500/tks.html';
            })
            .catch(error => {
                alert('Ocorreu um erro. Tente novamente mais tarde.');
                console.error(error);
            });
        });
    }
});