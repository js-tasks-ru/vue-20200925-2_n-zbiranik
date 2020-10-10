<template><div><button type="button" @click="inc">{{count}}</button></div></template>

<script>
export default {
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
};
</script>

<style></style>
