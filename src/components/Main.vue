<template>
  <div>
    <PickMonths :months="months" @click="updateMonth" />
    <div class="picked__month" v-for="month in months" :key="month.id">
      <div v-if="month.value">
        {{ month.name }}
        <Days
          :month="month.id"
          :name="month.name"
          :days="month.days"
          :offset="month.offset"
          @click="pickedDay"
          @clickRadioButton="radioButtonClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Days from "@/components/Days.vue";
import PickMonths from "@/components/PickMonths.vue";

export default {
  components: {
    Days,
    PickMonths
  },
  data() {
    return {
      months: [
        {
          id: 1,
          name: "January",
          value: false,
          offset: this.getOffset(1),
          days: this.getDays(1)
        },
        {
          id: 2,
          name: "February",
          value: false,
          offset: this.getOffset(2),
          days: this.getDays(2)
        },
        {
          id: 3,
          name: "March",
          value: false,
          offset: this.getOffset(3),
          days: this.getDays(3)
        },
        {
          id: 4,
          name: "April",
          value: false,
          offset: this.getOffset(4),
          days: this.getDays(4)
        },
        {
          id: 5,
          name: "May",
          value: false,
          offset: this.getOffset(5),
          days: this.getDays(5)
        },
        {
          id: 6,
          name: "June",
          value: false,
          offset: this.getOffset(6),
          days: this.getDays(6)
        },
        {
          id: 7,
          name: "July",
          value: false,
          offset: this.getOffset(7),
          days: this.getDays(7)
        },
        {
          id: 8,
          name: "August",
          value: false,
          offset: this.getOffset(8),
          days: this.getDays(8)
        },
        {
          id: 9,
          name: "September",
          value: false,
          offset: this.getOffset(9),
          days: this.getDays(9)
        },
        {
          id: 10,
          name: "October",
          value: false,
          offset: this.getOffset(10),
          days: this.getDays(10)
        },
        {
          id: 11,
          name: "November",
          value: false,
          offset: this.getOffset(11),
          days: this.getDays(11)
        },
        {
          id: 12,
          name: "December",
          value: false,
          offset: this.getOffset(12),
          days: this.getDays(12)
        }
      ],
      //Year should be dynamic
      year: 2019
    };
  },
  methods: {
    getOffset(id) {
      //Year should be dynamic
      const getWeekDay = String(2019) + "-" + String(id) + "-" + String(1);
      const dayOfWeek = new Date(getWeekDay).getDay();
      let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      const monthStartDay = isNaN(dayOfWeek) ? null : weekDays[dayOfWeek];
      switch (monthStartDay) {
        case "Monday":
          return 0;
        case "Tuesday":
          return 1;
        case "Wednesday":
          return 2;
        case "Thursday":
          return 3;
        case "Friday":
          return 4;
        case "Saturday":
          return 5;
        case "Sunday":
          return 6;
        default:
          return 0;
      }
    },
    getDays(id) {
      //Year should be dynamic
      let daysInMonth = new Date(2019, id, 0).getDate();
      const dayArray = [];
      for (let index = 1; index <= daysInMonth; index++) {
        dayArray.push({
          id: index,
          value: false,
          bolk: this.insertBolk()
        });
      }
      return dayArray;
    },
    insertBolk() {
      let wantedBolks = [];
      for (let index = 1; index < 4; index++) {
        wantedBolks.push({
          id: index,
          name: "Bolk " + String(index),
          value: false
        });
      }
      return wantedBolks;
    },
    pickedDay(dayId, monthId) {
      const actualMonth = monthId - 1;
      const actualDay = dayId.id - 1;
      this.months[actualMonth].days[actualDay].value = true;
    },
    updateMonth(monthId) {
      const actualMonth = monthId - 1;
      if (this.months[actualMonth].value == false) {
        this.months[actualMonth].value = true;
      } else {
        this.months[actualMonth].value = false;
      }
    },
    radioButtonClicked(event, radioButton, month, day) {
      console.log(event, radioButton, month, day);
      //add store here
    }
  }
};
</script>

<style></style>
