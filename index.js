const headerLists = $$(".header--list");
const header__connect = $(".header__connect");
const header__content = $(".header__content");
const about__item = $$(".about--item");
const slider__dots = $(".slider--dots");
const dots = $$(".dot");
const slider__imgs = $$(".slider--img");

const app1 = {
  render1: function () {},

  handlerEvents1: function () {
    //  Khi click thì hiện active
    headerLists.forEach(function (list, index) {
      list.addEventListener("click", function () {
        $(".header--list.active").classList.remove("active");
        this.classList.add("active");
      });

      // Khi hover thì hiện active2
      list.onmouseover = function () {
        this.classList.add("active2");
        list.onmouseout = function () {
          this.classList.remove("active2");
        };
      };
    });

    // cuộn lên xuống thì ẩn header bên trên
    document.onscroll = function () {
      const scrollY = window.scrollY;
      if (scrollY >= 36) {
        header__connect.style.display = "none";
        header__content.style.animation = "totop ease-in 0.5s";
      } else {
        header__connect.style.display = "flex";
        header__content.style.animation = "none";
      }
    };

    // Lắng nghe sự kiện click vào dot
    dots.forEach(function (dot, index3) {
      dot.onclick = function () {
        $(".dot.active6").classList.remove("active6");
        this.classList.add("active6");
        slider__imgs.forEach(function (content, index2) {
          $(".slider--img.active5").classList.remove("active5");
          slider__imgs[index3].classList.add("active5");
        });
      };
    });

    // SetTimeOut cho slider
    var i = 0;
    var time = 6000;
    function displayAbout() {
      $(".dot.active6").classList.remove("active6");
      $(".slider--img.active5").classList.remove("active5");
      slider__imgs[i].classList.add("active5");
      dots[i].classList.add("active6");
      dots.forEach(function (dot, index3) {
        dot.onclick = function () {
          i = index3;
        };
      });
      slider__imgs.forEach(function (about, index2) {
        about.onclick = function () {
          i = index2;
        };
      });

      if (i < 3) {
        i++;
      } else {
        i = 0;
      }
    }
    setInterval(displayAbout, time);
  },

  start1: function () {
    this.render1();
    this.handlerEvents1();
    // if (dem != 0) {
    //   this.render();
    //   dem = 0;
    // }
  },
};

app1.start1();
