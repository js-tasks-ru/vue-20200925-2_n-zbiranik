import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem
  },

  props: {
    agenda: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  template: `
    <div class="meetup-agenda">
      <div v-for="agendaItem in agenda" class="meetup-agenda__item">
        <meetup-agenda-item :agendaItem="agendaItem"></meetup-agenda-item>
      </div>
    </div>`,

  // components

  // props
};
