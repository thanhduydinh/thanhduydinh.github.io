const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const bxh = $(".bxh");
const header_name = $("header-name");
const body_bxh = $(".body_bxh");
const bxh_clb = $(".bxh_clb");

const app = {
  clubs: [
    {
      index: 1,
      name: "Bournemouth",
      name2: "bou",
      logo: "./asset/img/Bournemouth.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 2,
      name: "Arsenal",
      name2: "ars",
      logo: "./asset/img/ars.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 3,
      name: "Aston Villa",
      name2: "avl",
      logo: "./asset/img/Villa.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 4,
      name: "Brentford",
      name2: "bre",
      logo: "./asset/img/Brentford.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 5,
      name: "Brighton & Hove Albion",
      name2: "bha",
      logo: "./asset/img/Brighton.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 6,
      name: "Chelsea",
      name2: "che",
      logo: "./asset/img/chelsea.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 7,
      name: "Crystal Palace",
      name2: "cry",
      logo: "./asset/img/Crystal.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 8,
      name: "Everton",
      name2: "eve",
      logo: "./asset/img/everton.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 9,
      name: "Fulham",
      name2: "ful",
      logo: "./asset/img/fulham.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 10,
      name: "Leeds United",
      name2: "lee",
      logo: "./asset/img/leeds.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 11,
      name: "Leicester City",
      name2: "lei",
      logo: "./asset/img/Leicester.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 12,
      name: "Liverpool",
      name2: "liv",
      logo: "./asset/img/liverpool.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 10,
      name: "Manchester City",
      name2: "mnc",
      logo: "./asset/img/manchestercity.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 14,
      name: "Manchester United",
      name2: "mun",
      logo: "./asset/img/manchesterunited.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 15,
      name: "Newcastle United",
      name2: "nEw",
      logo: "./asset/img/Newcastle_United.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 16,
      name: "Nottingham Forest",
      name2: "nfo",
      logo: "./asset/img/Nottingham_Forest.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 17,
      name: "Southampton",
      name2: "sou",
      logo: "./asset/img/Southampton.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 18,
      name: "Tottenham Hotspur",
      name2: "tot",
      logo: "./asset/img/Tottenham.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 19,
      name: "West Ham United",
      name2: "whu",
      logo: "./asset/img/westham.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },

    {
      index: 20,
      name: "Wolves",
      name2: "wol",
      logo: "./asset/img/Wolves.png",
      game: 0,
      win: 0,
      draw: 0,
      lost: 0,
      goals: 0,
      goals_conceded: 0,
      hs: 0,
      point: 0,
    },
  ],

  matchs: [
    // Vòng 1
    {
      game: "cry0-2ars",
    },
    {
      game: "bou2-0avl",
    },
    {
      game: "tot4-1sou",
    },
    {
      game: "mun1-2bha",
    },
    {
      game: "eve0-1che",
    },
    {
      game: "ful2-2liv",
    },
    {
      game: "nEw2-0nfo",
    },
    {
      game: "lee2-1wol",
    },
    {
      game: "lei2-2bre",
    },
    {
      game: "whu0-2mnc",
    },

    // Vòng 2
    {
      game: "lei2-4ars",
    },
    {
      game: "eve1-2avl",
    },
    {
      game: "mnc4-0bou",
    },
    {
      game: "mun0-4bre",
    },
    {
      game: "tot2-2che",
    },
    {
      game: "sou2-2lee",
    },
    {
      game: "nEw0-0bha",
    },
    {
      game: "ful0-0wol",
    },
    {
      game: "nfo1-0whu",
    },
    {
      game: "liv1-1cry",
    },

    // Vòng 3
    {
      game: "tot1-0wol",
    },
    {
      game: "lei1-2sou",
    },
    {
      game: "cry3-1avl",
    },
    {
      game: "whu0-2bha",
    },
    {
      game: "nEw3-3mnc",
    },
    {
      game: "eve1-1nfo",
    },
    {
      game: "ful3-2bre",
    },
    {
      game: "bou0-3ars",
    },
    {
      game: "lee3-0che",
    },
    {
      game: "mun2-1liv",
    },
    // Vòng 4
    {
      game: "mun1-0sou",
    },
    {
      game: "bha1-0lee",
    },
    {
      game: "liv9-0bou",
    },
    {
      game: "ars2-1ful",
    },
    {
      game: "nEw1-1wol",
    },
    {
      game: "avl0-1whu",
    },
    {
      game: "che2-1lei",
    },
    {
      game: "mnc4-2cry",
    },
    {
      game: "bre1-1eve",
    },
    {
      game: "nfo0-2tot",
    },

    // Vòng 5
    {
      game: "cry1-1bre",
    },
    {
      game: "sou2-1che",
    },
    {
      game: "bou0-0wol",
    },
    {
      game: "ars2-1avl",
    },
    {
      game: "liv2-1nEw",
    },
    {
      game: "ful2-1bha",
    },
    {
      game: "eve1-1lee",
    },
    {
      game: "mnc6-0nfo",
    },
    {
      game: "whu1-1tot",
    },
    {
      game: "mun1-0lei",
    },

    // Vòng 6
    {
      game: "eve0-0liv",
    },
    {
      game: "nfo2-3bou",
    },
    {
      game: "bre5-2lee",
    },
    {
      game: "nEw0-0cry",
    },
    {
      game: "bha5-2lei",
    },
    {
      game: "tot2-1ful",
    },
    {
      game: "che2-1whu",
    },
    {
      game: "wol1-0sou",
    },
    {
      game: "avl1-1mnc",
    },
    {
      game: "mun3-1ars",
    },
  ],

  calculate: function () {
    const bou = this.clubs[0];
    const ars = this.clubs[1];
    const avl = this.clubs[2];
    const bre = this.clubs[3];
    const bha = this.clubs[4];
    const che = this.clubs[5];
    const cry = this.clubs[6];
    const eve = this.clubs[7];
    const ful = this.clubs[8];
    const lee = this.clubs[9];
    const lei = this.clubs[10];
    const liv = this.clubs[11];
    const mnc = this.clubs[12];
    const mun = this.clubs[13];
    const nEw = this.clubs[14];
    const nfo = this.clubs[15];
    const sou = this.clubs[16];
    const tot = this.clubs[17];
    const whu = this.clubs[18];
    const wol = this.clubs[19];

    // Tính số trận
    for (i = 0; i <= 19; i++) {
      this.matchs.forEach((match) => {
        if (match.game.slice(0, 3) === this.clubs[i].name2) {
          this.clubs[i].game += 1;
        }

        if (match.game.slice(6, 9) === this.clubs[i].name2) {
          this.clubs[i].game += 1;
        }
      });
    }

    // console.log(typeof parseInt(a));
    // tính số trận thắng , hòa , thua
    for (i = 0; i <= 19; i++) {
      this.matchs.forEach((match) => {
        var home = match.game.slice(3, 4);
        var away = match.game.slice(5, 6);
        if (match.game.slice(0, 3) === this.clubs[i].name2) {
          if (home > away) {
            this.clubs[i].win += 1;
          } else if (home == away) {
            this.clubs[i].draw += 1;
          } else if (home < away) {
            this.clubs[i].lost += 1;
          }
        }
        if (match.game.slice(6, 9) === this.clubs[i].name2) {
          if (home < away) {
            this.clubs[i].win += 1;
          } else if (home == away) {
            this.clubs[i].draw += 1;
          } else if (home > away) {
            this.clubs[i].lost += 1;
          }
        }
      });
    }

    // tính số bàn thắng / bàn thua
    for (i = 0; i <= 19; i++) {
      this.matchs.forEach((match) => {
        var home = match.game.slice(3, 4);
        var away = match.game.slice(5, 6);
        if (match.game.slice(0, 3) === this.clubs[i].name2) {
          this.clubs[i].goals += parseInt(home);
          this.clubs[i].goals_conceded += parseInt(away);
        }
        if (match.game.slice(6, 9) === this.clubs[i].name2) {
          this.clubs[i].goals += parseInt(away);
          this.clubs[i].goals_conceded += parseInt(home);
        }
      });
    }

    // Tính hiệu số
    for (i = 0; i <= 19; i++) {
      this.matchs.forEach((match) => {
        this.clubs[i].hs = this.clubs[i].goals - this.clubs[i].goals_conceded;
      });
    }

    // Tính điểm
    for (i = 0; i <= 19; i++) {
      this.matchs.forEach((match) => {
        var home = match.game.slice(3, 4);
        var away = match.game.slice(5, 6);
        if (match.game.slice(0, 3) === this.clubs[i].name2) {
          if (home > away) {
            this.clubs[i].point += 3;
          } else if (home == away) {
            this.clubs[i].point += 1;
          } else if (home < away) {
            this.clubs[i].point += 0;
          }
        }
        if (match.game.slice(6, 9) === this.clubs[i].name2) {
          if (home < away) {
            this.clubs[i].point += 3;
          } else if (home == away) {
            this.clubs[i].point += 1;
          } else if (home > away) {
            this.clubs[i].point += 0;
          }
        }
      });
    }

    // Tính thứ tự trên bxh

    //  Theo điểm
    this.clubs.sort(function (a, b) {
      return b.point - a.point;
    });
    // Bằng điểm thì so hiệu số
    for (let i = 0; i < this.clubs.length - 1; i++) {
      for (let j = 1; j < this.clubs.length; j++) {
        if (
          this.clubs[i].point === this.clubs[j].point &&
          this.clubs[i].hs - this.clubs[j].hs > 0
        ) {
          const a = this.clubs[i];
          this.clubs[i] = this.clubs[j];
          this.clubs[j] = a;
        }
      }
    }
    // Bằng hiệu số so bàn thắng
    for (let i = 0; i < this.clubs.length - 1; i++) {
      for (let j = 1; j < this.clubs.length; j++) {
        if (
          this.clubs[i].point === this.clubs[j].point &&
          this.clubs[i].hs === this.clubs[j].hs &&
          this.clubs[i].goals - this.clubs[j].goals > 0
        ) {
          const a = this.clubs[i];
          this.clubs[i] = this.clubs[j];
          this.clubs[j] = a;
        }
      }
    }

    // Đánh lại stt
    for (i = 0; i <= 19; i++) {
      this.clubs[i].index = i + 1;
    }

    // in đỏ vị trí mu
    this.clubs.forEach(function (club, index) {
      if (club.name2 == "mun") {
      }
    });
  },

  render: function () {
    //render ra bảng xếp hạng
    const htmls = this.clubs.map((club, index) => {
      return `
      <div class="body_bxh--wrapper">
        <div class="bxh_clb">
            <div class="bxh_stt ${index < 4 ? "bxh-active1" : ""} && ${
        index > 16 && index < 20 ? "bxh-active2" : ""
      }">${club.index}</div>
            <div class="club_logo">
                <img src="${club.logo}" alt="">
            </div>
            <div class="bxh_clbName">${club.name}</div>
        </div>

        <div class="bxh_value">
            <li><a href=""></a>${club.game}</li>
            <li><a href=""></a>${club.win}</li>
            <li><a href=""></a>${club.draw}</li>
            <li><a href=""></a>${club.lost}</li>
            <li><a href=""></a>${club.goals}</li>
            <li><a href=""></a>${club.goals_conceded}</li>
            <li><a href=""></a>${club.hs}</li>
            <li><a href=""></a>${club.point}</li>
        </div>
      </div>
       
        `;
    });

    body_bxh.innerHTML = htmls.join("");
  },

  start: function () {
    this.calculate();
    this.render();
  },
};

app.start();
