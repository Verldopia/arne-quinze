(() => {
  const app = {
    filterCategory: null,
    filterYears: null,
    init() {
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      this.$filterOnCategories = document.querySelector('.filter-category');
      this.$filterOnYears = document.querySelector('.filter-years');
      this.$filterAll = document.querySelector('.projects');
    },
    generateUI() {
      this.generateFilterCategories();
      this.generateFilterYears();
      this.generateFilterForAll();
      this.$filterAll.innerHTML = this.generateListOfArts(ARTS);
      this.generateShowAll();
      this.generateIMG();
    },
    generateFilterCategories() {
      const allCategories = ARTS.map((tag) => tag.tags);
      const uniqueCategories = new Set([...allCategories.flat()]);
      const categoriesHTML = [...uniqueCategories].map((category) => { 
        return `
         <li>
            <button class="is-filter ${category === this.filterCategory ? 'is-selected' : ''}" data-category="${category}">${category}</button>
          </li>`
      }).join('')
      this.$filterOnCategories.innerHTML = `<li><button class="is-filter is-filter--show">Show all</button></li>${categoriesHTML}`
    },
    generateFilterYears() {
      const uniqueYears = [...new Set(ARTS.map(year => year.year))];
      const yearsHTML = uniqueYears.map((year) => {
        return `
          <li>
            <button class="is-filter ${year === this.filterYears ? 'is-selected' : ''}" data-year="${year}">${year}</button>
          </li>`
      }).join('')
      this.$filterOnYears.innerHTML = `<li><button class="is-filter is-filter--show">Show all</button></li>${yearsHTML}`
    },
    generateListOfArts(highlights) {
      return highlights.map((head) => {
        const images = head.images;
        const imageHTML = images.map((img) => {
          return `<li><img class="is-img" src="static/img/afbeeldingen/${img}" loading="lazy" alt="${head.subtitle}"></li>`
        }).join('')
        return `
          <article class="box-article">
            <div class="box-text">
              <article class="box-articles">
              <h2 class="a-art--black"><a href="art-and-exhibitions/detail/index.html">${head.title}</a></h2>
              <h3>${head.subtitle}</h3>
              <p class="tags-grey">${head.tags} ${head.location === null ? head.location = "" : head.location}</p>
            </div>
            <div class="box-images--art">
              <ul>
                ${imageHTML}
              </ul>
            </div>
          </article>`
      }).join('');
    },
    generateFilterForAll() {
      this.$categoryItems = document.querySelectorAll('.is-filter');
      for (const $filter of this.$categoryItems) {
        $filter.addEventListener('click', () => {
          const category = $filter.dataset.category;
          const year = $filter.dataset.year;
          this.filterCategory = category;
          this.filterYears = year;
          this.generateUI(this.filterYears);
          this.generateFilteredCategory();
          this.generateIMG();
        });
      }
    },
    generateFilteredCategory() {
      const category = ARTS.filter((item) => item.tags.includes(this.filterCategory));
      const years = ARTS.filter((year) => year.year === this.filterYears);
      this.filterYears = `<div class="box-article box-article--year"><div class="box-text"><h2>${this.filterYears !== this.filteryears ? this.filterYears : this.filterCategory}</h2></div></div>`
      if (this.filteryears !== null) {
        this.$filterAll.innerHTML = this.filterYears;
        this.$filterAll.innerHTML += this.generateListOfArts(category);
        this.$filterAll.innerHTML += this.generateListOfArts(years);
      }
    },
    generateShowAll() {
      this.$showAll = document.querySelectorAll('.is-filter--show');
      for (const $filterAll of this.$showAll) {
        $filterAll.addEventListener('click', () => {
          this.$filterAll = document.querySelector('.projects');
          this.$filterAll.innerHTML = this.generateListOfArts(ARTS);
          this.generateIMG();
        });
      }
    },
    generateIMG() {
      this.$images = document.querySelectorAll('.is-img');
      const modal = this.$active = document.querySelector('.active');
      for (const $image of this.$images) {
        const image = $image.getAttribute("src")
        $image.addEventListener('click', () => {
          $image.classList.add('active');
          $image.classList.remove('is-img');
          this.$active.style.visibility="visible";
          this.$active.innerHTML = `
            <div class="box-img">
              <img src="${image}">
            </div>`

          modal.addEventListener('click', () => {
            this.$active.style.visibility="hidden";
            $image.classList.remove('active');
            $image.classList.add('is-img');
          });
        });
      }
    }
  };
  app.init();
})();