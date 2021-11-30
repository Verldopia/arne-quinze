(() => {
    const app = {
        init () {
          this.cacheElements();
          this.generateUI();
        },
        cacheElements () {
          this.$listAtelier = document.querySelector('.list-articles');
        },
        generateUI () {
          this.$listAtelier.innerHTML += this.generateAtelierArticles(ATELIER);
        },
        generateAtelierArticles (atelier) {
          return atelier.map((ate) => {
            return `
            <div class="container-highlight container-articles">
                <img src="static/img/afbeeldingen/${ate.cover}" alt="${ate.title}">
                <h3 class="tags-grey">${ate.subtitle}</h3>
                <h2>${ate.title}</h2>
                <p>${ate.description}</p>
                <a href="atelier-studio/detail/index.html">Learn more</a>
            </div>`
          }).join(' ')
        }
    };
    app.init();
})();