import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  components: {
    MeetupView
  },

  data() {
    return {
      meetup: {}
    };
  },

  mounted() {
    // Требуется получить данные митапа с API
    this.getMeetupData();
  },

  methods: {
    async getMeetupData() {
      this.meetup = await fetchMeetup(MEETUP_ID);
    },
  },

  template: `<div><meetup-view :meetup="meetup"></meetup-view></div>`,

  // components

  // data

  // mounted

  // methods
};
