const schedule__contents = $(".schedule--contents");

const app3 = {
  schedules: [
    {
      day: "9/9",
      time: "02:00",
      competitor: "Real Sociedad",
      location: "Home",
    },
    {
      day: "11/9",
      time: "22:30",
      competitor: "Crystal Palace",
      location: "Away",
    },
    {
      day: "15/9",
      time: "23:45",
      competitor: "Sheriff",
      location: "Home",
    },
    {
      day: "18/9",
      time: "20:00",
      competitor: "Leeds",
      location: "Away",
    },
  ],

  render3: function () {
    //render ra bảng xếp hạng
    const htmls = this.schedules.map((schedule, index) => {
      return `
        <div class="schedule--content">
            <div class="schedule--day">${schedule.day}</div>
            <div class="schedule--title">
                <div class="schedule--time">${schedule.time}</div>
                <div class="schedule--competitor">
                <p>vs</p>
                ${schedule.competitor}
            </div>
                <div class="schedule-homeaway">${schedule.location}</div>
            </div>
        </div>
         
          `;
    });

    schedule__contents.innerHTML = htmls.join("");
  },

  start3: function () {
    this.render3();
  },
};

app3.start3();
