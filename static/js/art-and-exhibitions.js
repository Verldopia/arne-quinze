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
          return `
            <article class="box-article">
              <div class="box-text">
                <article class="box-articles">
                <h2 class="a-art--black"><a href="art-and-exhibitions/detail/index.html">${head.title}</a></h2>
                <h3>${head.subtitle}</h3>
                <p class="tags-grey">${head.tags} ${head.location === null ? head.location = "" : head.location}</p>
              </div>
              <div class="box-images--art">
                <img src="static/img/afbeeldingen/${head.images[0]}" loading="lazy" alt="${head.subtitle}">
              </div>
            </article>`
        }).join('');
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
        this.filterYears = `<div class="box-article box-article--year"><div class="box-text"><h2>${this.filterYears}</h2></div></div>`
          if (this.filterCategory != null) {
          this.$filterAll.innerHTML = this.filterYears
          this.$filterAll.innerHTML += this.generateListOfArts(items);
          this.$filterAll.innerHTML += this.generateListOfArts(years);
        } else {
          this.$filterAll.innerHTML = this.generateListOfArts(ARTS);
        }
      }
    };
    app.init();
})();