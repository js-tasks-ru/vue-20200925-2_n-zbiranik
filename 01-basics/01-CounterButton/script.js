import Vue from './vue.esm.browser.js';

const app = new Vue({
  el: '#root',
  data() {
    return {
      message: 0
    }
  },
  methods: {
    inc() {
      this.message++
    }
  }
});
// Рекомендуется использовать МЕТОД в качестве обработчика события
