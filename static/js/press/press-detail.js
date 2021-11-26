(() => {
    const app = {
        init () {
          this.cacheElements();
          this.generateUI();
        },
        cacheElements () {
          this.$imagesPress = document.querySelector('.box-images');
        },
        generateUI () {
          this.$imagesPress.innerHTML += this.generateImagesPress(PRESS);
        },
        generateImagesPress (press) {
          return press.map((pre) => {
            for (let i = 0; i < pre.images.length; i++) {
            return `
            <div class="box-image--small">
              <img class="imgs-press" src="static/img/afbeeldingen/${pre.cover}" alt="download-img">
              <a href="press/#">download image</a>
            </div>
            <div class="box-image--small">
            <img class="imgs-press" src="static/img/afbeeldingen/${pre.images[i]}" alt="download-img">
            <a href="press/#">download image</a>
            </div>`
          }
        }).join(' ')
      }
    };
    app.init();
})();