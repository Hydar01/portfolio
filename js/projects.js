fetch('data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('portfolioContainer');

    projects.forEach(p => {
      container.innerHTML += `
        <div class="portfolio-massonary-items mix ${p.filter} position-relative">
          
          <div class="modal fade" id="portfolioModal${p.id}" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered justify-content-center">
              <div>
                <button type="button" class="btn-close mb-10 btn" data-bs-dismiss="modal"></button>
                <img class="img-fluid" src="${p.image}" alt="portfolio img">
              </div>
            </div>
          </div>

          <img class="img-fluid" src="${p.image}" alt="portfolio img">
          <div class="portfolio-card-overlay w-100 position-absolute top-0"></div>

          <div class="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
            <div class="position-absolute mx-auto portfolio-card-overlay-contents">
              <p class="text-white fw-400 line-height-7">${p.type}</p>
              <a data-bs-toggle="modal"
                 data-bs-target="#portfolioModal${p.id}"
                 href="#portfolio${p.id}"
                 class="h4 text-white fw-600 line-height-3">
                 ${p.title}
              </a>
            </div>
          </div>
        </div>
      `;
    });

    // ✅ INIT MIXITUP AFTER DOM IS READY
    mixitup('#portfolioContainer', {
      selectors: {
        target: '.portfolio-massonary-items'
      },
      animation: {
        duration: 300
      }
    });
  });
