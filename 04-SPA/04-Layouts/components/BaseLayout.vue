<template>
  <div>
    <the-header class="header"/>
      <slot/>
    <the-footer class="footer"/>
  </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
export default {
  name: 'BaseLayout',
  components: { TheFooter, TheHeader },
};
</script>

<style scoped>
main {
  flex: 1 0 auto;
}
</style>
