export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="inc">{{count}}</button>',
  model: {
    prop: 'count',
    event: 'increment'
  },
  props: {
    count: {
      type: Number,
      required: false,
      default: 0
    }
  },
  methods: {
    inc() {
      this.$emit('increment', this.count + 1);
    }
  }


  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
