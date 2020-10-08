import { agendaItemIcons, agendaItemTitles } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  computed: {
    isTalk() {
      return this.agendaItem.type === 'talk';
    },
    iconSrc() {
      return `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`;
    },
    titleFormatted() {
      return this.agendaItem.title || agendaItemTitles[this.agendaItem.type];
    },
  },

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="iconSrc" />
      </div>
      <div class="meetup-agenda__item-col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{titleFormatted}}</h5>
        <p v-if="isTalk">
          <span>Докладчик</span>
          <span class="meetup-agenda__dot">{{agendaItem.speaker}}</span>
          <span class="meetup-agenda__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,

  // props

  // Возможно, тут потребуется computed
};
