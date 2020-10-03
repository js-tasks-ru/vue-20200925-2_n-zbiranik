import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return meetup.imageId ? `${API_URL}/images/${meetup.imageId}` : '';
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data: {
    meetup: {},
    hasNoAgenda: true,
    agendaFormatted: [],
  },

  mounted() {
    // Требуется получить данные митапа с API
    this.getMeetupData();
  },

  computed: {
    meetupImageUrl() {
      return `url(${getMeetupCoverLink(this.meetup)})`;
    },
    meetupLocalDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },

  methods: {
    // Получение данных с API предпочтительнее оформить отдельным методом,
    // а не писать прямо в mounted()
    async getMeetupData() {
      fetch(`${API_URL}/meetups/${MEETUP_ID}`)
        .then(async (response) => {
          this.meetup = await response.json();
          this.agendaFormatted = this.meetup.agenda.map((agenda) => ({
            ...agenda,
            isTalk: agenda.type === 'talk',
            iconSrc: `/assets/icons/icon-${agendaItemIcons[agenda.type]}.svg`,
            titleFormatted: agenda.title || agendaItemTitles[agenda.type],
          }));
          this.hasNoAgenda = this.agendaFormatted.length === 0;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
