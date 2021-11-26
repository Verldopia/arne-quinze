(() => {
    const app = {
        init () {
          this.cacheElements();
          this.generateUI();
        },
        cacheElements () {
          this.$listPress = document.querySelector('.list-articles');
        },
        generateUI () {
          this.$listPress.innerHTML += this.generatePressArticles(PRESS);
        },
        generatePressArticles (press) {
          return press.map((pre) => {
            return `
            <div class="container-highlight container-articles">
                <img class="img-highlight" src="static/img/afbeeldingen/${pre.cover}" alt="${pre.title}"></img>
                <h3 class="tags-grey">${pre.subtitle}</h3>
                <h2>${pre.title} - ${pre.location}</h2>
                <p>${pre.description}</p>
                <a href="press/detail/#">Open press release</a>
            </div>`
          }).join(' ')
        }
    };
    app.init();
})();