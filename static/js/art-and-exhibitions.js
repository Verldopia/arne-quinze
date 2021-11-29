(() => {
    const app = {
        init () {
          this.cacheElements();
          this.generateUI();
        },
        cacheElements () {
          this.$arts = document.querySelector('.projects');
          this.$filterCategories = document.querySelector('.filter-category');
          
        },
        generateUI () {
          this.$arts.innerHTML = this.generateListOfArts(ARTS);
          this.$filterCategories.dataset.category = this.generateFilterCategories(ARTS);
          this.$filterCategories.addEventListener('click', this.generateFilterCategories) 
        },
        generateListOfArts (highlights) {
          return highlights.map((head) => {
            return `
            <div>
              <img src="static/img/afbeeldingen/" class="img-highlight" loading="lazy" alt="${head.subtitle}">
              <a href="art-and-exhibitions/detail/#">${head.title}</a>
              <div class="tags-grey">${head.tags} - ${head.location}</div>
            </div>`
          }).join(' ')
        },
        generateFilterCategories () {
          cat = document.querySelector('.filter-category').dataset.category
          if (cat == "undefined") {
            console.log('book')
          } else if (cat == "Documentary") {
            console.log('documentary')
          }
        }
    };
    app.init();
})();


