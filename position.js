const position__player = $$(".position--player");
const team__position = $(".team--position");
const app2 = {
  players: [
    // thủ môn
    {
      number: 1,
      name: "DeGea",
      img: "./asset/img/degea3.jpg",
    },
    {
      number: 22,
      name: "Heaton",
      img: "./asset/img/heaton.jpg",
    },
    //   Hậu vệ
    {
      number: 2,
      name: "Linderlof",
      img: "./asset/img/linderlot.jpg",
    },
    {
      number: 5,
      name: "Maguire",
      img: "./asset/img/macgai.jpg",
    },
    {
      number: 6,
      name: "martinez",
      img: "./asset/img/martinet.jpg",
    },
    {
      number: 12,
      name: "Malacia",
      img: "./asset/img/malacia.jpg.webp",
    },
    {
      number: 19,
      name: "Varane",
      img: "./asset/img/varane.jpg",
    },
    {
      number: 20,
      name: "Dalot",
      img: "./asset/img/dalot.jpg",
    },
    {
      number: 23,
      name: "Shaw",
      img: "./asset/img/shaw.jpg",
    },
    // Tiền vệ
    {
      number: 8,
      name: "Bruno",
      img: "./asset/img/bruno.jpg",
    },
    {
      number: 14,
      name: "Eriksen",
      img: "./asset/img/eriksen.jpg",
    },
    {
      number: 17,
      name: "Fred",
      img: "./asset/img/fred.jpg",
    },
    {
      number: 18,
      name: "Casemiro",
      img: "./asset/img/casemiro.jpg",
    },
    {
      number: 34,
      name: "Vandebeek",
      img: "./asset/img/vandebeek.jpg",
    },
    {
      number: 39,
      name: "Mctominay",
      img: "./asset/img/mactominay.jpg",
    },
    {
      number: 46,
      name: "Hannibal",
      img: "./asset/img/haniball.jpg",
    },
    // Tiền đạo
    {
      number: 7,
      name: "Ronaldo",
      img: "./asset/img/ronaldo.jpg",
    },
    {
      number: 9,
      name: "Martial",
      img: "./asset/img/martian.jpg",
    },
    {
      number: 10,
      name: "Rashford",
      img: "./asset/img/rasfosh.jpg",
    },
    {
      number: 11,
      name: "Greenwood",
      img: "./asset/img/greenwood.jpg",
    },
    {
      number: 25,
      name: "Sancho",
      img: "./asset/img/sancho.jpg",
    },
    {
      number: 36,
      name: "Elanga",
      img: "./asset/img/elanga.jpg",
    },
    {
      number: 49,
      name: "Garnacho",
      img: "./asset/img/garnacho.jpg",
    },
  ],

  playermain: [
    // thủ môn
    {
      number: 1,
      name: "DeGea",
      img: "./asset/img/degea3.jpg",
    },
    //   Hậu vệ
    {
      number: 20,
      name: "Dalot",
      img: "./asset/img/dalot.jpg",
    },
    {
      number: 6,
      name: "martinez",
      img: "./asset/img/martinet.jpg",
    },
    {
      number: 19,
      name: "Varane",
      img: "./asset/img/varane.jpg",
    },
    {
      number: 12,
      name: "Malacia",
      img: "./asset/img/malacia.jpg.webp",
    },
    // Tiền vệ
    {
      number: 14,
      name: "Eriksen",
      img: "./asset/img/eriksen.jpg",
    },
    {
      number: 8,
      name: "Bruno",
      img: "./asset/img/bruno.jpg",
    },
    {
      number: 39,
      name: "McTominay",
      img: "./asset/img/mactominay.jpg",
    },
    // Tiền đạo
    {
      number: 21,
      name: "Antony",
      img: "./asset/img/antony.jpg",
    },
    {
      number: 10,
      name: "Rashford",
      img: "./asset/img/rasfosh.jpg",
    },
    {
      number: 25,
      name: "Sancho",
      img: "./asset/img/sancho.jpg",
    },
  ],

  render2: function () {
    //render ra Đội hình thi đấu
    for (i = 0; i < 11; i++) {
      var k = i;
      const htmls = this.playermain.map((player, index) => {
        if (index == i) {
          return `
                      <img src="${this.playermain[k].img}" alt="">
                      <div class="position--info">
                          <div class=".position--number">${this.playermain[k].number}</div>
                          <div class=".position--name">${this.playermain[k].name}</div>
                      </div>
        
                        `;
        }
      });

      position__player[i].innerHTML = htmls.join("");
    }
  },

  handlerEvents2: function () {
    // hover vào team--position thì cái thanh đỏ dài ra
    position__player.forEach(function (player, index) {
      player.onmouseover = function () {
        this.classList.add("activeLineup");
      };

      player.onmouseout = function () {
        $(".position--player.activeLineup").classList.remove("activeLineup");
      };
    });
  },

  start2: function () {
    this.render2();
    this.handlerEvents2();
  },
};

app2.start2();
