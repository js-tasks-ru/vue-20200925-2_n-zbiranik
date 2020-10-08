export const MeetupCover = {
  name: 'MeetupCover',

  props: {
    link: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },

  computed: {
    meetupStyle() {
      return this.link ? { '--bg-url': `url('${this.link}')` } : {};
    },
  },

  template: `<div class="meetup-cover" :style="meetupStyle">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,

  // props
};
