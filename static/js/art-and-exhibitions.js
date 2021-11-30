(() => {
    const app = {
      filterCategory: null,
      filterYears: null,
      init () {
        this.cacheElements();
        this.generateUI();
      },
      cacheElements () {
        this.$arts = document.querySelector('.projects');
        this.$filterAll = document.querySelector('.projects');
        this.$categoryItems = document.querySelectorAll(".is-filter");
      },
      generateUI () {
        this.$arts.innerHTML = this.generateListOfArts(ARTS);
        this.$filterAll.innerHTML = this.generateListOfArts(ARTS);
        this.generateFilterForAll();
      },
      generateListOfArts (highlights) {
            return highlights.map((head) => {
              for (let i = 0; i < head.images.length; i++) {
              return `
                <article class="box-articles">
                  <a href="art-and-exhibitions/detail/index.html">${head.title}</a>
                  <div class="tags-grey">${head.tags} ${head.location === null ? head.location = "" : head.location}</div>
                  <div class="box-images">
                    <img src="static/img/afbeeldingen/${head.images[i]}" loading="lazy" alt="${head.subtitle}">
                  </div>
                </article>`
              }
          }).join(' ');
      },
      generateFilterForAll () {
          for (const $filter of this.$categoryItems) {
            $filter.addEventListener('click',() => {
              const category = $filter.dataset.category;
              this.filterCategory = category;
              this.filterYears = category;
              this.generateFilteredCategory();
            }, false);
          }
      },
      generateFilteredCategory () {
        const items = ARTS.filter((item) => item.tags.includes(this.filterCategory));
        const years = ARTS.filter((year) => year.year === this.filterYears);
          if (this.filterCategory != null) {
          this.$filterAll.innerHTML = this.generateListOfArts(items);
          this.$filterAll.innerHTML += this.generateListOfArts(years);
        } else {
          this.$filterAll.innerHTML = this.generateListOfArts(ARTS);
        }
      }
    };
    app.init();
})();