(() => {
    const app = {
        init () {
          this.cacheElements();
          this.generateUI();
        },
        cacheElements () {
          this.$highlights = document.querySelector('.highlights');
          this.$atelier = document.querySelector('.atelier');
        },
        generateUI () {
          this.$highlights.innerHTML = this.generateHighlights(ARTS);
          this.$atelier.innerHTML = this.generateAtelier(ARTS);
        },
        generateHighlights (highlight) {
            return highlight.map((head) => {
                if (head.highlight == true) {
                    return `
                    <div class="container-highlight">
                        <img class="img-highlight" src="static/img/afbeeldingen/${head.cover}" alt="${head.subtitle}"></img>
                        <div class="tags-grey">${head.tags[0]} - ${head.location}</div>
                        <h3>${head.title}</h3>
                        <p>${head.description}</p>
                        <a href="#">Learn More</a>
                    </div>`
                } else {

                }
            }).join(' ')
        },
        generateAtelier (atelier) {
            for (let i = 0; i < 3; i++) {
                return atelier.map((atel) => {
                    if (i < 3 && atel.location == "Atelier, Sint-Martens-Latem, Belgium") {
                        i++
                        return `
                        <div class="container-highlight">
                            <img class="img-highlight" src="static/img/afbeeldingen/${atel.cover}" alt="${atel.subtitle}"></img>
                            <div class="tags-grey">${atel.tags[0]}</div>
                            <h3>${atel.title}</h3>
                            <p>${atel.description}</p>
                            <a href="#">Learn More</a>
                        </div>`
                    
                    } else {
                        
                    }    
                }).join(' ');
            }
        }
    };
    app.init();
})();