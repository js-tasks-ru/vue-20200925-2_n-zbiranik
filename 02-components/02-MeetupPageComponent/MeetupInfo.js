export const MeetupInfo = {
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true,
      default: ''
    },
    place: {
      type: String,
      required: true,
      default: ''
    },
    date: {
      type: Date,
      required: true,
      default: new Date()
    }
  },

  computed: {
    meetupLocalDate() {
      return this.date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  },

  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="date">{{meetupLocalDate}}</time>
      </li>
    </ul>`,

  // props

  // computed
};
