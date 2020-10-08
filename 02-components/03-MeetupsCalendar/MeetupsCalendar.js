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
      return mapRussianWeekDays[this.date.getDay()] - 1;
    },
    daysLeft() {
      const left = (this.dayWeek + this.daysMonth) % 7;
      return left === 0 ? 0 : 7 - left;
    },
  },

  methods: {
    decMonth() {
      this.date = new Date(this.date.setMonth(this.date.getMonth() - 1));
    },
    incMonth() {
      this.date = new Date(this.date.setMonth(this.date.getMonth() + 1));
    },
    getMeetupsByDay(day) {
      const currentMonth = this.date.getMonth();
      const currentYear = this.date.getFullYear();
      return this.meetups ? this.meetups.filter(function(item) {
        const dayMeetup = new Date(item.date).getDate();
        const monthMeetup = new Date(item.date).getMonth();
        const yearMeetup = new Date(item.date).getFullYear();
        return day === dayMeetup && currentMonth === monthMeetup && currentYear === yearMeetup;
      }) : [];
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
          <meetups-calendar-cell v-for="day in dayWeek" :key="day" :active="false" :day="daysPrevMonth - dayWeek + day"></meetups-calendar-cell>
          <meetups-calendar-cell v-for="day in daysMonth" :day="day" :meetupsByDay="getMeetupsByDay(day)"
                                 :key="day + dayWeek" :active="true"></meetups-calendar-cell>
          <meetups-calendar-cell v-for="day in daysLeft" :key="day + dayWeek + daysMonth" :day="day" :active="false"></meetups-calendar-cell>
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
