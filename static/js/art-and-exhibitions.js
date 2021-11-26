(() => {
    const app = {
        init () {
          this.cacheElements();
          this.generateUI();
        },
        cacheElements () {
          this.$arts = document.querySelector('.arts');
        },
        generateUI () {
          this.$arts.innerHTML = this.generateListOfArts(ARTS);
        },
        generateListOfArts (highlight) {
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
        }
    };
    app.init();
})();