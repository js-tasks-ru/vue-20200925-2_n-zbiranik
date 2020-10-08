/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */
import { MeetupsCalendarCell } from './MeetupsCalendarCell.js';

const mapRussianWeekDays = {
  0: 7,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
};

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  components: {
    MeetupsCalendarCell,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      date: new Date(),
    };
  },

  computed: {
    monthYear() {
      return this.date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
      });
    },
    daysMonth() {
      return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    },
    daysPrevMonth() {
      return new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    },
    dayWeek() {
      return mapRussianWeekDays[new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()] - 1;
    },
    daysLeft() {
      const left = (this.dayWeek + this.daysMonth) % 7;
      return left === 0 ? 0 : 7 - left;
    },
    getMeetupsMonth() {
      const currentMonth = this.date.getMonth();
      const currentYear = this.date.getFullYear();
      return this.meetups ? this.meetups.filter(function(item) {
        const monthMeetup = new Date(item.date).getMonth();
        const yearMeetup = new Date(item.date).getFullYear();
        return currentMonth === monthMeetup && currentYear === yearMeetup;
      }) : [];
    },
  },

  methods: {
    decMonth() {
      const firstDay = new Date(this.date.setDate(1));
      this.date = new Date(firstDay.setMonth(this.date.getMonth() - 1));
    },
    incMonth() {
      const firstDay = new Date(this.date.setDate(1));
      this.date = new Date(firstDay.setMonth(this.date.getMonth() + 1));
    },
  },

  template: `
    <div class="rangepicker">
      <div class="rangepicker__calendar">
        <div class="rangepicker__month-indicator">
          <div class="rangepicker__selector-controls">
            <button class="rangepicker__selector-control-left" @click="decMonth"></button>
            <div>{{monthYear}}</div>
            <button class="rangepicker__selector-control-right" @click="incMonth"></button>
          </div>
        </div>
        <div class="rangepicker__date-grid">
          <div v-for="day in dayWeek" :key="day" class="rangepicker__cell rangepicker__cell_inactive">{{daysPrevMonth - dayWeek + day}}</div>
          <div v-for="day in daysMonth" :key="day + dayWeek" class="rangepicker__cell">{{day}}
            <a v-for="meetup in getMeetupsMonth" v-if="day===new Date(meetup.date).getDate()" class="rangepicker__event">{{meetup.title ?? ''}}</a>
          </div>
          <div v-for="day in daysLeft" :key="day + dayWeek + daysMonth" class="rangepicker__cell rangepicker__cell_inactive">{{day}}</div>
        </div>
      </div>
    </div>`,

  // Пропсы

  // В качестве локального состояния требуется хранить что-то,
  // что позволит определить текущий показывающийся месяц.
  // Изначально должен показываться текущий месяц

  // Вычислимые свойства помогут как с получением списка дней, так и с выводом информации

  // Методы понадобятся для переключения между месяцами
};
