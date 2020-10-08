export const MeetupsCalendarCell = {
  name: 'MeetupsCalendarCell',

  props: {
    day: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    },
    meetupsByDay: {
      type: Array,
      required: false,
      default: () => []
    },
  },

  computed: {
    style() {
      return {
        rangepicker__cell: true,
        rangepicker__cell_inactive: !this.active
      }
    },
  },

  template: `
    <div :class="style">{{day}}
      <a v-for="meetup in meetupsByDay" class="rangepicker__event">{{meetup.title ?? ''}}</a>
    </div>`,

  // components

  // props
};
