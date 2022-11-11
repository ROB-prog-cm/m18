(function() {
  myCarousel = function(){
    let carousel = {
      containerCarousel: document.querySelector('.carousel'),
      listCarousel: document.querySelectorAll('.carousel li'),
      itemCarousel: [],
      countLeft: 0,
      countRight: 0,
      maxHeigth: 0,
      pagination: document.createElement('div')
    }

    function moveLeft() {
      let left = document.querySelector('.left');
      let center = document.querySelector('.center');
      let right = document.querySelector('.right');

      left.innerHTML = carousel.itemCarousel[carousel.countLeft++];
      if (carousel.countLeft === carousel.itemCarousel.length) carousel.countLeft = 0;

      carousel.countRight++;
      if (carousel.countRight === carousel.itemCarousel.length) carousel.countRight = 0;

      center.className = 'left';
      right.className = 'center';
      left.className = 'right first';
    }

    function moveRight() {
      let left = carousel.containerCarousel.querySelector('.left');
      let center = carousel.containerCarousel.querySelector('.center');
      let right = carousel.containerCarousel.querySelector('.right');

      right.innerHTML = carousel.itemCarousel[carousel.countRight--];
      if (carousel.countRight == -1) carousel.countRight = carousel.itemCarousel.length - 1;

      carousel.countLeft--;
      if (carousel.countLeft === -1) carousel.countLeft = carousel.itemCarousel.length - 1;

      center.className = 'right';
      left.className = 'center';
      right.className = 'left first';
    }

    function buildCarousel() {

      if (carousel.listCarousel.length > 2) {
        if (carousel.listCarousel.length === 3) {
          carousel.countLeft = 0;
          carousel.countRight = 2;
        } else {
          carousel.countLeft = 3;
          carousel.countRight = carousel.listCarousel.length - 1;
        }

        for (let i = carousel.listCarousel.length - 1; i >= 0; i--) {
          if (carousel.maxHeigth < carousel.listCarousel[i].offsetHeight) carousel.maxHeigth = carousel.listCarousel[i].offsetHeight;
          carousel.itemCarousel[i] = carousel.listCarousel[i].innerHTML;
          carousel.listCarousel[i].remove();
        }

        for (let j = 2; j >= 0; j--) {
          carousel.containerCarousel.appendChild(carousel.listCarousel[j]);
        }
        carousel.listCarousel[0].className = 'left';
        carousel.listCarousel[1].className = 'center';
        carousel.listCarousel[2].className = 'right';

        carousel.containerCarousel.style.height = carousel.maxHeigth + 'px';

        addPaginator();
      }
    }

    function addPaginator() {
      let btnLeft = document.createElement('div'),
        btnRight = document.createElement('div');

      btnLeft.className = 'btn';
      btnLeft.onclick = moveLeft;

      btnRight.onclick = moveRight;
      btnRight.className = 'btn';

      carousel.pagination.className = 'paginator';
      carousel.pagination.appendChild(btnLeft);
      carousel.pagination.appendChild(btnRight);

      carousel.containerCarousel.parentNode.appendChild(carousel.pagination);
    }

    function start() {
      buildCarousel();
      setInterval(moveLeft, 5000);
    }

    start();
  }

  myCarousel();

})();
